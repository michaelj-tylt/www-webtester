import { Section } from "./section";

export function LicensingContent() {
  return (
    <>
      <Section.Heading>Open Source Advantages</Section.Heading>
      <Section.Subheading>Complete transparency and control over your automation</Section.Subheading>
      <Section.Grid cols="2" gap="sm">
        <Section.Card padding="sm">
          <Section.Heading card>Enterprise Security</Section.Heading>
          <Section.Text>Audit the code, deploy on-premises, keep sensitive data secure</Section.Text>
        </Section.Card>
        <Section.Card padding="sm">
          <Section.Heading card>No Vendor Lock-in</Section.Heading>
          <Section.Text>Modify, extend, and deploy anywhere without restrictions</Section.Text>
        </Section.Card>
        <Section.Card padding="sm">
          <Section.Heading card>Future-Proof</Section.Heading>
          <Section.Text>Never worry about discontinued support or changing terms</Section.Text>
        </Section.Card>
      </Section.Grid>
    </>
  );
}