"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from '@heroicons/react/24/outline'

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  { name: "POSTS", href: "/posts" },
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
                <Image
                  alt="Site Logo"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="size-8"
                  width={1}
                  height={1}
                />
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
                          ? '' : '',
                        'rounded-md px-3 py-2 text-sm font-medium',
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
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-900 hover:text-black focus:outline-none"
              >
                T
              </button>
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