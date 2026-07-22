export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function validateContactForm(data: ContactPayload): string | null {
  if (!data.name?.trim()) return 'Le nom est requis.';
  if (!data.email?.trim()) return "L'email est requis.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return "L'email est invalide.";
  }
  if (!data.subject?.trim()) return 'Le sujet est requis.';
  if (!data.message?.trim()) return 'Le message est requis.';
  return null;
}
