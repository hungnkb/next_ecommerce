import Layout from '@/components/layout';
import './globals.css';

export const metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className='absolute left-1/2 transform -translate-x-1/2 max-w-full min-w-full'>
          <Layout />
          <div className='px-6'>{children}</div>
        </div>
      </body>
    </html>
  );
}
