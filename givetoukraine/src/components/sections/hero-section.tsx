import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background text-center py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-black/95">
        <Image
          src="/images/ukraine1.jpeg"
          alt="Ukrainian landscape or symbol of hope"
          layout="fill"
          objectFit="cover"
          className="object-cover opacity-80"
          quality={100}
          loading="eager"
          priority
          data-ai-hint="ukraine landscape"
        />
        <div className="absolute inset-0 bg-background/30"></div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <h1
            className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 animate-typing text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-headline drop-shadow-lg"
            style={{ width: "18ch" }} // Adjust this number to fit text length
          >
            Stand With <span className="text-primary">Ukraine</span>
          </h1>
        </div>
      </div>
      <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-white drop-shadow-2xl font-bold">
        Your support provides essential humanitarian aid to those affected by
        the conflict. Help us deliver hope and relief.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link href="/donate" passHref>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3 w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 font-bold"
            aria-label="Donate"
          >
            Donate
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <Link href="/our-work" passHref>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-3 w-full sm:w-auto text-primary border-primary hover:bg-primary/10 hover:text-primary transform transition-transform duration-300 hover:scale-105 font-bold"
            aria-label="Learn How We Help"
          >
            Learn How We Help
          </Button>
        </Link>
      </div>
    </section>
  );
}
