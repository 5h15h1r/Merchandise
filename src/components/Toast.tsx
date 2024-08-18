import { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  duration?: number; // Duration in milliseconds (default to 3000)
  type?: 'success' | 'error' | 'info'; // Type of the toast (optional)
  onClose?: () => void; // Optional callback when toast closes
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, type = 'info', onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [duration, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  return (
    <div
      className={`fixed z-50 bottom-5 right-5 p-4 text-white rounded-lg shadow-lg transition-transform transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${typeStyles[type]}`}
    >
      {message}
    </div>
  );
};

export default Toast;
