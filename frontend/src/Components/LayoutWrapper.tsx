'use client';
import { usePathname } from 'next/navigation';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbar = ['/onboarding/details','/onboarding/learning-path','/onboarding/payment',
                        '/onboarding/success', '/dashboard/welcome' 
                     ];
  const hideFooter = ['/onboarding/details','/onboarding/learning-path', '/onboarding/payment',
                      '/onboarding/success', '/dashboard/welcome' 
                     ];

  return (
    <>
      {!hideNavbar.includes(pathname ?? '') && <Navbar />}
      {children}
      {!hideFooter.includes(pathname ?? '') && <Footer />}
    </>
  );
}
