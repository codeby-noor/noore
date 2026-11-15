import React from 'react';
import { useNotification } from '../../context/NotificationContext';
import { X, Check, ShoppingBag, Heart } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useNotification();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-brand-charcoal text-white p-4 shadow-2xl border border-white/10 flex items-start space-x-3.5 transition-all duration-300 animate-slideInRight"
        >
          {toast.image ? (
            <div className="w-12 h-16 flex-shrink-0 bg-neutral-800 overflow-hidden">
              <img
                src={toast.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              {toast.type === 'bag' ? (
                <ShoppingBag className="w-4 h-4 text-white" />
              ) : toast.type === 'success' ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <Heart className="w-4 h-4 text-white" />
              )}
            </div>
          )}

          <div className="flex-1 min-w-0 pt-0.5">
            <h4 className="text-xs uppercase tracking-widest font-medium text-brand-sand">
              {toast.title}
            </h4>
            {toast.message && (
              <p className="text-xs text-neutral-300 mt-1 line-clamp-2 leading-relaxed">
                {toast.message}
              </p>
            )}
            {toast.actionText && toast.onAction && (
              <button
                onClick={() => {
                  toast.onAction?.();
                  removeToast(toast.id);
                }}
                className="mt-2 text-[11px] font-semibold uppercase tracking-widest text-white underline underline-offset-4 hover:text-brand-sand transition-colors"
              >
                {toast.actionText}
              </button>
            )}
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-neutral-400 hover:text-white p-1 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};

