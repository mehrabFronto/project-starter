"use client";

import dynamic from "next/dynamic";
const DarkModeProvider = dynamic(() => import("@/contexts/DarkModeProvider"), {
  ssr: false,
});

import React from "react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DarkModeProvider>{children}</DarkModeProvider>
    </>
  );
};

export default AppProvider;
