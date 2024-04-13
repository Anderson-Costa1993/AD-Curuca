import { useEffect, useState } from "react";

export function AlterTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

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

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark));
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const darkModeHandler = () => {
    setDark(!dark);
  };

  return (
    <div>
      <button onClick={darkModeHandler}>
        {dark ? (
          <i
            className="bi bi-brightness-alt-high text-yellow-700"
            style={{ fontSize: "22px" }}
          ></i>
        ) : (
          <i
            className={`bi bi-moon-stars-fill ${
              scrolled ? "text-zinc-900" : ""
            }`}
            style={{ fontSize: "16px" }}
          ></i>
        )}
      </button>
    </div>
  );
}
