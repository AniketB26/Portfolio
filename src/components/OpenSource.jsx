import { motion } from 'motion/react';
import { Typography } from './ui/Typography';
import { GithubIcon } from 'hugeicons-react';

export default function OpenSource() {
  return (
    <section className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-baseline justify-between mb-4 pb-2">
          <Typography variant="h3">Open Source Contributions</Typography>
          <Typography variant="small" className="text-muted-foreground">Community</Typography>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl bg-card/80 border border-border/40 p-5"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <GithubIcon size={18} className="text-emerald-500" />
            </div>
            <div>
              <Typography variant="h4" className="text-sm font-semibold">GitHub Activity</Typography>
              <a
                href="https://github.com/AniketB26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground font-mono hover:text-primary transition-colors"
              >
                @AniketB26
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/20">
              <span className="text-lg font-bold font-mono text-emerald-500">858+</span>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Total Contributions</span>
            </div>

            <div className="bg-secondary/20 p-3 rounded-lg">
              <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed">
                Actively contributing to personal projects and exploring open-source opportunities. All projects are publicly available on GitHub — including EcoSort, DataQuery Pro, and more.
              </Typography>
            </div>

            <a
              href="https://github.com/AniketB26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-primary text-background text-xs font-mono font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <GithubIcon size={14} />
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
