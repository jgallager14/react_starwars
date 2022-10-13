interface SidebarNavLinkProps {
  urlPath: string;
  displayText: string;
}

export function SidebarNavLink(props: SidebarNavLinkProps): JSX.Element {
  return (
    <a
      href={props.urlPath}
      className="p-6 align-middle bg-gray-300 border-b-2 border-b-black border-b-solid text-xl"
    >
      {props.displayText}
    </a>
  );
}
