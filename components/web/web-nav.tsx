import React from "react";

import { IS_DOM } from "expo/dom";

const baseUrl = IS_DOM ? process.env.EXPO_DOM_BASE_URL : "";

export function SideNavigationBar() {

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">

      </nav>
    </aside>
  );
}


export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
  
    </header>
  );
}
