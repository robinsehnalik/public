
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { fundEvents, impactStories } from '@/lib/mock-data';
import { HandHeart, Target, HeartHandshake } from 'lucide-react';

export default function OurWorkPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-headline mb-6">
          Our Work & Impact
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Discover our ongoing humanitarian initiatives and see the tangible difference your contributions make in the lives of Ukrainians.
        </p>
      </section>

      {/* Fund Collection Adverts Section */}
      <section id="fund-collection" className="mb-16 md:mb-24 scroll-mt-20">
        <div className="flex items-center justify-center mb-12">
          <Target className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
            Current Fundraising Initiatives
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fundEvents.map((event) => (
            <Card key={event.id} id={`fund-${event.id}`} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 scroll-mt-24">
              <div className="relative h-56 w-full">
                <Image 
                  src={event.imageUrl} 
                  alt={event.title} 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint={event.dataAiHint}
                />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                  <span>Raised: ${event.current.toLocaleString()}</span>
                  <span>Goal: ${event.goal.toLocaleString()}</span>
                </div>
                <Progress value={(event.current / event.goal) * 100} className="w-full h-3 mb-4" />
              </CardContent>
              <CardFooter>
                <Link href="/donate" passHref legacyBehavior>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group">
                    Donate to this Cause <HeartHandshake className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* How We Help Section */}
      <section id="impact-stories" className="scroll-mt-20">
        <div className="flex items-center justify-center mb-12">
          <HandHeart className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
            Real Stories of Impact
          </h2>
        </div>
        <div className="grid md:grid-cols-1 gap-8">
          {impactStories.map((story) => (
            <Card key={story.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 md:flex">
              <div className="md:w-1/3 relative min-h-[250px] md:min-h-full">
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={story.dataAiHint}
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <CardTitle className="font-headline">{story.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{story.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{story.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
