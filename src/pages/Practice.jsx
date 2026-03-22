import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Typography } from '../components/ui/Typography';
import { portfolioData } from '../data/portfolioData';
import { 
  LeetcodeIcon, 
  Database02Icon, 
  CodeIcon, 
  BookOpen01Icon,
  Award01Icon
} from 'hugeicons-react';

const iconMap = {
  leetcode: LeetcodeIcon,
  stratascratch: Database02Icon,
  gfg: CodeIcon,
  tuf: BookOpen01Icon
};

const SectionDivider = () => (
  <div className="w-full px-4 relative">
    <div className="absolute left-[calc(-50vw+50%)] w-screen border-t border-dashed border-border" />
  </div>
);

function StatBox({ label, value, color }) {
  return (
    <div className="flex flex-col items-center p-3 rounded-lg bg-secondary/30 border border-border/20">
      <span className={`text-lg font-bold font-mono ${color}`}>{value}</span>
      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">{label}</span>
    </div>
  );
}

export default function Practice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { practiceProfiles } = portfolioData.competitiveProgramming;

  return (
    <main className="pt-4 pb-20">
      <section className="px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h1" className="mb-4">Practice Platforms</Typography>
          <Typography variant="p" className="text-muted-foreground text-sm max-w-xl leading-relaxed">
            A comprehensive overview of my coding profiles, demonstrating continuous learning,
            algorithm practice, and problem-solving skills across various competitive programming and data science platforms.
          </Typography>
        </motion.div>
      </section>

      <SectionDivider />

      <section className="px-4 py-8">
        <div className="flex items-baseline justify-between mb-6 pb-2">
          <Typography variant="h3">Profiles</Typography>
          <Typography variant="small" className="text-muted-foreground uppercase font-mono tracking-wider">
            {practiceProfiles.length} Platforms
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {practiceProfiles.map((profile, idx) => {
            const IconComponent = iconMap[profile.id] || CodeIcon;
            
            return (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-xl bg-card/80 border border-border/40 p-5 group transition-colors hover:border-border"
              >
                {/* Decorative gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${profile.gradient} rounded-bl-full pointer-events-none`} />

                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${profile.bg}`}>
                    <IconComponent size={20} className={profile.color} />
                  </div>
                  <div>
                    <Typography variant="h4" className="text-sm font-semibold">{profile.name}</Typography>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground font-mono hover:text-primary transition-colors"
                    >
                      {profile.username}
                    </a>
                  </div>
                </div>

                {/* Stats Grid */}
                {profile.stats && profile.stats.length > 0 && (
                  <div className={`grid mt-6 ${profile.stats.length > 2 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2'} gap-3`}>
                    {profile.stats.map((stat, i) => (
                      <StatBox key={i} label={stat.label} value={stat.value} color={stat.color} />
                    ))}
                  </div>
                )}

                <div className="mt-5 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <Award01Icon size={14} className={`${profile.color} opacity-80`} />
                    <span className="text-xs font-mono text-muted-foreground">
                      {profile.footerLabel}: <span className="text-foreground font-semibold uppercase">{profile.footerValue}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
