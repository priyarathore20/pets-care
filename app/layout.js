import { SnackbarProvider } from '@/context/SnackbarProvider';
import AuthContextProvider from '@/context/UserContext';
import { Public_Sans } from 'next/font/google';
import './globals.css';

const public_sans = Public_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'PeTrack',
  description:
    'Now you can easily keep eye on your loving pets by tracking them globally',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="html-tag">
      <body className={public_sans.className }>
        <AuthContextProvider>
          <SnackbarProvider>{children} </SnackbarProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
