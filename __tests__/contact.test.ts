import { validateContactForm } from '../lib/contact-validation';

describe('validateContactForm', () => {
  it('accepts a valid payload', () => {
    expect(
      validateContactForm({
        name: 'Ada',
        email: 'ada@example.com',
        subject: 'Hello',
        message: 'World',
      })
    ).toBeNull();
  });

  it('rejects missing fields', () => {
    expect(
      validateContactForm({
        name: '',
        email: 'ada@example.com',
        subject: 'Hello',
        message: 'World',
      })
    ).toBe('Le nom est requis.');
  });

  it('rejects invalid email', () => {
    expect(
      validateContactForm({
        name: 'Ada',
        email: 'not-an-email',
        subject: 'Hello',
        message: 'World',
      })
    ).toBe("L'email est invalide.");
  });
});
