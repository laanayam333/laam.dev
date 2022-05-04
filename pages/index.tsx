import { pick } from '@contentlayer/client';

import { allProjects } from '.contentlayer/generated';
import type { Project } from '.contentlayer/generated';

import SEO from '@/components/shared/SEO';
import ProjectList from '@/components/projects/ProjectList';

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

      <article className="tw- mx-auto max-w-7xl">
        {/* <section className="grid grid-cols-2 gap-x-24">
          <h1 className="col-span-1 flex flex-col font-heading text-9xl font-bold uppercase">
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
          <p className="col-span-1 place-self-end text-5xl">
            <span className="text-amber-500">L</span>uis{' '}
            <span className="text-amber-500">A</span>lejandro{' '}
            <span className="text-amber-500">A</span>naya{' '}
            <span className="text-amber-500">M</span>arín, freelance web
            developer and designer based in Madrid, Spain.
          </p>
        </section> */}

        <section>
          <ProjectList projects={projects} />
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
