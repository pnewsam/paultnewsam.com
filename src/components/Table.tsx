export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table className="w-full rounded-lg border [&_th]:p-4 [&_th]:text-left [&_td]:p-4 [&_tr]:border-t text-lg md:text-xl">
      {children}
    </table>
  );
};
