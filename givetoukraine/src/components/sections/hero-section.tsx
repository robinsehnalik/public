
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background text-center py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Ukrainian landscape or symbol of hope"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
          data-ai-hint="ukraine landscape"
        />
        <div className="absolute inset-0 bg-background/30"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground font-headline">
          Stand With <span className="text-primary">Ukraine</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Your support provides essential humanitarian aid to those affected by the conflict. Help us deliver hope and relief.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/donate" passHref>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3 w-full sm:w-auto transform transition-transform duration-300 hover:scale-105"
              aria-label="Donate Now"
            >
              Donate Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/our-work" passHref>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 w-full sm:w-auto text-primary border-primary hover:bg-primary/10 hover:text-primary transform transition-transform duration-300 hover:scale-105"
              aria-label="Learn How We Help"
            >
              Learn How We Help
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
