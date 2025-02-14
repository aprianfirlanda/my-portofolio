import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Aprian Firlanda Imani',
  description:
    'This is My Portfolio as Full Stack Web Developer. ' +
    'I have over 4 years of experience as a web developer, creating ' +
    'robust and scalable web applications. Skilled in both front-end ' +
    'and back-end development, I ensure seamless functionality. ' +
    'Proficient in various languages and frameworks, I thrive in ' +
    'collaborative environments. Spring Boot | Angular | Next.js ' +
    '| React.js | PostgreSQL | Docker | Node.js | Redis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
