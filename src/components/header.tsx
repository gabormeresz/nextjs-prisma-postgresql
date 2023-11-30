import Link from "next/link";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import React from "react";
import { Suspense } from "react";
import HeaderAuth from "./header-auth";
import SearchInput from "./search-input";

export default async function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Suspense>
          <SearchInput />
        </Suspense>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
