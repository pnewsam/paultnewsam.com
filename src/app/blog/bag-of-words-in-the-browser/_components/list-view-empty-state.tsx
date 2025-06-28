import { CircleSlashIcon } from "lucide-react";

export default function ListViewEmptyState() {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-2">
      <CircleSlashIcon className="w-10 h-10 stroke-[0.75px] text-muted-foreground" />
      <p className="text-muted-foreground">No results found.</p>
    </div>
  );
}
