import { ShieldCheck, Lock } from 'lucide-react';

export function SecuritySection() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ShieldCheck className="w-14 h-14 mx-auto text-primary mb-6" />
        <h2 className="text-4xl font-bold mb-4">Security & Privacy</h2>
        <p className="text-muted-foreground">
          Your data is protected with industry-standard security, encryption,
          and privacy-first architecture.
        </p>
      </div>
    </section>
  );
}
