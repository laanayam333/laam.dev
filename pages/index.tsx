import Link from 'next/link';

import { pick } from '@contentlayer/client';

import { allProjects } from '.contentlayer/generated';
import type { Project } from '.contentlayer/generated';

import SEO from '@/components/shared/SEO';

interface IProps {
  projects: Project[];
}

const HomePage = ({ projects }: IProps) => {
  return (
    <>
      <SEO
        metaTitle="Home"
        metaDescription="Portfolio website of Madrid-based frontend web developer Luis Alejandro Anaya Marín."
      />

      <article className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12">
        {/* <section>
        <h1 className="flex flex-col font-heading text-9xl font-bold uppercase">
        <span>
        <span className="text-yellow-600">L</span>uis
        </span>
        <span>
        <span className="text-yellow-600">A</span>lejandro
        </span>
        <span>
        <span className="text-yellow-600">A</span>naya
        </span>
        <span>
        <span className="text-yellow-600">M</span>arín
        </span>
        </h1>
        <p className="mt-6 text-5xl">
        Freelance web developer and designer based in Madrid, Spain. Spec
        </p>
      </section> */}
        <section>
          <ul className="space-y-4 text-left lg:space-y-6">
            {projects.map((project) => (
              <li key={project.title}>
                <Link href={`projects/${project.slug}`}>
                  <a className="tw-transition font-heading text-5xl font-bold hover:text-yellow-600 lg:text-7xl">
                    {project.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
};

export default HomePage;

export function getStaticProps() {
  const projects = allProjects
    .map((project) =>
      pick(project, [
        'slug',
        'title',
        'description',
        'role',
        'year',
        'siteURL',
        'cover',
        'images',
        'frontend',
        'css',
        'animation',
        'cms',
        'hosting',
      ])
    )
    .sort((a, b) => Number(new Date(b.year)) - Number(new Date(a.year)));

  return {
    props: {
      projects,
    },
  };
}
