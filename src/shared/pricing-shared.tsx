import { Section } from "./section";
import facts from "./facts.json";

export function EnterprisePricingCard() {
  return (
    <Section.Card padding="lg">
      <Section.Badge>{facts.pricing.enterprise.threshold}</Section.Badge>
      <Section.List>
        {facts.pricing.enterprise.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </Section.List>
      <div className="mt-6">
        <Section.Text>{facts.pricing.enterprise.afterFirstYear}</Section.Text>
      </div>
    </Section.Card>
  );
}

export function NonEnterprisePricingCard({ audience }: { audience: 'general' | 'small-business' | 'professionals' }) {
  const getThreshold = () => {
    switch (audience) {
      case 'small-business':
        return facts.pricing.nonEnterprise.thresholdSmallBusiness;
      case 'professionals':
        return facts.pricing.nonEnterprise.thresholdProfessionals;
      default:
        return facts.pricing.nonEnterprise.threshold;
    }
  };

  const getDescription = () => {
    if (audience === 'professionals') {
      return facts.pricing.nonEnterprise.descriptionProfessionals;
    }
    return facts.pricing.nonEnterprise.description;
  };

  return (
    <Section.Card padding="lg">
      <Section.Badge>{getThreshold()}</Section.Badge>
      <Section.List>
        {facts.pricing.nonEnterprise.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </Section.List>
      <div className="mt-6">
        <Section.Text>{getDescription()}</Section.Text>
      </div>
    </Section.Card>
  );
}

export function PricingHeader() {
  return (
    <div className="hidden sm:block">
      <Section.Subheading>{facts.pricing.modelCosts}</Section.Subheading>
    </div>
  );
}