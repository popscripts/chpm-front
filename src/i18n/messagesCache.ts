import fs from "fs/promises";
import path from "path";

export async function loadMessagesRuntime(locale: string) {
  const messagesPath = path.join(
    process.cwd(),
    "src/messages",
    `${locale}.json`
  );
  const messagesFile = await fs.readFile(messagesPath, "utf-8");
  return JSON.parse(messagesFile);
}

