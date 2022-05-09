import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import type { Project } from '.contentlayer/generated';

interface IProps {
  projects: Project[];
}

const imageVariant = {
  rest: {
    opacity: 0,
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween',
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const ProjectList = ({ projects }: IProps) => {
  return (
    <ul className="relative space-y-4 text-left lg:space-y-6">
      {projects?.map((project) => (
        <motion.li
          key={project.title}
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="w-fit-content"
        >
          <Link href={`projects/${project.slug}`}>
            <motion.a className="tw-transition cursor-pointer font-heading text-5xl font-bold hover:text-amber-400 lg:text-7xl">
              {project.title}
            </motion.a>
          </Link>

          <motion.div
            variants={imageVariant}
            className="absolute top-1/2 left-3/4 -z-10 w-[800px] -translate-x-1/2 -translate-y-1/2 transform"
          >
            <Image
              src={project.cover}
              alt=""
              layout="responsive"
              width={4}
              height={3}
              objectFit="cover"
              objectPosition="center"
              className="h-full w-full"
            />
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
};

export default ProjectList;
