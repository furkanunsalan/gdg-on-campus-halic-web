"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FaHome, FaCalendarAlt, FaUsers } from "react-icons/fa"; // Import icons

export function CustomNavbar() {
  return (
    <NavigationMenu className="bg-blue-500 rounded-lg mx-auto mt-6 px-4 py-2">
      <NavigationMenuList className="flex space-x-2">
        <NavigationMenuItem className="bg-red-500 px-4 py-2 rounded-l-md hover:opacity-90 hover:cursor-pointer">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn("text-white flex items-center")}>
              <FaHome className="mr-2" /> Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-green-500 px-4 py-2 hover:opacity-90 hover:cursor-pointer">
          <Link href="/#events" legacyBehavior passHref>
            <NavigationMenuLink className={cn("text-white flex items-center")}>
              <FaCalendarAlt className="mr-2" />Events
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-yellow-500 px-4 py-2 rounded-r-md hover:opacity-90 hover:cursor-pointer">
          <Link href="/#team" legacyBehavior passHref>
            <NavigationMenuLink className={cn("text-white flex items-center")}>
              <FaUsers className="mr-2" />Team
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
