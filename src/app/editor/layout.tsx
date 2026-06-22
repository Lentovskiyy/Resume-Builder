import React from "react";
import SidebarEditor from "@/components/layouts/Editor/SidebarEditor/SidebarEditor";

export default function EditorLayout({
                                       children,
                                     }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden bg-gray-200">
      <div className="w-[15%] h-full">
        <SidebarEditor />
      </div>

      <main className="w-[85%] h-full flex flex-col overflow-y-auto">
        {children}
      </main>
    </div>
  );
}