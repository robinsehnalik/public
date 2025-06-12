
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { newsArticles } from '@/lib/mock-data';
import { Newspaper, ExternalLink } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <section className="text-center mb-16 md:mb-20">
        <div className="flex items-center justify-center mb-6">
          <Newspaper className="h-12 w-12 text-primary mr-4" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-headline">
            Live Updates from Ukraine
          </h1>
        </div>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Stay informed with the latest news and developments from official Ukrainian sources and our partners on the ground.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image 
                  src={article.imageUrl} 
                  alt={article.title} 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint={article.dataAiHint}
                />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline text-xl mb-1">{article.title}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} - {article.source}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-4">{article.summary}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full text-primary border-primary hover:bg-primary/10 hover:text-primary group">
                  <Link href={article.link} target="_blank" rel="noopener noreferrer">
                    Read Full Article <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
