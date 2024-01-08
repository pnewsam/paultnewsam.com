export const About = () => {
  return (
    <>
      {/* <p className="inline-flex gap-2 text-xs border border-stone-300 rounded-lg px-2 py-1 font-medium">
            <RadioTower className="w-4 h-4 text-red-600" />
            <span className="text-red-600">Remote</span>
            <span className="text-stone-400"> - San Diego, CA</span>
          </p> */}
      <p className="text-stone-600 tracking-tight leading-relaxed mb-3">
        Frontend developer with a background in biology. Inspired by ambitious
        mission statements, and passionate about building great user
        experiences.
      </p>

      <p className="text-stone-600 tracking-tight leading-relaxed mb-3">
        <b>Bullish on</b>:&nbsp;
        <a
          className="underline underline-offset-2"
          href="https://tailwindcss.com/"
        >
          Tailwind
        </a>
        ,&nbsp;
        <a
          className="underline underline-offset-2"
          href="https://ui.shadcn.com/"
        >
          shadcn/ui
        </a>
        ,&nbsp;Chinese cuisine,&nbsp;
        <a
          className="underline underline-offset-2"
          href="https://thenetworkstate.com/"
        >
          Network States
        </a>
        , Podcasts, AI Copilots, Grayscale color schemes, Yves Tumor&apos;s
        legacy
      </p>
      <p className="text-stone-600 tracking-tight leading-relaxed mb-2">
        <b>Bearish on</b>: Quantitative easing, Superhero movies
      </p>
    </>
  );
};
