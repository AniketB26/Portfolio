import { motion } from 'motion/react';
import SignatureSVG from '../assets/Signature1.svg';

const SignatureLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-background"
    >
      <div className="w-[min(72vw,340px)]">
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{
            duration: 2.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <img
            src={SignatureSVG}
            alt="Aniket Bajpai"
            className="w-full h-auto dark:invert"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SignatureLoader;
