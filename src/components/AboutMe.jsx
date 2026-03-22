import { motion } from 'motion/react';
import { Typography } from './ui/Typography';
import { Location01Icon } from 'hugeicons-react';

export default function AboutMe({ data }) {
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
          <Typography variant="h3">About Me</Typography>
          <Typography variant="small" className="text-muted-foreground">Who Am I</Typography>
        </div>

        {/* Summary */}
        <div className="bg-secondary/40 p-4 rounded-lg inset-shadow-sm mb-6">
          <Typography variant="body" className="text-muted-foreground leading-relaxed text-sm">
            {data.summary}
          </Typography>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-6 opacity-70">
          <Location01Icon size={14} className="text-foreground" />
          <Typography variant="small" className="font-medium tracking-wide text-foreground">
            {data.location}
          </Typography>
        </div>

        {/* Education */}
        <div className="mb-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">Education</span>
          </div>

          <div className="space-y-3">
            {data.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 border-l border-border/40 hover:border-primary/40 transition-colors"
              >
                <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-background border border-border rotate-45" />
                <div className="flex flex-col gap-0.5 py-1">
                  <Typography variant="h4" className="text-sm font-semibold tracking-tight">
                    {edu.degree}
                  </Typography>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <span>{edu.institution}</span>
                    <span className="text-border">·</span>
                    <span>{edu.period}</span>
                  </div>
                  <span className="text-xs font-mono text-primary/80 mt-0.5">{edu.grade}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
