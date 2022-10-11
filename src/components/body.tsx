import { Sidebar } from "./sidebar";
import { Content } from "./content";

export function Body() {
  return (
    <div className="body">
      <Sidebar />
      <Content />
    </div>
  );
}
