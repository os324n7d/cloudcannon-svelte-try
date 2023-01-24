import type { PageLoad } from './$types';
import { error as svelteKitError } from '@sveltejs/kit';

interface Frontmatter {
  datePublished: string;
  lastUpdated: string;
  title: string;
  seoMetaDescription: string;
  postTitle: string;
}

export const load: PageLoad = async function load({ params }) {
  const { slug } = params;
  let post;

  try {
    post = await import(`../../content/blog/${slug}/index.md`);
  } catch (error: unknown) {
    throw svelteKitError(404, 'Not found!');
  }

  const { default: page, metadata } = post;
  const { datePublished, postTitle, seoMetaDescription } = metadata as Frontmatter;

  return {
    post: {
      datePublished,
      postTitle,
      seoMetaDescription,
      slug
    },
    slug,
    page
  };
};
