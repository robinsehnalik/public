
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { teamMembers } from '@/lib/mock-data';
import { Target, Users, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <section className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-headline mb-6">
          About Give To Ukraine
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          We are a dedicated team committed to providing transparent and impactful humanitarian aid to the people of Ukraine. Our mission is driven by compassion and a desire to make a real difference.
        </p>
      </section>

      <section className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground font-headline mb-2">Our Mission</h2>
            <p className="text-muted-foreground">
              To deliver essential aid, support, and hope to Ukrainian communities affected by crisis, fostering resilience and recovery.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground font-headline mb-2">Our Values</h2>
            <p className="text-muted-foreground">
              Compassion, integrity, transparency, and collaboration guide every action we take. We believe in the power of collective effort.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground font-headline mb-2">Our Approach</h2>
            <p className="text-muted-foreground">
              We work directly with local partners to ensure aid reaches those most in need, prioritizing efficiency and accountability.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-foreground font-headline mb-12">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-64 w-full">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={member.dataAiHint}
                />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="font-headline">{member.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
