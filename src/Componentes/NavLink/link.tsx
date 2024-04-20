import { ComponentProps, useEffect, useState } from "react";

interface LinkNavProps extends ComponentProps<"a"> {}

export function LinkNav(props: LinkNavProps) {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href=""
      className={`text-slat-50 uppercase font-bold text-[12px] hover:border-b-2 border-b-slate-50
       dark:text-slate-50 dark:border-b-blue-500/60 ${
        scrolled ? "text-zinc-900 border-b-zinc-900/80" : ""
      } md:justify-center md:items-center`}
      {...props}
    ></a>
  );
}
