import { Section } from "./section";
import { EnterprisePricingCard, NonEnterprisePricingCard, PricingHeader } from "./pricing-shared";

export function PricingContent() {
  return (
    <>
      <Section.Heading>Simple Pricing</Section.Heading>
      <PricingHeader />
      <Section.Grid cols="2">
        <EnterprisePricingCard />
        <NonEnterprisePricingCard audience="general" />
      </Section.Grid>
    </>
  );
}