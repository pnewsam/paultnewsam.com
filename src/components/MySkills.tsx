import { DevIcon } from "./DevIcon";

export const MySkills = () => (
  <div id="skills">
    <h3 className="text-2xl text-zinc-700 font-semibold mb-4">My Skills</h3>

    <p className="text-lg text-zinc-500 mb-2">
      My primary skills are in frontend space.
    </p>

    <p className="text-lg text-zinc-500 mb-2">I also have</p>

    <p></p>

    <div className="flex gap-8 items-center">
      <DevIcon name="react" />
      <DevIcon name="javascript" />
      <DevIcon name="typescript" />
      <DevIcon name="figma" />
    </div>

    <p className="text-lg text-zinc-500 mb-4"></p>
    <ul className="list-disc decoration-blue-400 pl-4">
      <li className="ml-4">
        <p className="text-lg text-zinc-500 mb-2">
          <b className="text-blue-400">Languages</b> - JavaScript, TypeScript,
          Ruby, HTML, CSS
        </p>
      </li>
      <li className="ml-4">
        <p className="text-lg text-zinc-500 mb-2">
          <b className="text-blue-400">Frameworks</b> - React, NextJS, Gatsby,
          Node.js, Express, Ruby on Rails
        </p>
      </li>
      <li className="ml-4">
        <p className="text-lg text-zinc-500 mb-2">
          <b className="text-blue-400">Testing</b> - Jest, React Testing
          Library, Cypress, RSpec, Capybara
        </p>
      </li>
      <li className="ml-4">
        <p className="text-lg text-zinc-500 mb-2">
          <b className="text-blue-400">Styling</b> - Tailwind CSS, Styled
          Components, Sass, CSS Modules
        </p>
      </li>
      <li className="ml-4">
        <p className="text-lg text-zinc-500 mb-2">
          <b className="text-blue-400">Databases</b> - PostgreSQL, MySQL, SQLite
        </p>
      </li>
      <li className="ml-4">
        <p className="text-lg text-zinc-500 mb-2">
          <b className="text-blue-400">Tools</b> - Git, GitHub, GitLab, Docker,
          AWS, Heroku, Netlify, Vercel, VS Code
        </p>
      </li>
    </ul>
  </div>
);
