import { useTranslations } from 'next-intl';

const BlogPage = () => {
  const t = useTranslations('Page.Blog');

  return (
    <main>
      { t('meta.title') }
    </main>
  );
};

export default BlogPage;
