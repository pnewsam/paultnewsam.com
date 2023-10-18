import { cn } from "@/lib/utils";
import { Job } from "./Work.sub";

export const Work = ({ className }: { className?: string }) => (
  <div id="work" className={cn(className)}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-bold uppercase tracking-widest text-red-300">Work</h3>
      {/* <Button className="gap-2" size="sm" variant="outline">
        <span className="text-xs">Download resume</span>
        <FileDown className="w-5 h-5" />
      </Button> */}
    </div>
    <Job
      companyHref="https://www.iterable.com"
      className="mb-4"
      title="Senior Software Engineer, Frontend"
      company="Iterable"
      description="
        As one of the frontend engineers on the Platform group, I build interfaces
        enabling our customers to engage with our deliverability
        services, integrations, and data management features. One big theme has been
        migrating many of our pages from AngularJS to React.
      "
      skills={["React", "TypeScript", "Javascript", "AngularJS", "GraphQL"]}
      timespan="2021 - Current"
    />
    <Job
      companyHref="https://www.accenture.com"
      title="Full-Stack Engineer"
      company="Accenture (Formerly Intrepid Pursuits)"
      description="As part of the small (but mighty) web team in the Cambridge office,
      I helped to build out full-stack applications for a variety of clients.
      We worked mostly in Ruby on Rails and React, and I loved it. Every project was different.
      I got to do a couple of small projects in Web Components, D3.js, and Phoenix/Elixir, which was a special treat."
      skills={[
        "React",
        "TypeScript",
        "Javascript",
        "Ruby on Rails",
        "Ruby",
        "GraphQL",
        "Web Components",
        "D3.js",
      ]}
      timespan="2018 - 2021"
    />
  </div>
);
