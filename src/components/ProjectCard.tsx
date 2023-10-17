type Props = {
  children: React.ReactNode;
};

export const ProjectCard = ({ children }: Props) => (
  <div
    className="
    bg-gradient-to-r from-white to-blue-50 border border-neutral-200 rounded-xl p-4 cursor-pointer shadow-md shadow-blue-200/50 
    transition hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-[2px] hover:scale-[1.02] hover:border-blue-400 
    "
  >
    {children}
  </div>
);
