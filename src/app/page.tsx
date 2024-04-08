import { Body, ExternalLink, H1 } from "../components/typography";

export default function Home() {
  return (
    <>
      <H1 className="mb-4">Hi, I&apos;m Paul.</H1>
      <Body className="mb-8">
        I currently work as a frontend engineer at{" "}
        <ExternalLink href="https://iterable.com/">Iterable</ExternalLink>, a
        marketing automation platform. I&apos;ve been working in software for
        about 6 years now. Before that, I worked on and off as a field
        biologist, doing bird surveys for organizations like&nbsp;
        <ExternalLink href="https://www.usgs.gov/">USGS</ExternalLink>,{" "}
        <ExternalLink href="https://www.pointblue.org/">
          Point Blue
        </ExternalLink>
        , and{" "}
        <ExternalLink href="https://www.birdconservancy.org/">
          Bird Conservancy of the Rockies
        </ExternalLink>
        . I also worked as a barista, a ticket-taker, and had a couple other odd
        jobs.
      </Body>
      <Body className="mb-8">
        Outside of work, besides tinkering on projects, I love to run, hike,
        read, and train jiu jitsu. I&apos;ve lived in a few different cities,
        but as of 2020, I&apos;m back in my home town of San Diego, CA.
      </Body>
      <Body>
        Feel free to send me an email or connect with me using the links.
        I&apos;d love to hear from you.
      </Body>
    </>
  );
}
