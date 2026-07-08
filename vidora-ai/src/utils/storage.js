export function getItem(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Fail silently if storage is unavailable (private browsing, quota, etc.)
  }
}

export function removeItem(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // Fail silently
  }
}
