'use client';

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FormEvent } from 'react';
import { validateContactForm } from '@/lib/contact-validation';

export { validateContactForm } from '@/lib/contact-validation';

export const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const payload = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  const validationError = validateContactForm(payload);
  if (validationError) {
    toast.error(validationError);
    return;
  }

  const loadingToast = toast.loading('Envoi en cours...');

  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: payload.name,
        from_email: payload.email,
        subject: payload.subject,
        message: payload.message,
        to_email: 'abitwise.team@gmail.com',
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    if (response.status === 200) {
      toast.success('Message envoyé avec succès !', {
        id: loadingToast,
      });
      form.reset();
    }
  } catch (error) {
    console.log('Erreur:', error);
    toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.", {
      id: loadingToast,
    });
  }
};
