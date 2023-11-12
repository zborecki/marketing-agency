import { remark } from 'remark';
import html from 'remark-html';

import { REGEX } from '#constants/regex';

interface Parameters {
  ignoreTags?: boolean;
  markdown: string;
}

export const markdownToHtml = async ({
  ignoreTags = true, markdown
}: Parameters) => {
  const content = (await remark().use(html).process(markdown)).toString();

  if (ignoreTags) {
    return content.replace(REGEX.HTML_TYPOGRAPHY, '');
  }

  return content;
};
