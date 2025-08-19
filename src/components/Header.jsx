import Logo from "../assets/images/logo.svg";
import { useEffect, useRef, useState } from "react";
import LangSelector from "../features/i18n/components/langSelector/LangSelector";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      dialogRef.current?.querySelector("#close-menu-button")?.focus();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClose = () => setIsOpen(false);
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", handleClose);
    return () => dialog?.removeEventListener("close", handleClose);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed z-50 top-0 left-0 w-full bg-black shadow-2xl text-text-secondary">
      <nav
        className="mx-auto flex container items-center justify-between px-4 py-2 lg:py-4"
        aria-label="Global"
      >
        <div className="flex w-full justify-between items-center">
          <a href="#">
            <img
              src={Logo}
              alt="iescrow logo"
              className="w-20 md:w-24 lg:w-32"
            />
          </a>
          <ul className="hidden lg:flex lg:items-center lg:justify-end lg:gap-x-12 lg:w-full">
            <li>
              <a href="#">item 1</a>
            </li>
            <li>
              <a href="#">item 2</a>
            </li>
            <li>
              <a href="#">item 3</a>
            </li>
            <li>
              <LangSelector />
            </li>
            <li>
              <a
                href="#"
                className="w-full max-w-[300px] text-text-primary font-semibold border-2 border-primary bg-primary px-10 py-2 rounded-full uppercase text-center lg:max-w-[180px]"
              >
                Presale
              </a>
            </li>
          </ul>

          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              id="open-menu-button"
              className="-m-2.5 inline-flex cursor-pointer items-center justify-center rounded-md p-2.5 text-white transition-all duration-300 will-change-transform hover:scale-150"
            >
              <span className="sr-only">Open principal Menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <dialog
        ref={dialogRef}
        className="bg-black z-50 h-screen max-h-none w-full max-w-full lg:hidden"
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
      >
        <div className="z-10 p-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="w-full flex justify-between">
                <a href="#">
                  <img src={Logo} alt="iescrow logo" />
                </a>

                <button
                  onClick={toggleMenu}
                  type="button"
                  id="close-menu-button"
                  className="-m-2.5 cursor-pointer p-2.5 text-white transition-all duration-300 ease-in will-change-transform hover:scale-150"
                >
                  <span className="sr-only">Close Menu</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <ul className="mt-20 text-text-secondary flex flex-col items-center gap-12">
              <li onClick={closeMenu}>
                <a href="#">item 1</a>
              </li>
              <li onClick={closeMenu}>
                <a href="#">item 2</a>
              </li>
              <li onClick={closeMenu}>
                <a href="#">item 3</a>
              </li>
              <li>
                <LangSelector handleChange={closeMenu} />
              </li>
              <li onClick={closeMenu}>
                <a
                  href="#"
                  className="w-full max-w-[300px] text-text-primary font-semibold border-2 border-primary bg-primary px-6 py-2 rounded-full uppercase text-center lg:max-w-[180px]"
                >
                  Presale
                </a>
              </li>
            </ul>
          </div>
        </div>
      </dialog>
    </header>
  );
}
