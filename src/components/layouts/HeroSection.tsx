
'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground"
          >
            ✨ AI-Powered Study Platform
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Study Smarter,{" "}
            <span className="gradient-text">Not Harder</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            The all-in-one AI study platform that organizes your notes, generates flashcards,
            creates study plans, and helps you ace every exam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg border-0 text-primary-foreground hover:opacity-90 text-base px-8 py-6">
              Start Free <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted text-base px-8 py-6"
            >
              <Play className="mr-2" size={18} /> Watch Demo
            </Button>
          </div>

          {/* Floating dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 relative"
          >
            <div className="gradient-border rounded-xl p-1 glow-purple">
              <div className="bg-card rounded-xl p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-muted rounded-lg h-40 md:h-56 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">📊 Study Dashboard</div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg h-[calc(50%-8px)] flex items-center justify-center">
                      <div className="text-muted-foreground text-xs">📝 Notes</div>
                    </div>
                    <div className="bg-muted rounded-lg h-[calc(50%-8px)] flex items-center justify-center">
                      <div className="text-muted-foreground text-xs">🃏 Cards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;