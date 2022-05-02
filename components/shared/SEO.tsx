import { NextSeo } from 'next-seo';

interface IProps {
  metaTitle: string;
  metaDescription: string;
}

const SEO = ({ metaTitle, metaDescription }: IProps) => {
  return <NextSeo title={metaTitle} description={metaDescription} />;
};

export default SEO;
