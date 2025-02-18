"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from '@heroicons/react/24/outline'

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { name: "Post", href: "/posts" },
];

export default function GNav() {
  const pathname = usePathname() || "/";

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => setIsPanelOpen((prev) => !prev);

  return (
    <nav className="border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {
                  navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname.includes(item.href.replaceAll("/", ""))
                          ? 'font-semibold' : '',
                        'rounded-md px-3 py-2 text-sm font-medium flex items-center w-20 justify-center',
                      )}
                    >
                      {item.name}
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* <button
                type="button"
                className="relative rounded-full p-1 text-gray-900 hover:text-black focus:outline-none"
              >
                T
              </button> */}
            </div>
          </div>

          <div className="flex md:hidden">
            {/* Mobile menu button */}
            <button
              className="group relative inline-flex items-center justify-center rounded-md focus:outline-none"
              onClick={togglePanel}
            >
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          isPanelOpen ? "" : "hidden",
          "md:hidden"
        )}
      >
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {
            navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  pathname.includes(item.href.replaceAll("/", ""))
                    ? 'font-semibold underline' : '',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </Link>
            ))
          }
        </div>
      </div>
    </nav>
  )
}