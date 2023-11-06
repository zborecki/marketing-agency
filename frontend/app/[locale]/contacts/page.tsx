import { useTranslations } from 'next-intl';

const ContactsPage = () => {
  const t = useTranslations('Page.Contacts');

  return (
    <main>
      { t('meta.title') }
    </main>
  );
};

export default ContactsPage;
