
import clsx from "clsx";
import React from "react";
import {
  Tooltip,
  TooltipTrigger,
} from "~/components/ui/tooltip";

import { IS_DOM } from "expo/dom";
import { Link } from "~/lib/router-with-dom";

const baseUrl = IS_DOM ? process.env.EXPO_DOM_BASE_URL : "";

export function SideBarTab({
  href,
  title,
  selected,
  icon,
}: {
  href: import("expo-router").LinkProps<any>["href"];
  title: string;
  selected?: boolean;
  icon: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={clsx(
            "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
            selected && "bg-accent text-accent-foreground"
          )}
        >
          {icon}

          <span className="sr-only">{title}</span>
        </Link>
      </TooltipTrigger>
    </Tooltip>
  );
}

export function SheetTab({
  href,
  title,
  selected,
  icon,
}: {
  href: import("expo-router").LinkProps<any>["href"];
  title: string;
  selected?: boolean;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-4 px-2.5 hover:text-foreground",
        selected ? "text-foreground" : "text-muted-foreground"
      )}
    >
      {icon}
      {title}
    </Link>
  );
}


export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
    
    </header>
  );
}
