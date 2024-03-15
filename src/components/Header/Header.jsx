import React from "react";
import { useSelector } from "react-redux";
import { useNavigate , Link} from "react-router-dom";
import Logo from "./../Logo";
import LogoutButton from "./LogoutButton";

function Header() {
  const authStatus = useSelector((state) => state.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "login",
      path: "/login",
      active: !authStatus,
    },
    {
      name: "signup",
      path: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      path: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      path: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header>
      <div className="container">
        <nav>
          <div>
            <Link rel="stylesheet" href="">
              <Logo />
            </Link>
          </div>
          <ul>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.path)}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
