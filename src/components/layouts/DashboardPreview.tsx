export function DashboardPreview() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Your Dashboard</h2>
        <p className="text-muted-foreground mb-10">
          All your progress, analytics, and plans in one place.
        </p>
        <div className="h-64 bg-muted rounded-2xl flex items-center justify-center">
          <span className="text-muted-foreground">
            Dashboard Screenshot Here
          </span>
        </div>
      </div>
    </section>
  );
}
