'use client';

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FormEvent } from 'react';

export const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  const loadingToast = toast.loading('Envoi en cours...');

  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
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
    toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.', {
      id: loadingToast,
    });
  }
};