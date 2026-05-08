export type OS = "ios" | "android" | "macos" | "windows" | "linux" | "unknown";

export function detectOS(userAgent: string): OS {
  const ua = userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/android/.test(ua)) return "android";
  if (/mac os x|macintosh/.test(ua)) return "macos";
  if (/windows/.test(ua)) return "windows";
  if (/linux/.test(ua)) return "linux";

  return "unknown";
}

export function isMobile(os: OS): boolean {
  return os === "ios" || os === "android";
}
