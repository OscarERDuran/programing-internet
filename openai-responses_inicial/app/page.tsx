"use client";
import Assistant from "@/components/assistant";
import ToolsPanel from "@/components/tools-panel";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Main() {
  const [isToolsPanelOpen, setIsToolsPanelOpen] = useState(false);

  return (
    <div className="flex justify-center h-screen">
      <div className="w-full md:w-[70%]">
        <Assistant />
      </div>
      
    </div>
  );
}
