"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
 } from "@nextui-org/navbar"
import { Button } from "@nextui-org/button"
import Link from "next/link"
import { FaTwitter, FaDiscord, FaGithub, FaBars } from "react-icons/fa"
import { ThemeSwitch } from "./theme-switch"
import SearchBar from "./SearchBar"
import { socialdetails } from "@/config/social"

export default function NavbarComponent({ onMenuToggle, mode }: { onMenuToggle?: () => void, mode: 'home' | 'component' }) {
  return (
    <Navbar maxWidth="full" className="border-b border-divider">
     {mode === "component" && <NavbarContent className="sm:hidden" justify="start">
        <Button isIconOnly variant="light" onClick={onMenuToggle}>
          <FaBars />
        </Button>
      </NavbarContent>}
      <NavbarBrand>
        <Link href="/" className="text-black dark:text-white" aria-label="Vastra UI">
        <p className="font-bold text-inherit">Vastra UI</p>
        </Link>
        {/* <Dropdown>
          <DropdownTrigger>
            <Button
              variant="light"
              endContent={<FaChevronDown />}
              className="ml-2"
            >
              v1.0.0
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Version selection">
            <DropdownItem key="v1.0.0">v1.0.0</DropdownItem>
           </DropdownMenu>
        </Dropdown> */}
      </NavbarBrand>
      {mode === 'component' &&
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/component" aria-current="page">
            Components
          </Link>
        </NavbarItem>
      </NavbarContent>
      }
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button variant="flat" color="success" size="sm">
            In Beta 🚀
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
         <SearchBar mode={mode}/>
        </NavbarItem>
        <NavbarItem className="flex gap-2 justify-center items-center">
          <Link href={socialdetails.twitterLink} aria-label="Twitter" className="hidden sm:flex">
            <FaTwitter className="text-default-500" />
          </Link>
          <Link href={socialdetails.discordLink} aria-label="Discord" className="hidden sm:flex">
            <FaDiscord className="text-default-500" />
          </Link>
          <Link href={socialdetails.githubLink} aria-label="Github">
            <FaGithub className="text-default-500" />
          </Link>
          <Button isIconOnly variant="light" aria-label="Toggle theme">
            <ThemeSwitch/>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}