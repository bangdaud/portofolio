// ============================================================
// UTILITY FUNCTIONS
// clsx + tailwind-merge: gabungkan class Tailwind dengan aman
// tanpa konflik class yang override satu sama lain.
// ============================================================
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() — helper untuk menggabungkan class Tailwind secara aman.
 * Contoh: cn("px-4 py-2", isActive && "bg-purple-500", "text-white")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Memformat tanggal ke string yang lebih manusiawi.
 * Contoh: formatDate("2024-01-15") → "15 Januari 2024"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Memotong teks panjang dengan ellipsis.
 * Contoh: truncate("Hello World", 5) → "Hello..."
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

/**
 * Mengubah string menjadi slug URL-friendly.
 * Contoh: slugify("Hello World") → "hello-world"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
