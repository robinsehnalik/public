
import { Facebook, Twitter, Instagram, Linkedin, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook size={24} />
          </Link>
          <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={24} />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={24} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Give To Ukraine. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Made with <HeartHandshake className="inline h-4 w-4 text-primary" /> for a peaceful future.
        </p>
      </div>
    </footer>
  );
}
