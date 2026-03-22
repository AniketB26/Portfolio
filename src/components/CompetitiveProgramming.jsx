import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Typography } from './ui/Typography';
import { Button } from './ui/Button';
import { LeetcodeIcon, Award01Icon, Target01Icon } from 'hugeicons-react';

export default function CompetitiveProgramming({ data }) {
  if (!data) return null;

  const { leetcode } = data;

  return (
    <section className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-baseline justify-between mb-4 pb-2">
          <Typography variant="h3">Practice Platforms</Typography>
          <Typography variant="small" className="text-muted-foreground">Problem Solving</Typography>
        </div>

        {/* LeetCode Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl bg-card/80 border border-border/40 p-5 mb-4"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <LeetcodeIcon size={18} className="text-amber-500" />
            </div>
            <div>
              <Typography variant="h4" className="text-sm font-semibold">LeetCode Profile</Typography>
              <a
                href={leetcode.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground font-mono hover:text-primary transition-colors"
              >
                @aniketbajpai230
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatBox label="Total Solved" value={leetcode.problemsSolved} color="text-foreground" />
            <StatBox label="Easy" value={leetcode.easy} color="text-emerald-500" />
            <StatBox label="Medium" value={leetcode.medium} color="text-amber-500" />
            <StatBox label="Hard" value={leetcode.hard} color="text-red-500" />
          </div>

          <div className="mt-3 pt-3 border-t border-border/30">
            <div className="flex items-center gap-2">
              <Award01Icon size={14} className="text-amber-500/70" />
              <span className="text-xs font-mono text-muted-foreground">
                Contest Rating: <span className="text-foreground font-semibold">{leetcode.contestRating}</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Platforms */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.platforms.map((platform, i) => (
            <span
              key={i}
              className="text-xs font-mono text-muted-foreground uppercase tracking-wider bg-secondary/50 border border-border rounded-full px-3 py-1"
            >
              {platform}
            </span>
          ))}
        </div>

        {/* Achievements */}
        <div className="space-y-2">
          {data.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-3 p-2.5 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
            >
              <Target01Icon size={14} className="text-primary/60 mt-0.5 shrink-0" />
              <Typography variant="body" className="text-sm text-muted-foreground leading-relaxed">
                {achievement}
              </Typography>
            </motion.div>
          ))}
        </div>

        {/* Link to Practice Platforms Page */}
        <div className="flex justify-center mt-8 pt-2">
          <Link to="/practice">
            <Button
              variant="secondary"
              size="sm"
            >
              View Platforms
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function StatBox({ label, value, color }) {
  return (
    <div className="flex flex-col items-center p-3 rounded-lg bg-secondary/30 border border-border/20">
      <span className={`text-lg font-bold font-mono ${color}`}>{value}</span>
      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">{label}</span>
    </div>
  );
}
