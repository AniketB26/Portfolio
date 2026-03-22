import { motion } from 'motion/react';
import { Typography } from './ui/Typography';
import { BookOpen01Icon } from 'hugeicons-react';

export default function ResearchPublication({ data }) {
  if (!data) return null;

  return (
    <section className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-baseline justify-between mb-4 pb-2">
          <Typography variant="h3">Research Publication / Patent</Typography>
          <Typography variant="small" className="text-muted-foreground">Academic</Typography>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl bg-card/80 border border-border/40 p-5"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-500/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-violet-500/10">
              <BookOpen01Icon size={18} className="text-violet-500" />
            </div>
            <Typography variant="h4" className="text-sm font-semibold">Research Work</Typography>
          </div>

          <div className="bg-secondary/20 p-3 rounded-lg">
            <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed italic">
              {data.note}
            </Typography>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
