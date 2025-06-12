
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, HeartHandshake, Gift } from 'lucide-react';

const donationOptions = [
  { amount: 25, description: "Provides a hygiene kit for one person." },
  { amount: 50, description: "Offers a food parcel for a small family for a week." },
  { amount: 100, description: "Contributes to emergency medical supplies." },
  { amount: 250, description: "Helps provide temporary shelter for a displaced family." },
];

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <section className="text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center mb-6">
          <Gift className="h-12 w-12 text-accent mr-4" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-headline">
            Support Ukraine Today
          </h1>
        </div>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          Your generous contribution can make a significant impact. Every donation, no matter the size, helps us provide vital aid to those in need.
        </p>
      </section>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Donation Form Section */}
        <section className="lg:col-span-3">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-center">Make a Secure Donation</CardTitle>
              <CardDescription className="text-center">Choose an amount or enter your own.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {donationOptions.map((option) => (
                  <Button
                    key={option.amount}
                    variant="outline"
                    className="h-auto py-3 flex flex-col items-center justify-center text-center hover:bg-primary/10 hover:border-primary group transition-all"
                  >
                    <span className="text-xl font-semibold text-primary group-hover:text-primary-foreground">${option.amount}</span>
                    <span className="text-xs text-muted-foreground mt-1 group-hover:text-primary-foreground/80">{option.description}</span>
                  </Button>
                ))}
              </div>
              
              <div>
                {/* This would be replaced by an actual payment form/integration */}
                <label htmlFor="custom-amount" className="block text-sm font-medium text-foreground mb-1">Or enter a custom amount:</label>
                <input 
                  type="number" 
                  id="custom-amount" 
                  name="custom-amount"
                  placeholder="e.g., 75"
                  className="w-full p-3 border border-input rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 mt-6 transform transition-transform duration-300 hover:scale-105"
                onClick={() => alert('Redirecting to secure payment gateway... (Placeholder)')}
              >
                <ShieldCheck className="mr-2 h-6 w-6" /> Donate Securely
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Your donation is processed securely. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Why Donate Section */}
        <aside className="lg:col-span-2 space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline flex items-center"><HeartHandshake className="mr-2 h-6 w-6 text-primary" /> Your Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" /> Provides emergency food, water, and shelter.</p>
              <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" /> Delivers essential medical supplies and care.</p>
              <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" /> Supports displaced families and children.</p>
              <p className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" /> Helps rebuild communities and restore hope.</p>
            </CardContent>
          </Card>
          <Card className="bg-primary/10 border-primary shadow-lg">
            <CardHeader>
               <CardTitle className="font-headline flex items-center text-primary"><ShieldCheck className="mr-2 h-6 w-6" /> Transparency & Trust</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We are committed to financial transparency. Regular reports on how donations are used are published on our website. 
                Your trust is paramount to our mission.
              </p>
            </CardContent>
          </Card>
           <div className="relative h-60 w-full rounded-lg overflow-hidden shadow-md">
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Symbol of hope or gratitude" 
                layout="fill" 
                objectFit="cover"
                data-ai-hint="hands helping"
              />
            </div>
        </aside>
      </div>
    </div>
  );
}
