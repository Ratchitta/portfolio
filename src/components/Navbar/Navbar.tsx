import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import ExpandIcon from "@mui/icons-material/ExpandMoreRounded";
import WebIcon from "@mui/icons-material/Web";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppShortcutRoundedIcon from "@mui/icons-material/AppShortcutRounded";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo (Name) */}
        <div className="p-2">
          <p className="logo text-2xl">Ratchitta Panya-ngam</p>
        </div>
        {/* Mobile menubar button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2.5 text-gray-400 inline-flex rounded-md"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only"></span>
            <MenuRoundedIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Normal menubar */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About Me
          </Link>
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
              <Popover.Panel className="absolute z-10 right-0 mt-3 max-w-lg overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 relative">
                  {projects.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-4 p-2 text-sm rounded-lg leading-6 hover:bg-gray-50"
                    >
                      <div className="flex flex-none items-center justify-center">
                        <item.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-500" />
                      </div>
                      <Link
                        href={item.url}
                        className="font-semibold block min-w-max text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
      {/* Mobile menu */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close panel</span>
              <CloseRoundedIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block py-2 px-3 text-base font-semibold leading-6 text-gray-900"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block py-2 px-3 text-base font-semibold leading-6 text-gray-900"
                >
                  About Me
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="text-base font-semibold leading-7 py-2 pl-3 pr-3.5 text-gray-900 w-full items-center justify-between flex rounded-lg">
                        Project
                        <ExpandIcon
                          className={`${
                            open ? "transform rotate-180" : ""
                          } w-5 h-5 flex-none text-gray-400 transition-all duration-200`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Disclosure.Panel className="mt-2">
                          {projects.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.url}
                              className="block rounded-lg py-1 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
