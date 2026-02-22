export function createPageUrl(pageName: string) {
  return "/" + pageName.replace(/ /g, "-").toLowerCase();
}

export function createEventDetailsUrl(title: string, id: string) {
  const slug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `/wydarzenia/${slug}--${id}`;
}

export function parseEventIdFromParam(param: string) {
  const separator = "--";
  const separatorIndex = param.lastIndexOf(separator);

  if (separatorIndex === -1) {
    return param;
  }

  return param.slice(separatorIndex + separator.length);
}

export function createEventAnchorId(id: string) {
  return `event-${id}`;
}
