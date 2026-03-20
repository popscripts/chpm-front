import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

type ImportBody = {
  name?: string;
  translations?: Record<string, string>;
  keys_count?: number;
};

const ALLOWED_FILES = ["pl.json", "en.json"];
const MESSAGES_DIR = path.join(process.cwd(), "src", "messages");

export async function POST(request: Request) {
  // Only allow in development
  if (process.env.APP_ENV !== "dev") {
    return NextResponse.json(
      { error: "Not Found" },
      { status: 404 }
    );
  }

  // Check authorization
  const expectedSecret = process.env.UAT_SHARED_SECRET;
  const auth = request.headers.get("authorization");

  if (!expectedSecret || auth !== `Bearer ${expectedSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Optionally check client ID
  const clientId = request.headers.get("x-client-id");
  if (clientId && clientId !== "json-translator") {
    return NextResponse.json(
      { error: "Invalid client" },
      { status: 403 }
    );
  }

  // Validate body
  const body = (await request.json()) as ImportBody;
  if (!body.name || !body.translations || typeof body.keys_count !== "number") {
    return NextResponse.json(
      { error: "Invalid payload" },
      { status: 400 }
    );
  }

  // Validate filename
  if (!ALLOWED_FILES.includes(body.name)) {
    return NextResponse.json(
      {
        error: `Invalid file name. Allowed: ${ALLOWED_FILES.join(", ")}`,
      },
      { status: 400 }
    );
  }

  try {
    const filePath = path.join(MESSAGES_DIR, body.name);

    // Security: ensure path is within messages dir
    if (!filePath.startsWith(MESSAGES_DIR)) {
      return NextResponse.json(
        { error: "Path traversal attempt" },
        { status: 400 }
      );
    }

    // Write the file
    await fs.writeFile(
      filePath,
      JSON.stringify(body.translations, null, 2),
      "utf-8"
    );

    console.log(
      `[UAT] Imported translations: ${body.name} (${body.keys_count} keys)`
    );

    return NextResponse.json({
      ok: true,
      message: `File ${body.name} updated with ${body.keys_count} keys`,
    });
  } catch (error) {
    console.error("[UAT] Import failed:", error);
    return NextResponse.json(
      { error: "Failed to save translations" },
      { status: 500 }
    );
  }
}
