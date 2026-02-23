// DK-CUSTOM: Enforce exact 36-hour booking window on the client side.
// Slots beyond 36 hours from now are filtered out when DK theme is active.
export function isWithin36Hours(slotTime: string): boolean {
  const now = new Date();
  const slotDate = new Date(slotTime);
  const hoursDiff = (slotDate.getTime() - now.getTime()) / (1000 * 60 * 60);
  return hoursDiff >= 0 && hoursDiff <= 36;
}
