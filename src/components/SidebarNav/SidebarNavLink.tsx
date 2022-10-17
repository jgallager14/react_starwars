import { NavLink } from "react-router-dom";

interface SidebarNavLinkProps {
  route: string;
  displayText: string;
}

export function SidebarNavLink(props: SidebarNavLinkProps): JSX.Element {
  const activeStyle =
    "p-6 align-middle bg-gray-500 border-b-2 border-b-black border-b-solid text-xl";

  const defaultStyle =
    "p-6 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl";

  return (
    <NavLink
      to={props.route}
      className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
    >
      {props.displayText}
    </NavLink>
  );
}
