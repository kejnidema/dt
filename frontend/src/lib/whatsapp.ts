// Vite embeds VITE_* values in the public client bundle. Keep the value out of Git,
// but do not use this for credentials or any value that must be hidden from visitors.
const phone = import.meta.env.VITE_WHATSAPP_NUMBER?.trim();
const validPhone = phone && /^[1-9]\d{6,14}$/.test(phone) ? phone : undefined;

export function whatsAppUrl(message?: string): string | undefined {
  if (!validPhone) return undefined;
  const url = `https://wa.me/${validPhone}`;
  return message ? `${url}?text=${encodeURIComponent(message)}` : url;
}
