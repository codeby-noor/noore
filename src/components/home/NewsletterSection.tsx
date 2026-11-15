import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSuccess(true);
    setEmail('');
  };

  return (
    <section className="py-24 bg-brand-pureWhite text-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-2">
          THE PRIVATE CIRCLE
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal tracking-tight mb-3">
          Join our world.
        </h2>

        <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed mb-8">
          Sign up to receive early access to seasonal capsule drops, bespoke tailoring invitations, and our quarterly print gazette.
        </p>

        {isSuccess ? (
          <div className="p-4 bg-brand-sand border border-brand-warmBeige flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-brand-black">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Welcome to NOORÉ. Your 10% privilege invitation is on its way.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="YOUR EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3.5 bg-brand-sand/50 border border-brand-border text-xs tracking-wider uppercase focus:border-black focus:outline-none placeholder:text-neutral-400 placeholder:normal-case"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2 shadow-xs"
            >
              <span>SUBSCRIBE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[10px] text-neutral-400 mt-4 tracking-wide">
          By subscribing, you agree to our Privacy Policy. You may unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

