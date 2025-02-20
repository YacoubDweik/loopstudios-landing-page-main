import { useState } from "react";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="z-2 absolute left-0 top-0 w-full py-10">
      <div className="container flex items-center justify-between">
        {!isExpanded && (
          <>
            <img src={import.meta.env.BASE_URL + "/images/logo.svg"} alt="Loopstudios logo" />
            <button
              id="menuButton"
              className="cursor-pointer md:hidden"
              aria-haspopup="true"
              aria-controls="menu1"
              aria-expanded={isExpanded}
              aria-label="Click here to open the navigation menu"
              onClick={() => setIsExpanded(true)}
            >
              <img src={import.meta.env.BASE_URL + "/images/icon-hamburger.svg"} alt="" aria-hidden="true" />
            </button>
          </>
        )}

        {isExpanded && (
          <div className="fixed left-0 top-0 min-h-screen w-full bg-black text-white">
            <div className="container relative flex min-h-screen flex-col items-start justify-center">
              <div className="container absolute left-0 top-0 flex items-center justify-between py-10">
                <img src={import.meta.env.BASE_URL + "/images/logo.svg"} alt="Loopstudios logo" />
                <button
                  className="cursor-pointer"
                  aria-label="Click here to close the navigation menu"
                  onClick={() => setIsExpanded(false)}
                >
                  <img src="/images/icon-close.svg" alt="" aria-hidden="true" />
                </button>
              </div>
              <nav aria-label="Main navigation menu">
                <ul id="menu1" role="menu" className="flex flex-col gap-8 text-4xl">
                  <li role="none">
                    <a className="group relative pb-1" href="#" role="menuitem" tabIndex={isExpanded ? 0 : -1}>
                      About
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li role="none">
                    <a className="group relative pb-1" href="#" role="menuitem" tabIndex={isExpanded ? 0 : -1}>
                      Careers
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li role="none">
                    <a className="group relative pb-1" href="#" role="menuitem" tabIndex={isExpanded ? 0 : -1}>
                      Events
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li role="none">
                    <a className="group relative pb-1" href="#" role="menuitem" tabIndex={isExpanded ? 0 : -1}>
                      Products
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li role="none">
                    <a className="group relative pb-1" href="#" role="menuitem" tabIndex={isExpanded ? 0 : -1}>
                      Support
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}

        {!isExpanded && (
          <nav className="hidden text-xl text-white md:block">
            <ul className="hidden space-x-6 md:flex" role="menu">
              <li role="none">
                <a role="menuitem" className="group relative pb-1" href="#">
                  About
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li role="none">
                <a role="menuitem" className="group relative pb-1" href="#">
                  Careers
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li role="none">
                <a role="menuitem" className="group relative pb-1" href="#">
                  Events
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li role="none">
                <a role="menuitem" className="group relative pb-1" href="#">
                  Products
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
              <li role="none">
                <a role="menuitem" className="group relative pb-1" href="#">
                  Support
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
