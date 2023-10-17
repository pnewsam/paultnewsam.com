export const ProjectCard = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
    bg-gradient-to-r from-white to-blue-50 border border-zinc-200 rounded-xl p-4 cursor-pointer shadow-md shadow-blue-200/50 
    transition hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-[2px] hover:scale-[1.02] hover:border-blue-400 
    "
  >
    {children}
  </div>
);

export const Projects = () => (
  <div id="projects">
    <p className="text-lg font-semibold mb-4">Recent Projects</p>
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white hover:bg-gradient-to-tr hover:from-blue-50 hover:to-blue-100 transition-all duration-150 border border-zinc-200 shadow-lg shadow-zinc-400/10 text-zinc-500 rounded-xl p-4">
        <p className="font-semibold text-blue-400">Synesthetic Labs</p>
        <p>Design services for podcasters.</p>
      </div>
      <ProjectCard>
        <p className="font-semibold text-lg text-blue-400">Synesthetic Labs</p>
        <p className="text-zinc-500">Design services for podcasters.</p>
      </ProjectCard>
    </div>
  </div>
);
