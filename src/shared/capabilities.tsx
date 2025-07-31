import { Section } from "./section";
import { useRouter } from 'next/navigation';

export function CapabilitiesContent() {
  const router = useRouter();

  return (
    <>
      <Section.Heading>What Can Tylt Do?</Section.Heading>
      <Section.Subheading>Automate any computer task that requires vision and decision-making</Section.Subheading>
      <Section.Grid cols="3">
        <Section.Card className="cursor-pointer group hover:bg-zinc-800/50 transition-colors relative" onClick={() => router.push('/web-testing')}>
          <Section.Heading card>Website Testing</Section.Heading>
          <div className="mb-12"><Section.Text>Test web applications without brittle selectors using vision AI</Section.Text></div>
          <div className="absolute bottom-6 right-6 text-blue-400 group-hover:text-blue-300 transition-colors">
            Learn more →
          </div>
        </Section.Card>
        <Section.Card className="cursor-pointer group hover:bg-zinc-800/50 transition-colors relative" onClick={() => router.push('/data-entry')}>
          <Section.Heading card>Data Entry</Section.Heading>
          <div className="mb-12"><Section.Text>Fill forms, extract data, and validate information across systems</Section.Text></div>
          <div className="absolute bottom-6 right-6 text-teal-400 group-hover:text-teal-300 transition-colors">
            Learn more →
          </div>
        </Section.Card>
        <Section.Card className="cursor-pointer group hover:bg-zinc-800/50 transition-colors relative" onClick={() => router.push('/desktop-automation')}>
          <Section.Heading card>Desktop Automation</Section.Heading>
          <div className="mb-12"><Section.Text>Control any desktop application with intelligent mouse and keyboard actions</Section.Text></div>
          <div className="absolute bottom-6 right-6 text-orange-400 group-hover:text-orange-300 transition-colors">
            Learn more →
          </div>
        </Section.Card>
      </Section.Grid>
    </>
  );
}