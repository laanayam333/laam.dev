import { ReactNode } from 'react';
import { pageVariants } from '@/utils/framer';
import { motion } from 'framer-motion';

import Header from '@/components/navigation/Header';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={{ type: 'easeInOut' }}
        // // {...pageMotionProps}
        className="mx-auto mt-12 max-w-7xl px-3"
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
