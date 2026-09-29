/**
 * API client helper functions.
 * Stubs for future backend connection.
 */

export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`API request failed with status: ${response.status}`);
  }
  return response.json();
}
