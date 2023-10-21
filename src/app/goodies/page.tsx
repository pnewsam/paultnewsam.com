import { Left } from "@/components/Left";
import { Right } from "@/components/Right";

export default function Goodies() {
  return (
    <>
      <Left>
        <div className="inline-flex flex-wrap items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-stone-700 to-stone-900 mb-4">
            Goodies
          </h1>
        </div>
      </Left>
      <Right>there</Right>
    </>
  );
}
