
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/sections/hero-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { fundEvents, newsArticles, impactStories } from '@/lib/mock-data';
import { ArrowRight, Newspaper, Users, HeartHandshake } from 'lucide-react';

export default function Home() {
  const featuredFundEvent = fundEvents[0];
  const latestNewsArticle = newsArticles[0];
  const featuredImpactStory = impactStories[0];

  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* About Us Preview */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline mb-4">
                Our Mission: Hope and Aid for Ukraine
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Give To Ukraine is dedicated to providing critical humanitarian assistance to individuals and communities impacted by the conflict. We focus on transparency, efficiency, and direct impact.
              </p>
              <Link href="/about" passHref>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 group">
                  Learn More About Us <Users className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Team working or aid distribution" 
                layout="fill" 
                objectFit="cover"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Fund Event Preview */}
      {featuredFundEvent && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl font-headline mb-12">
              Current Initiative
            </h2>
            <Card className="max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="relative h-60 w-full mb-4 rounded-t-lg overflow-hidden">
                  <Image 
                    src={featuredFundEvent.imageUrl} 
                    alt={featuredFundEvent.title} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={featuredFundEvent.dataAiHint}
                  />
                </div>
                <CardTitle className="font-headline">{featuredFundEvent.title}</CardTitle>
                <CardDescription>{featuredFundEvent.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                  <span>Raised: ${featuredFundEvent.current.toLocaleString()}</span>
                  <span>Goal: ${featuredFundEvent.goal.toLocaleString()}</span>
                </div>
                <Progress value={(featuredFundEvent.current / featuredFundEvent.goal) * 100} className="w-full h-3" />
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link href={`/our-work#fund-${featuredFundEvent.id}`} passHref>
                  <Button className="w-full sm:w-auto group">
                    Support This Cause <HeartHandshake className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                  </Button>
                </Link>
                <Link href="/our-work" passHref>
                  <Button variant="link" className="text-primary w-full sm:w-auto">
                    See All Initiatives <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      )}

      {/* Impact Story Preview */}
       {featuredImpactStory && (
        <section className="py-16 lg:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl font-headline mb-12">
              Making a Difference
            </h2>
             <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 md:flex">
                <div className="md:w-1/2 relative min-h-[250px] md:min-h-full">
                  <Image
                    src={featuredImpactStory.imageUrl}
                    alt={featuredImpactStory.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={featuredImpactStory.dataAiHint}
                  />
                </div>
                <div className="md:w-1/2">
                  <CardHeader>
                    <CardTitle className="font-headline">{featuredImpactStory.title} - <span className="text-primary">{featuredImpactStory.location}</span></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{featuredImpactStory.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/our-work#impact-stories" passHref>
                      <Button variant="outline" className="text-primary border-primary hover:bg-primary/10 group">
                        Read More Impact Stories <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </Card>
          </div>
        </section>
      )}

      {/* News Preview */}
      {latestNewsArticle && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center text-foreground sm:text-4xl font-headline mb-12">
              Latest Updates
            </h2>
            <Card className="max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="relative h-60 w-full mb-4 rounded-t-lg overflow-hidden">
                   <Image 
                    src={latestNewsArticle.imageUrl} 
                    alt={latestNewsArticle.title} 
                    layout="fill" 
                    objectFit="cover" 
                    data-ai-hint={latestNewsArticle.dataAiHint}
                  />
                </div>
                <CardTitle className="font-headline">{latestNewsArticle.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {latestNewsArticle.date} - {latestNewsArticle.source}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{latestNewsArticle.summary}</p>
              </CardContent>
              <CardFooter>
                <Link href="/news" passHref>
                  <Button className="group">
                    Read More News <Newspaper className="ml-2 h-5 w-5 group-hover:animate-ping" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      )}

    </div>
  );
}
