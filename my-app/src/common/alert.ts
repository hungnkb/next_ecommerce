import { Bounce, toast, ToastOptions } from 'react-toastify';

export const alertToast = (type: 'success' | 'warn' | 'error', message?: string) => {
  const options = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  } as ToastOptions;
  if (type === 'success') return toast.success(message, options);
  if (type === 'warn') return toast.warn(message, options);
  if (type === 'error') return toast.error(message, options);
};
