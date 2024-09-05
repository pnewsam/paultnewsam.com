import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Globe,
} from "lucide-react";
import {
  H1,
  H2,
  H3,
  Body,
  Subtitle,
  SmallText,
  InternalLink,
  ExternalLink,
} from "@/components/typography";
import { allPosts } from "contentlayer/generated";

export default function Home() {
  const recentPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <div className="space-y-16">
      <header className="text-center">
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage src="/avatar.png" alt="Paul Newsam" />
          <AvatarFallback>PN</AvatarFallback>
        </Avatar>
        <H1 className="mb-2">Paul T. Newsam</H1>
        <Subtitle className="mb-4">Frontend Engineer</Subtitle>
        <Body className="mb-6">
          Focused on creating efficient and user-centric web applications.
        </Body>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <ExternalLink href="https://github.com/pnewsam">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </ExternalLink>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <ExternalLink href="https://linkedin.com/in/paul-newsam">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </ExternalLink>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <ExternalLink href="mailto:paul.newsam@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </ExternalLink>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <ExternalLink href="https://paultnewsam.com">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </ExternalLink>
          </Button>
          <Button variant="outline" asChild>
            <ExternalLink
              href="https://storage.paultnewsam.cc/Paul-Newsam_Resume-July-2024.pdf"
              download
            >
              <FileText className="h-5 w-5 mr-2" />
              Resume
            </ExternalLink>
          </Button>
        </div>
      </header>

      <section>
        <H2 className="mb-4">About Me</H2>
        <Card>
          <CardContent className="pt-6">
            <Body>
              I&apos;m a frontend engineer with six years of experience in
              developing web applications. My focus is on creating intuitive
              user interfaces and optimizing application performance. I bring a
              comprehensive approach to software engineering, drawing from my
              background in both frontend and full-stack development. Outside of
              work, I enjoy outdoor activities which often provide fresh
              perspectives on problem-solving in tech.
            </Body>
          </CardContent>
        </Card>
      </section>

      <section>
        <H2 className="mb-4">Professional Experience</H2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Senior Frontend Engineer at Iterable</CardTitle>
              <CardDescription>Jul 2021 - Jul 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <Body>
                Led frontend development for the Platform group, focusing on
                React dashboards and configuration pages. Managed migrations
                from AngularJS to React and JavaScript to TypeScript.
              </Body>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Full-stack Developer at Accenture</CardTitle>
              <CardDescription>Jan 2018 - Feb 2021</CardDescription>
            </CardHeader>
            <CardContent>
              <Body>
                Developed various client projects, including a React dashboard
                for 5G network monitoring and a social engagement platform using
                Ruby on Rails and React.
              </Body>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <H2 className="mb-4">Technical Skills</H2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">NextJS</Badge>
              <Badge variant="secondary">Ruby on Rails</Badge>
              <Badge variant="secondary">GraphQL</Badge>
              <Badge variant="secondary">AWS</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <H2 className="mb-4">Recent Blog Posts</H2>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Card key={post._id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Body>{post.description}</Body>
              </CardContent>
              <CardFooter>
                <InternalLink
                  href={post.slug}
                  className="inline-flex items-center"
                >
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </InternalLink>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <InternalLink href="/blog" className="inline-flex items-center">
            View all posts <ArrowRight className="ml-2 h-4 w-4" />
          </InternalLink>
        </div>
      </section>

      <section>
        <H2 className="mb-4">Personal Interests</H2>
        <Card>
          <CardContent className="pt-6">
            <Body>
              Beyond my professional work, I maintain an active interest in
              outdoor activities such as hiking, running, and birdwatching.
              These pursuits offer a balance to my technical work and often
              provide unique insights that I apply to problem-solving in
              software development.
            </Body>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
