export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-14">Simple Pricing</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {['Free', 'Pro', 'Premium'].map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border ${
                plan === 'Pro' ? 'border-primary shadow-xl' : ''
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{plan}</h3>
              <p className="text-3xl font-bold mb-4">
                {plan === 'Free' ? '$0' : plan === 'Pro' ? '$9' : '$19'}
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                Perfect for {plan.toLowerCase()} users
              </p>
              <button className="w-full py-2 rounded-xl bg-primary text-white">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
