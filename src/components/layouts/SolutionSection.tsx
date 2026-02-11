'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, ListTodo, BarChart3, LineChart } from 'lucide-react';

const solutions = [
  {
    icon: CalendarCheck,
    title: 'Smart Study Planner',
    description:
      'Create a personalized study plan that adapts to your goals, deadlines, and available time.',
  },
  {
    icon: ListTodo,
    title: 'Daily Goals',
    description:
      'Break big goals into small daily tasks to stay consistent and motivated every day.',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description:
      'Track completed tasks, study hours, and milestones to clearly see your improvement.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Insights',
    description:
      'Visual charts help you understand study patterns, productivity, and areas to improve.',
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 bg-secondary/40">
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
            A Smarter Way to Study
          </h2>
          <p className="text-foreground-muted text-lg">
            Our platform turns confusion into clarity by giving you the right
            tools to plan, track, and improve your study routine.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => {
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
                  {item.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-lg font-medium text-foreground">
            Stop guessing how to study.
          </p>
          <p className="text-primary font-semibold mt-2">
            Start studying with a clear plan, real data, and visible progress.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
