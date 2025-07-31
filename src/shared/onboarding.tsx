import { Section } from "./section";

export function OnboardingContent() {
  return (
    <div>
      <Section.Heading>Guided Setup & Training</Section.Heading>
      <Section.Subheading>Get expert support to quickly implement automation for your team</Section.Subheading>
      <div className="mt-12 max-w-2xl">
        <div className="bg-zinc-800/30 border border-zinc-600/30 rounded-lg p-8">
          <Section.Subheading>What&apos;s Included:</Section.Subheading>
          <ul className="space-y-3 text-gray-300 mb-8 text-left">
            <li>• Dedicated setup session with team installation</li>
            <li>• Identify 2-3 critical scenarios from your workflow</li>
            <li>• Live automation creation with expert training</li>
            <li>• Recorded sessions for reference</li>
            <li>• Email support until you&apos;re autonomous</li>
          </ul>
        </div>
      </div>
    </div>
  );
}