export const ProblemsList = ({
  problems,
}: {
  problems: {
    title: string;
    url: string;
    status?: "done" | "attempted" | "not done" | "unknown";
  }[];
}) => (
  <ul className="list-disc list-inside">
    {problems.map((problem) => (
      <li key={problem.url} className="">
        <a
          className="hover:text-cyan-500 dark:hover:text-cyan-400"
          href={problem.url}
        >
          <span className="underline">{problem.title}</span>&nbsp;&nbsp;
          <span className="text-green-500 dark:text-green-400">
            {problem.status === "done" && "✅"}
            {problem.status === "attempted" && "🔄"}
            {problem.status === "not done" && "❌"}
            {problem.status === "unknown" && "❓"}
          </span>
        </a>
      </li>
    ))}
  </ul>
);
