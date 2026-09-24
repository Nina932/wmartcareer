import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Way Mart | შეუერთდი გზაზე მეგობარ გუნდს',
  description: 'Way Mart-ის კარიერული სივრცე: გაიცანი ბრენდი, ადამიანები, როლები და შენი შემდეგი შესაძლებლობა.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ka"><body>{children}</body></html>;
}
