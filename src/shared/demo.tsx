import { Section } from "./section";

export function DemoContent() {
  return (
    <>
      <Section.Heading>See Tylt in Action</Section.Heading>
      <Section.Subheading>Watch how Tylt handles real computer tasks with vision AI and our action model!</Section.Subheading>
      <div className="mt-8 w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%]">
        <Section.Video src="/videos/ryan-no-dom-demo.mp4" />
      </div>
      
      <div className="mt-8 max-w-4xl">
        <Section.Text >
          🎯 Vision-Based Navigation — Not DOM Dependent
        </Section.Text>
        <Section.Text>
          Unlike traditional automation tools that break when developers change CSS classes or IDs, Tylt sees your application like a real human does. Our vision AI identifies buttons, forms, and content visually — making our automation self-healing and resilient to UI changes.
        </Section.Text>
      </div>
    </>
  );
}