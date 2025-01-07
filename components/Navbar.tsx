'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { FaTwitter, FaDiscord, FaGithub, FaBars } from 'react-icons/fa';

import { ThemeSwitch } from './theme-switch';
import SearchBar from './SearchBar';

import { socialdetails } from '@/config/social';

export default function NavbarComponent({
  onMenuToggle,
  mode,
}: {
  onMenuToggle?: () => void;
  mode: 'home' | 'component';
}) {
  return (
    <Navbar className="border-b border-divider" maxWidth="full">
      {mode === 'component' && (
        <NavbarContent className="sm:hidden" justify="start">
          <Button isIconOnly variant="light" onClick={onMenuToggle}>
            <FaBars />
          </Button>
        </NavbarContent>
      )}
      <NavbarBrand>
        <Link
          aria-label="Vastra UI"
          className="text-black dark:text-white"
          href="/"
        >
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
      {mode === 'component' && (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Docs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link aria-current="page" color="foreground" href="/component">
              Components
            </Link>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button color="success" size="sm" variant="flat">
            In Beta 🚀
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SearchBar />
        </NavbarItem>
        <NavbarItem className="flex gap-2 justify-center items-center">
          <Link
            aria-label="Twitter"
            className="hidden sm:flex"
            href={socialdetails.twitterLink}
          >
            <FaTwitter className="text-default-500" />
          </Link>
          <Link
            aria-label="Discord"
            className="hidden sm:flex"
            href={socialdetails.discordLink}
          >
            <FaDiscord className="text-default-500" />
          </Link>
          <Link aria-label="Github" href={socialdetails.githubLink}>
            <FaGithub className="text-default-500" />
          </Link>
          <Button isIconOnly aria-label="Toggle theme" variant="light">
            <ThemeSwitch />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
