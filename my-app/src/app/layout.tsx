import Layout from '@/components/layout';
import './globals.css';
import { Providers } from '@/components/providers';
import { CheckAuth } from '@/components/auth/check-auth';

export const metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html>
        <body>
          <div className='absolute left-1/2 transform -translate-x-1/2 max-w-full min-w-full bg-slate-200 min-h-full'>
            <CheckAuth />
            <Layout />
            <div className='px-6 '>{children}</div>
          </div>
        </body>
      </html>
    </Providers>
  );
}
