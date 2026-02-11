export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold">1. Set Goals</h3>
            <p className="text-muted-foreground text-sm mt-2">
              Define what you want to achieve.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">2. AI Plans</h3>
            <p className="text-muted-foreground text-sm mt-2">
              AI creates a smart study plan.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">3. Track Progress</h3>
            <p className="text-muted-foreground text-sm mt-2">
              Monitor and improve continuously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
