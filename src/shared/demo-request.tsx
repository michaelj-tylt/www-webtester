import { Section } from "./section";
import { DemoButton } from "./demo-button";
import facts from "./facts.json";

interface DemoRequestContentProps {
  theme: keyof typeof facts.themes;
}

export function DemoRequestContent({ theme }: DemoRequestContentProps) {
  if (!theme) {
    throw new Error('DemoRequestContent requires a theme prop');
  }
  return (
    <>
      <Section.Heading>Request your personalized installation and demo today.</Section.Heading>
      <div className="mt-6 sm:mt-8">
        <Section.Subheading>A founder will contact you and schedule a time where we:</Section.Subheading>
      </div>
      <div className="mt-6 sm:mt-8">
        <Section.List>
          <li>can look at your specific use case</li>
          <li>help you install and configure tylt</li>
          <li>automate your first tasks</li>
          <li>answer any questions you have</li>
        </Section.List>
      </div>
      <div className="mt-8 sm:mt-12">
        <DemoButton theme={theme}>Book your demo</DemoButton>
      </div>
    </>
  );
}