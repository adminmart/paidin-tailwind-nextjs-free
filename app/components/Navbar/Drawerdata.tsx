import React from "react";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Product', href: '#product', current: true },
  { name: 'Pricing', href: '#pricing', current: false },
  { name: 'Features', href: '#features', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                  'px-2 py-1 text-lg font-normal opacity-75 block'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <button className="bg-white w-full text-midnightblue border border-midnightblue font-medium py-2 px-4 rounded">
              Log In
            </button>
            <button className="bg-midnightblue w-full hover:bg-blue hover:text-white text-white font-medium my-2 py-2 px-4 rounded">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
