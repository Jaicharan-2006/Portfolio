const links = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  return (
    <nav
      className="
      fixed top-5 left-1/2
      -translate-x-1/2
      z-50
      px-8 py-4
      rounded-full
      backdrop-blur-xl
      bg-white/10
      border border-white/20
      shadow-lg
      "
    >
      <ul className="flex gap-8">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="
                hover:text-cyan-400
                duration-300
              "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}