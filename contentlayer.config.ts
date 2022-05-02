import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    url: { type: 'string', required: true },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    siteURL: { type: 'string', required: true },
    year: { type: 'number', required: true },
    description: { type: 'string', required: true },
    role: { type: 'string', required: true },
    client: { type: 'string', required: true },
    cover: { type: 'string', required: true },
    images: { type: 'list', of: Image },
    frontend: { type: 'string', required: true },
    css: { type: 'string', required: true },
    animation: { type: 'string', required: true },
    cms: { type: 'string', required: true },
    hosting: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
    },
  },
}));
export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
