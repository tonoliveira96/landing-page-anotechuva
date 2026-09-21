import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { readMarkdownContent } from '@/lib/markdown';
import { Metadata } from 'next';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

const { data, content } = readMarkdownContent('exclusao-de-dados');

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

const markdownComponents: Components = {
  h2: ({ node: _node, ...props }) => (
    <h2 className='mb-2 font-headline-md text-headline-md text-on-surface' {...props} />
  ),
  ol: ({ node: _node, ...props }) => <ol className='list-decimal pl-8' {...props} />,
};

const DataDeletionInstruction = () => {
  return (
    <>
      <Navbar />
      <main id='main-content' className='mx-auto max-w-2xl px-gutter pb-12 pt-28'>
        <h1 className='mb-4 font-section-title-mobile text-section-title-mobile text-primary md:font-section-title md:text-section-title'>
          {data.heading}
        </h1>

        <div className='space-y-3 text-justify text-on-surface-variant'>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {content}
          </ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DataDeletionInstruction;
