import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">MedaAuth</h1>
        <nav>
          <Button asChild variant="ghost" className="mr-4">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Sign Up</Link>
          </Button>
        </nav>
      </header>

      <main className="container mx-auto mt-16 text-center">
        <h2 className="text-5xl font-extrabold mb-6">Accelerate Your App Development</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          MedaAuth provides lightning-fast authentication solutions for startups and developers.
          Focus on your core features while we handle secure user management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {['Starter', 'Pro', 'Enterprise'].map((plan) => (
            <Card key={plan} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan}</CardTitle>
                <CardDescription>Perfect for {plan === 'Starter' ? 'small projects' : plan === 'Pro' ? 'growing businesses' : 'large scale applications'}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="text-left space-y-2">
                  {['Fast implementation', 'Easy deployment', 'Multi-language support'].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose {plan}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6">Supported Platforms</h3>
          <div className="flex justify-center space-x-8">
            {['Go', 'Express.js', 'React', 'Next.js', 'Flutter', 'React Native'].map((tech) => (
              <div key={tech} className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-2"></div>
                <p>{tech}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 text-center">
        <p>&copy; 2023 MedaAuth. All rights reserved.</p>
      </footer>
    </div>
  );
}