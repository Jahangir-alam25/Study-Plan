'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Clock, Target, Zap } from 'lucide-react';

const problems = [
  {
    icon: AlertCircle,
    title: 'No Proper Study Plan',
    description:
      'Students often study without a clear daily or weekly plan, leading to confusion and wasted effort.',
  },
  {
    icon: Target,
    title: "Can't Track Progress",
    description:
      'Without proper tracking, it’s hard to know what’s completed and what still needs focus.',
  },
  {
    icon: Zap,
    title: 'Easily Distracted',
    description:
      'Social media, notifications, and lack of focus break study momentum.',
  },
  {
    icon: Clock,
    title: 'Miss Deadlines',
    description:
      'Poor planning causes missed deadlines, last-minute pressure, and unnecessary stress.',
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Struggling With Your Studies?
          </h2>
          <p className="text-foreground-muted text-lg">
            Most students fail not because they lack talent, but because they
            lack structure, focus, and clarity.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  ❌ {item.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Emotional Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-lg font-medium text-foreground">
            Studying without a plan is like traveling without a map.
          </p>
          <p className="text-primary font-semibold mt-2">
            This app exists to bring clarity, focus, and confidence back to your
            study journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
