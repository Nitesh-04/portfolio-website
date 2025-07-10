
"use client";

import { useState } from "react";
import Chat from "./Chat";

interface ChatModalProps {
  onClose: () => void;
}

const ChatModal = ({ onClose }: ChatModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      <div className="bg-card rounded-lg shadow-lg w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-foreground">X</button>
        <Chat />
      </div>
    </div>
  );
};

export default ChatModal;
