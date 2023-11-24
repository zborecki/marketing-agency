import { Page } from '#components/pagination/page';

export const Pagination = () => {
  console.log('Pagination');

  return (
    <div className="ma-pagination">
      <Page current={1} total={5} />
    </div>
  );
};
