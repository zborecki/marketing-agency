import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';
import { v4 as uuid } from 'uuid';

import { ArticleIntroduction } from '#components/article/introduction';
import { ArticleSection } from '#components/article/section';
import { Wrapper } from '#components/wrapper';
import { INTERNAL_ROUTE } from '#constants/routes';
import { BaseLayout } from '#layouts/base-layout';
import { getArticle } from '#services/articles';
import { DynamicLayoutProps } from '#types/props/layouts';

const ArticlePage = async ({
  params: {
    slug
  }
}: DynamicLayoutProps) => {
  const currentLocale = useLocale();
  const {
    image,
    locale,
    sections,
    teaser,
    title
  } = await getArticle({ slug }).catch(
    () => redirect(INTERNAL_ROUTE.ERROR_404)
  );

  if (currentLocale !== locale) {
    redirect(INTERNAL_ROUTE.ERROR_404);
  }

  return (
    <BaseLayout>
      <Wrapper className="ma-article__wrapper">
        <ArticleIntroduction
          alternativeText={image.alternativeText}
          teaser={teaser}
          title={title}
          url={image.url}
        />
        {
          sections.map((section) => (
            <ArticleSection
              content={section.content}
              heading={section.heading}
              image={section.image}
              key={uuid()}
            />
          ))
        }
      </Wrapper>
    </BaseLayout>
  );
};

export default ArticlePage;
