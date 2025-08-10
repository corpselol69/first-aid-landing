export const RUSTORE_URL = import.meta.env.VITE_RUSTORE_URL || "#";
export const APK_URL = import.meta.env.VITE_APK_URL || "#";
export const WEB_URL =
  import.meta.env.VITE_WEB_URL ||
  (typeof window !== "undefined"
    ? window.location.origin + import.meta.env.BASE_URL
    : import.meta.env.BASE_URL);
