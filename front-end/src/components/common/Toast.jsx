import React from 'react';
import { useLead } from '../../context/LeadContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

const Toast = () => {
  const { toast } = useLead();

  if (!toast.visible) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-600 shrink-0" />;
      default:
        return <AlertCircle className="w-5 h-5 text-accent shrink-0" />;
    }
  };

  return (
    <div className="fixed top-24 right-6 z-50 max-w-md animate-fade-in">
      <div className="bg-surface border border-border text-ink px-5 py-4 rounded-xl shadow-lg flex items-start gap-3">
        {getIcon()}
        <div className="text-sm font-medium leading-snug">{toast.message}</div>
      </div>
    </div>
  );
};

export default Toast;
