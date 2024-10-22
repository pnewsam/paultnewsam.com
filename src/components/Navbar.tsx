import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="">
      <nav className="container max-w-screen-lg mx-auto px-8 flex justify-end py-8">
        <ThemeToggle />
      </nav>
    </div>
  );
}
