import { Section } from "./section";

export function SavingsContent() {
  return (
    <>
      <Section.Heading>Save Time & Money</Section.Heading>
      <Section.Subheading>Reduce costs while improving speed and reliability</Section.Subheading>
      <Section.Grid cols="2">
        <Section.Box>
          <Section.Heading size="lg">Before Tylt</Section.Heading>
          <Section.List variant="none">
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="x" color="red" />
              <Section.Text size="sm">Hours of manual repetitive work</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="x" color="red" />
              <Section.Text size="sm">Expensive developer time for test maintenance</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="x" color="red" />
              <Section.Text size="sm">Human errors and inconsistency</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="x" color="red" />
              <Section.Text size="sm">Brittle automation that breaks frequently</Section.Text>
            </li>
          </Section.List>
        </Section.Box>
        <Section.Box>
          <Section.Heading size="lg">With Tylt</Section.Heading>
          <Section.List variant="none">
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Scale to hundreds of parallel tasks</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">80-95% reduction in testing costs</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Perfect consistency and accuracy</Section.Text>
            </li>
            <li className="flex items-center gap-2 sm:gap-3">
              <Section.Icon type="check" color="green" />
              <Section.Text size="sm">Intelligent automation that adapts to changes</Section.Text>
            </li>
          </Section.List>
        </Section.Box>
      </Section.Grid>
    </>
  );
}