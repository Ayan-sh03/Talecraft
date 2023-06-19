import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 80; // Adjust the value based on your navbar's height
      const scrollOrNot = scrollPosition - navbarHeight;
      setIsSticky(scrollOrNot > 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isMenuOpen && isSticky ? "navbar open sticky" : "navbar"}>
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="450"
          zoomAndPan="magnify"
          viewBox="0 0 337.5 148.499996"
          height="198"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <defs>
            <g />
            <clipPath id="67343371cf">
              <path
                d="M 37.984375 38.144531 L 299.242188 38.144531 L 299.242188 110.007812 L 37.984375 110.007812 Z M 37.984375 38.144531 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="8770d90706">
              <path
                d="M 45.042969 44.902344 L 168.582031 44.902344 L 168.582031 103.316406 L 45.042969 103.316406 Z M 45.042969 44.902344 "
                clip-rule="nonzero"
              />
            </clipPath>
          </defs>
          <g clip-path="url(#67343371cf)">
            <path
              stroke-linecap="butt"
              transform="matrix(0.748792, 0, 0, 0.74786, 37.985457, 38.143632)"
              fill="none"
              stroke-linejoin="miter"
              d="M -0.00144452 0.0012028 L 348.904424 0.0012028 L 348.904424 96.093069 L -0.00144452 96.093069 L -0.00144452 0.0012028 "
              stroke="#000000"
              stroke-width="6"
              stroke-opacity="1"
              stroke-miterlimit="4"
            />
          </g>
          <g clip-path="url(#8770d90706)">
            <path
              fill="#000000"
              d="M 45.042969 44.902344 L 168.765625 44.902344 L 168.765625 103.398438 L 45.042969 103.398438 Z M 45.042969 44.902344 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(68.77545, 83.211593)">
              <g>
                <path d="M 7.597656 0 L 10.066406 0 L 10.066406 -17.269531 L 16.679688 -17.269531 L 16.679688 -19.625 L 0.953125 -19.625 L 0.953125 -17.269531 L 7.597656 -17.269531 Z M 7.597656 0 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(88.562182, 83.211593)">
              <g>
                <path d="M 0.476562 0 L 3.113281 0 L 4.90625 -4.457031 L 14.464844 -4.457031 L 16.316406 0 L 18.921875 0 L 10.847656 -19.625 L 8.550781 -19.625 Z M 5.859375 -6.757812 L 9.699219 -16.175781 L 13.539062 -6.757812 Z M 5.859375 -6.757812 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(110.086483, 83.211593)">
              <g>
                <path d="M 2.859375 0 L 14.859375 0 L 14.859375 -2.355469 L 5.328125 -2.355469 L 5.328125 -19.625 L 2.859375 -19.625 Z M 2.859375 0 " />
              </g>
            </g>
          </g>
          <g fill="#ffffff" fill-opacity="1">
            <g transform="translate(127.939474, 83.211593)">
              <g>
                <path d="M 2.859375 0 L 15.082031 0 L 15.082031 -2.300781 L 5.328125 -2.300781 L 5.328125 -8.859375 L 14.074219 -8.859375 L 14.074219 -11.128906 L 5.328125 -11.128906 L 5.328125 -17.324219 L 14.773438 -17.324219 L 14.773438 -19.625 L 2.859375 -19.625 Z M 2.859375 0 " />
              </g>
            </g>
          </g>
          <g fill="#000000" fill-opacity="1">
            <g transform="translate(184.524693, 83.362564)">
              <g>
                <path d="M 11.242188 0.421875 C 16.652344 0.421875 20.746094 -2.859375 21.585938 -7.847656 L 15.839844 -7.847656 C 15.136719 -6 13.484375 -4.820312 11.355469 -4.820312 C 8.605469 -4.820312 6.699219 -6.867188 6.699219 -9.8125 C 6.699219 -12.785156 8.632812 -14.800781 11.410156 -14.800781 C 13.457031 -14.800781 15.167969 -13.652344 15.753906 -11.886719 L 21.472656 -11.886719 C 20.464844 -16.847656 16.429688 -20.042969 11.183594 -20.042969 C 5.128906 -20.042969 0.953125 -15.867188 0.953125 -9.8125 C 0.953125 -3.757812 5.128906 0.421875 11.242188 0.421875 Z M 11.242188 0.421875 " />
              </g>
            </g>
          </g>
          <g fill="#000000" fill-opacity="1">
            <g transform="translate(207.00654, 83.362564)">
              <g>
                <path d="M 2.074219 0 L 7.738281 0 L 7.738281 -5.578125 L 9.867188 -5.578125 L 12.671875 0 L 19.089844 0 L 15.476562 -6.617188 C 17.550781 -7.765625 18.726562 -9.839844 18.726562 -12.585938 C 18.726562 -16.933594 15.78125 -19.625 11.015625 -19.625 L 2.074219 -19.625 Z M 7.625 -10.09375 L 7.625 -15 L 10.261719 -15 C 12.054688 -15 13.035156 -14.128906 13.035156 -12.558594 C 13.035156 -10.988281 12.054688 -10.09375 10.261719 -10.09375 Z M 7.625 -10.09375 " />
              </g>
            </g>
          </g>
          <g fill="#000000" fill-opacity="1">
            <g transform="translate(227.18975, 83.362564)">
              <g>
                <path d="M 0.140625 0 L 6.140625 0 L 7.203125 -2.773438 L 13.90625 -2.773438 L 14.96875 0 L 20.996094 0 L 13.371094 -19.625 L 7.765625 -19.625 Z M 8.382812 -6.925781 L 10.570312 -13.007812 L 12.753906 -6.925781 Z M 8.382812 -6.925781 " />
              </g>
            </g>
          </g>
          <g fill="#000000" fill-opacity="1">
            <g transform="translate(248.326051, 83.362564)">
              <g>
                <path d="M 2.074219 0 L 7.738281 0 L 7.738281 -5.832031 L 14.296875 -5.832031 L 14.296875 -10.738281 L 7.738281 -10.738281 L 7.738281 -14.578125 L 15.027344 -14.578125 L 15.027344 -19.625 L 2.074219 -19.625 Z M 2.074219 0 " />
              </g>
            </g>
          </g>
          <g fill="#000000" fill-opacity="1">
            <g transform="translate(264.416558, 83.362564)">
              <g>
                <path d="M 6.757812 0 L 12.390625 0 L 12.390625 -14.382812 L 18.363281 -14.382812 L 18.363281 -19.625 L 0.785156 -19.625 L 0.785156 -14.382812 L 6.757812 -14.382812 Z M 6.757812 0 " />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="nav-link">
        {isMenuOpen ? (
          <ul
            className={"links"}
            style={{ display: isMenuOpen ? "flex" : "none" }}
          >
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="/tales">Tales</Link>
            </li>
            <li className="link">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        ) : (
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
