'use client'
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
export function Header() {
    const auth=useAuth();
  return (
    <ul className="flex">
      <li className="flex-1 mr-2">
        <Link
          className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          href="/login"
        >
          login
        </Link>
      </li>
      <li className="flex-1 mr-2">
        <Link
          className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          href="/panel"
        >
          panel
        </Link>
      </li>
    </ul>
  );
}
export default Header;
