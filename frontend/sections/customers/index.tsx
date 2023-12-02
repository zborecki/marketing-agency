import { CustomersSlideshow } from '#components/customers-slideshow';
import { Section } from '#components/section';
import { getCustomers } from '#services/customers';

export const CustomersSection = async () => {
  const customers = await getCustomers();

  return (
    <Section color="tertiary">
      <CustomersSlideshow customers={customers} />
    </Section>
  );
};
