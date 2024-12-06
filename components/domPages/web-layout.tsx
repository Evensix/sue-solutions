import "~/styles/global.css";

import { DOMRouterProvider } from "~/lib/router-with-dom";
import { Header,  } from "~/components/domPages/web-nav";
import React from "react";

import { StyleNoSelect } from "../NoSelect";
import { IS_DOM } from "expo/dom";

export function ShadLayoutFull({
  navigate,
  children,
  select,
}: {
  navigate: typeof import("expo-router").router["navigate"];
  children: React.ReactNode;
  select?: boolean;
}) {
  return (
    <>
      {!select && <StyleNoSelect />}
      <DOMRouterProvider value={{ navigate }}>
          <div className="flex min-h-screen w-full flex-col bg-[#F2F2F7] pb-10">
            {/* <SideNavigationBar /> */}
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
              {/* TODO: Migrate to native. */}
              {!IS_DOM && <Header />}

              {children}
            </div>
          </div>
      </DOMRouterProvider>
    </>
  );
}

export default function WebLayout({
  navigate,
  children,
  select,
}: {
  navigate: typeof import("expo-router").router["navigate"];
  children: React.ReactNode;
  select?: boolean;
}) {
  if (process.env.EXPO_OS === "web" && !IS_DOM) {
    // In standard web, use a partial layout since the shared elements are in the Layout Route.
    return <>{children}</>;
  }

  return (
    <div className="animate-fade-in">
      <ShadLayoutFull select={select} navigate={navigate} children={children} />
    </div>
  );
}
