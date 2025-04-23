'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function LeadEmailCapture({ landingPage }: { landingPage: string }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    // Prevent form from submitting normally if event exists
    if (e) e.preventDefault();

    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://hook.us1.make.com/l94ijv7dlx4w7r8rcey7grvqgw0ope2j', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, landingPage }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      // Clear the form on success
      setEmail('');
      // Redirect to success page
      router.push('/success');
    } catch {
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <label className="text-sm font-bold text-black">
        Enter your email to get started
      </label>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john.smith@johnmfg.com"
          className="h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 h-12 bg-blue-primary text-white hover:bg-blue-secondary rounded-md disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Get Started'}
          </button>
          <a
            href={`/demo?landingPage=${landingPage}`}
            className="flex-1 h-12 border border-gray-300 hover:bg-gray-50 rounded-md flex items-center justify-center"
          >
            Book a Demo
          </a>
        </div>
      </form>
    </div>
  );
}
