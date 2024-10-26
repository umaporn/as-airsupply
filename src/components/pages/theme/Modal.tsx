import { useState } from 'react';
import Dialog from '@/components/common/Dialog';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-gray px-4 py-2 text-sm font-medium text-white hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        Open Dialog
      </button>

      <Dialog
        title="Dynamic Dialog Title..."
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <p className="text-sm text-purple">This is a dynamic dialog content</p>
      </Dialog>
    </div>
  );
};

export default Modal;
