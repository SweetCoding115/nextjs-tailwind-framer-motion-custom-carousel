import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useRouter } from 'next/router';

const window_width = this.outerWidth
const variants = {
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    },
  },
  out: {
    opacity: 0,
    x: window_width/2,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  in: {
    x: -window_width/2,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
};

const Transition1 = ({ children }) => {
  const { asPath } = useRouter();
  return (
		<div className="effect-2">
			<AnimatePresence
	      initial={false}
	      mode='wait'
	    >
	      <motion.div
          key={asPath}
          variants={variants}
          initial="in"
          animate="inactive"
          exit="out"
        >
	        {children}
	      </motion.div>
	    </AnimatePresence>
		</div>
	);
};

export default Transition1;