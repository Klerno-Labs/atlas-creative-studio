'use client';

import { useForm } from 'react-hook-form';
import { Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  _gotcha: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSuccess },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data._gotcha) return;

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    // In a real scenario, use fetch to your API route here
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4 animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-heading font-bold text-white">Message Sent!</h3>
        <p className="text-muted text-center max-w-sm">
          Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-body font-medium text-secondary">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Please enter a valid name' } })}
          className={`
            w-full bg-transparent border-b border-white/20 py-3 text-white outline-none transition-colors focus:border-accent
            ${errors.name ? 'border-red-500' : ''}
          `}
          placeholder="Jane Doe"
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-body font-medium text-secondary">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
            className={`
              w-full bg-transparent border-b border-white/20 py-3 text-white outline-none transition-colors focus:border-accent
              ${errors.email ? 'border-red-500' : ''}
            `}
            placeholder="jane@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-body font-medium text-secondary">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: 'Phone is required' })}
            className={`
              w-full bg-transparent border-b border-white/20 py-3 text-white outline-none transition-colors focus:border-accent
              ${errors.phone ? 'border-red-500' : ''}
            `}
            placeholder="(512) 555-0123"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-body font-medium text-secondary">
          Project Details
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'Message cannot be empty', maxLength: { value: 500, message: 'Message too long' } })}
          className={`
            w-full bg-transparent border-b border-white/20 py-3 text-white outline-none transition-colors focus:border-accent resize-none
            ${errors.message ? 'border-red-500' : ''}
          `}
          placeholder="Tell us about your project goals..."
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full py-4 bg-accent text-white font-heading font-bold tracking-wide hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}