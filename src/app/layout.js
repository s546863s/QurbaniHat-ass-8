import { Poppins } from 'next/font/google';
import "./globals.css";
import NavBar from "@/Components/Navbar/NavBar";
import Footer from "@/Components/Footer/Footer";

// Poppins font
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // Font size
  variable: '--font-poppins',
});


export const metadata = {
  title: {
    default: "QurbaniHat - Your Trusted Livestock Market",
    template: "%s | QurbaniHat", 
  },
  icons: {
    icon: "/favicon.webp", // যদি আলাদা ফোল্ডারে আইকন রাখেন
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.className}`}
    >
      <body className="">
        
 <NavBar></NavBar>
        
        <main className='max-w-7xl mx-auto'>
          {children}
        </main>
        
        <Footer />
        </body>
    </html>
  );
}
