import React, { useState } from 'react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Mail, Phone, MapPin, MessageSquare, Check, Clock, Shield } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    orderNumber: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-brand-pureWhite min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Client Concierge' }]} />

        {/* Header */}
        <div className="py-12 text-center max-w-2xl mx-auto border-b border-brand-border">
          <span className="text-[10px] uppercase tracking-super-wide text-neutral-400 block mb-2 font-mono">
            HAUTE CLIENT SERVICES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-brand-black font-normal tracking-tight">
            Client Concierge & Ateliers
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 font-light mt-3 leading-relaxed">
            Our private stylists and client advisors are at your service for bespoke sizing consultations, private trunk appointments, and express order dispatch.
          </p>
        </div>

        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-brand-black font-normal mb-6">
                Direct Inquiries
              </h3>

              <div className="space-y-6 text-xs">
                <div className="flex items-start space-x-3.5">
                  <Mail className="w-4 h-4 text-neutral-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-brand-black block mb-0.5">
                      Client Concierge Email
                    </span>
                    <a href="mailto:concierge@noore-atelier.com" className="text-neutral-600 hover:text-black underline">
                      concierge@noore-atelier.com
                    </a>
                    <span className="block text-neutral-400 text-[11px] mt-0.5">Responses guaranteed within 4 hours</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <MessageSquare className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-brand-black block mb-0.5">
                      VIP WhatsApp Styling Line
                    </span>
                    <span className="text-neutral-700 font-mono">+971 4 829 1044</span>
                    <span className="block text-neutral-400 text-[11px] mt-0.5">Monday–Sunday: 9:00 AM – 10:00 PM GST</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-4 h-4 text-neutral-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-brand-black block mb-0.5">
                      Private Salon Locations
                    </span>
                    <p className="text-neutral-600 leading-relaxed">
                      <strong>Dubai:</strong> Design District (d3), Building 7, Suite 402<br />
                      <strong>London:</strong> 28 Old Bond Street, Mayfair
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Atelier FAQ Snippet */}
            <div className="p-6 bg-brand-sand/40 border border-brand-warmBeige space-y-3 text-xs">
              <span className="font-semibold uppercase tracking-wider text-brand-black block">
                Quick Answers
              </span>
              <div>
                <strong>How long does global express delivery take?</strong>
                <p className="text-neutral-500 font-light mt-0.5">
                  Orders over $100 receive complimentary express courier shipping and arrive within 3-5 business days globally.
                </p>
              </div>
              <div className="pt-2">
                <strong>What is the return policy?</strong>
                <p className="text-neutral-500 font-light mt-0.5">
                  We accept returns within 30 days in unworn condition with tags attached. A complimentary return shipping label is provided in every package.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-brand-sand/30 border border-brand-border p-6 sm:p-10">
            <h3 className="font-serif text-2xl text-brand-black font-normal mb-2">
              Send an Atelier Inquiry
            </h3>
            <p className="text-xs text-neutral-500 mb-6 font-light">
              Please complete the details below and an atelier representative will contact you directly.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-white border border-brand-border text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-brand-black">Message Received</h4>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name || 'valued patron'}. Your inquiry has been routed to our senior client concierge team.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-brand-black text-white text-xs uppercase tracking-widest font-medium"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maryam Farooq"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none bg-white"
                    >
                      <option>General Styling Advice</option>
                      <option>Bespoke Abaya Sizing Question</option>
                      <option>Existing Order Inquiries</option>
                      <option>Private Trunk Show Appointment</option>
                      <option>Press & Editorial Loans</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                      Order Reference (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="NOORE-XXXXXX"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none bg-white uppercase font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your requirements or garment questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs border border-brand-border focus:border-black focus:outline-none bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-black text-white text-xs uppercase tracking-super-wide font-medium hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  DISPATCH INQUIRY TO CONCIERGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

