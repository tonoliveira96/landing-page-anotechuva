import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { readMarkdownContent } from '@/lib/markdown';
import { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

const { data, content } = readMarkdownContent('termos-de-uso');

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

const markdownComponents: Components = {
  h2: ({ node: _node, ...props }) => (
    <h2 className='mb-2 mt-8 font-headline-md text-headline-md text-on-surface first:mt-0' {...props} />
  ),
  p: ({ node: _node, ...props }) => <p className='mb-2 last:mb-0' {...props} />,
  ul: ({ node: _node, ...props }) => <ul className='mb-2 list-disc space-y-1 pl-6 last:mb-0' {...props} />,
  a: ({ node: _node, href, ...props }) =>
    href?.startsWith('/') ? (
      <Link href={href} className='text-primary underline underline-offset-2 hover:no-underline' {...props} />
    ) : (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='text-primary underline underline-offset-2 hover:no-underline'
        {...props}
      />
    ),
};

const Terms = () => {
  return (
    <>
      <Navbar />
      <main id='main-content' className='mx-auto max-w-3xl px-gutter pb-16 pt-28'>
        <h1 className='mb-3 font-section-title-mobile text-section-title-mobile text-primary md:font-section-title md:text-section-title'>
          {data.title}
        </h1>
        <p className='mb-8 text-on-surface-variant'>{data.intro}</p>

        <article className='text-on-surface-variant'>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {content}
          </ReactMarkdown>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
