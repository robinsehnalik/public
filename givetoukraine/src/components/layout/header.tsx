
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, HeartHandshake, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/news', label: 'News' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
          className={cn(
            "px-3 py-2 rounded-md text-sm font-medium transition-colors",
            pathname === item.href
              ? "bg-primary/10 text-primary"
              : "text-foreground hover:bg-primary/5 hover:text-primary",
            isMobile && "block w-full text-left text-base mb-2"
          )}
        >
          {item.label}
        </Link>
      ))}
      <Link href="/donate" passHref>
        <Button
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
          className={cn(
            "bg-accent hover:bg-accent/90 text-accent-foreground",
            isMobile ? "w-full mt-4" : "ml-4"
          )}
          aria-label="Donate"
        >
          Donate
        </Button>
      </Link>
    </>
  );
  
  if (!isMounted) {
    return ( // Render a placeholder or simplified header during SSR/hydration mismatch
      <header className="bg-card shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <HeartHandshake className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary font-headline">Give To Ukraine</span>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-foreground" />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <HeartHandshake className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary font-headline">Give To Ukraine</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks />
          </nav>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-card p-6">
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                    <HeartHandshake className="h-8 w-8 text-primary" />
                    <span className="ml-2 text-xl font-bold text-primary font-headline">Give To Ukraine</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="h-6 w-6 text-foreground" />
                  </Button>
                </div>
                <nav className="flex flex-col">
                  <NavLinks isMobile={true} />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
