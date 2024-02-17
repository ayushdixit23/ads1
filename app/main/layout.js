import MobileNav from "../component/MobileNav";
import Sidebar from "../component/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className={`overflow-y-scroll no-scrollbar`}>
        <div className="h-screen flex dark:bg-[#1b2431] bg-slate-100">
          <div className="pn:max-sm:hidden"><Sidebar /></div>
          <div><MobileNav /></div>
          <div className="w-full  overflow-y-scroll no-scrollbar">{children}</div>
        </div>
      </div>
    </div>
  );
}
