import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

import ExpandIcon from "@mui/icons-material/ExpandMoreRounded";
import WebIcon from "@mui/icons-material/Web";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppShortcutRoundedIcon from "@mui/icons-material/AppShortcutRounded";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";

export const Navbar = () => {
  const projects = [
    {
      name: "Web App",
      url: "#",
      icon: WebIcon,
    },
    {
      name: "Mobile App",
      url: "#",
      icon: AppShortcutRoundedIcon,
    },
    {
      name: "Game",
      url: "#",
      icon: SportsEsportsIcon,
    },
    {
      name: "Design",
      url: "#",
      icon: BrushRoundedIcon,
    },
    {
      name: "Other",
      url: "#",
      icon: FolderCopyRoundedIcon,
    },
  ];
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
        {/* Mobile Menubar */}
        <div className="flex lg:hidden"></div>
        {/* Normal Menubar */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About Me
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-0.5 text-sm font-semibold leading-6 text-gray-900 focus:outline-none ">
              Project
              <ExpandIcon
                className="h-5 w-5 flex-none text-gray-400 ui-open:rotate-180 ui-open:transform transition-all duration-200"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-3 max-w-lg overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 relative">
                  {projects.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-4 p-2 text-sm rounded-lg leading-6 hover:bg-gray-50"
                    >
                      <div className="flex flex-none items-center justify-center">
                        <item.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-500" />
                      </div>
                      <a
                        href={item.url}
                        className="font-semibold block min-w-max text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  );
};
