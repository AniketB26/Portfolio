import { motion } from 'motion/react';
import { Typography } from './ui/Typography';
import { Certificate01Icon, Calendar01Icon } from 'hugeicons-react';

export default function Certifications({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-baseline justify-between mb-4 pb-2">
          <Typography variant="h3">Certifications & Courses</Typography>
          <Typography variant="small" className="text-muted-foreground">Credentials</Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col gap-2 p-4 rounded-xl bg-card/80 border border-border/40 hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <Certificate01Icon size={18} className="text-primary/70 group-hover:text-primary transition-colors" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <Typography variant="h4" className="text-sm font-semibold tracking-tight leading-tight">
                    {cert.title}
                  </Typography>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <span>{cert.issuer}</span>
                    <span className="text-border">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar01Icon className="w-2.5 h-2.5" />
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
