import { Card } from "@/components/Card";
import { H3 } from "@/components/typography/H3";

export const Summary = ({
  title,
  problems,
}: {
  title: string;
  problems: {
    title: string;
    url: string;
  }[];
}) => {
  return (
    <Card className="">
      <div className="border-b border-neutral-300 dark:border-neutral-700 p-6">
        <H3 className="font-semibold underline-offset-4">{title}</H3>
      </div>
      <div className="p-6">
        <ul className="list-disc list-inside text-lg/relaxed md:text-xl/relaxed space-y-2">
          {problems.map((problem) => (
            <li
              className="text-lg/relaxed md:text-xl/relaxed font-medium"
              key={problem.url}
            >
              <a
                className="text-cyan-500 dark:text-cyan-400 decoration-2 underline-offset-4 hover:underline"
                href={problem.url}
              >
                {problem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
