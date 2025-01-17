import Link from "next/link";

import {
  homeItems,
  packages,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { usePathname } from "next/navigation";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false)

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${isActiveParentChaild(homeItems, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <Link href="/">Home </Link>
        </li>
        {/* End home page menu */}


        {/* End categories menu items */}
        <li className={pathname === "/about" ? "current" : ""}>
          <Link href="/about">About
            us </Link>
        </li>


        {/* End Destinatinos single menu */}


        {/* End blogIems */}

        {<li
          className={`${isActiveParentChaild(pageItems, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Services</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>}
        {/* End pages items */}

        {<li
          className={`${isActiveParentChaild(packages, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Chardham Packages</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {packages.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>}



        {/* <li
          className={`${
            pathname.split('/')[1] == 'dashboard'  || pathname.split('/')[1] == 'vendor-dashboard' ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}

        <li className={pathname === "/blogs" ? "current" : ""}>
          <Link href="/blogs">Blogs</Link>
        </li>

        <li className={pathname === "/all-destinations" ? "current" : ""}>
          <Link href="/all-destinations">All Destinations</Link>
        </li>

        <li className={pathname === "/booking-page" ? "current" : ""}>
          <Link href="/booking-page">Booking</Link>
        </li>

        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
