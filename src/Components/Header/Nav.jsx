import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  console.log(menu);

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
        {/* menu start -------------------------------- */}
        <div className="lg:hidden relative">
          <button>
            <label className="btn btn-circle swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox"  onChange={() => setMenu(!menu )}  />

              {/* hamburger icon */}
              
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
             

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </button>
          <ul
              tabIndex={0}
              className={`menu absolute top-11 -left-60  menu-sm    text-xl  dropdown-content border border-primary border-opacity-30 border-l-none
               mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-r-xl w-52  ${menu && '-left-4 duration-300  '}`}
            >
               <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-primary font-bold border-b p-2" : "font-bold border-b p-2 "
              }
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "underline text-primary font-bold border-b p-2 " : "font-bold border-b p-2 "
              }
            >
              <p>Blog</p>
            </NavLink>
            <NavLink
              to="/Bookmark"
              className={({ isActive }) =>
                isActive ? "underline text-primary font-bold p-2" : "font-bold p-2"
              }
            >
              <p>Bookmark</p>
            </NavLink>
            </ul>
        </div>
        {/* menu end ------------------------------------ */}
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl gap-0 text-secondary normal-case">
            Blaze<span className=" text-primary">Byte</span>
          </a>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1 hidden lg:flex  gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-primary font-bold" : "font-bold"
              }
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "underline text-primary font-bold" : "font-bold"
              }
            >
              <p>Blog</p>
            </NavLink>
            <NavLink
              to="/Bookmark"
              className={({ isActive }) =>
                isActive ? "underline text-primary font-bold" : "font-bold"
              }
            >
              <p>Bookmark</p>
            </NavLink>
          </ul>
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
              type="checkbox"
              //   value="cupcake"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </>
  );
}
