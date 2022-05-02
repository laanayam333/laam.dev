import { useMDXComponent } from 'next-contentlayer/hooks';

import { allProjects } from '.contentlayer/generated';
import type { Project } from '.contentlayer/generated';

import components from '@/components/MDXComponents';
import ProjectLayout from '@/components/layouts/ProjectLayout';
import SEO from '@/components/shared/SEO';

interface IParams {
  slug: string;
}
interface IProps {
  params: IParams;
}

export default function Project({ project }: { project: Project }) {
  const Component = useMDXComponent(project.body.code);

  return (
    <>
      <SEO metaTitle={project.title} metaDescription={project.description} />

      <ProjectLayout project={project}>
        <Component
          components={
            {
              ...components,
            } as any
          }
        />
      </ProjectLayout>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: IProps) => {
  console.log(JSON.stringify(params, null, 2));
  const project = allProjects.find((project) => project.slug === params.slug);

  return { props: { project } };
};
