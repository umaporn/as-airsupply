import { FC } from 'react';

interface ArticleDetailContentProps {
  content: string;
}

const ArticleDetailContent = ({ content }: ArticleDetailContentProps) => {
  return (
    <div className="mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ArticleDetailContent;
