
"use client";

import Chat from "./Chat";

interface ChatModalProps {
  onClose: () => void;
}

const ChatModal = ({ onClose }: ChatModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      <div className="bg-card rounded-lg shadow-lg w-full max-w-3xl relative">
        <button onClick={onClose} className="absolute top-2 left-2 text-foreground p-2 bg-orange-300 rounded-lg">X</button>
        <Chat />
      </div>
    </div>
  );
};

export default ChatModal;
