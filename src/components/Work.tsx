import { FileDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Job } from "./Work.sub";

export const Work = ({ className }: { className?: string }) => (
  <div id="work" className={cn(className)}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-bold uppercase tracking-widest text-red-500/75">
        Work
      </h3>
      <a href="/resume.pdf" download="resume.pdf">
        <Button className="gap-2" size="sm" variant="outline">
          <span className="text-xs">Download resume</span>
          <FileDown className="w-5 h-5" />
        </Button>
      </a>
    </div>
    <Job
      companyHref="https://www.iterable.com"
      className="mb-4"
      title="Senior Software Engineer, Frontend"
      company="Iterable"
      description="
        At Iterable we help our customers stay connected with their own customers
        by enabling marketers to set up and send sophisticated messaging campaigns.
        As a frontend engineer on the Platform group, I build the UIs for our
        deliverability services, integrations, and data management features.
      "
      skills={["React", "TypeScript", "Javascript", "AngularJS", "GraphQL"]}
      timespan="2021 - Current"
    />
    <Job
      companyHref="https://www.accenture.com"
      title="Full-Stack Engineer"
      company="Accenture (Formerly Intrepid Pursuits)"
      description="Intrepid Pursuits was a small digital studio that built mobile and 
      web applications for a variety of clients. I joined shortly after the studio was
      acquired by Accenture. During my tenure on the web team, I built APIs
      and full-stack applications for clients in the finance, telecommunications, and 
      education industries."
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
    <Job
      title="Seasonal Biologist"
      company="Various"
      description={
        <p className="text-base leading-relaxed text-stone-500">
          During my 20s, I worked on-and-off as a field biologist for various
          government and non-profit organizations, including&nbsp;
          <a
            className="group-hover:text-red-500/75"
            href="https://www.usgs.gov/"
          >
            USGS
          </a>
          ,&nbsp;
          <a
            className="group-hover:text-red-500/75"
            href="https://www.pointblue.org/"
          >
            Point Blue Conservation Science
          </a>
          , and&nbsp;
          <a
            className="group-hover:text-red-500/75"
            href="https://www.birdconservancy.org"
          >
            Bird Conservancy of the Rockies
          </a>
          . I got the opportunity to work in 8 U.S. states, as well as Mexico
          and Ecuador. Besides getting to learn a lot of natural history, I got
          the opportunity to meet people from many different walks of life -
          ranchers, wardens, snowbirds.
        </p>
      }
      timespan="208 - 2013 & 2017"
    />
    <Job
      title="Data Processing Lead"
      company="Sourcery Technologies"
      description="
        My first technology job was at Sourcery Technologies, where I did data entry for the team.
        The team was in the process of pivoting from a sourcing model, and I helped onboard customers
        to the new payments and accountings platform by digitizing their invoices. Eventually we
        outsourced the task, and I helped to manage that transition.
      "
      timespan="2014 - 2016"
    />
  </div>
);
