import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { LockIcon, CreditCard } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  price: number;
}

export function PaywallModal({ isOpen, onClose, price }: Props) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <LockIcon className="w-6 h-6 text-blue-600" />
            </div>
            <Dialog.Title className="text-xl font-semibold mb-2">
              Unlock Full Access
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mb-6">
              Get unlimited access to all practice questions, detailed explanations, and more.
            </Dialog.Description>
            <div className="text-3xl font-bold text-blue-600 mb-6">
              ${price}
            </div>
            <button
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700"
              onClick={() => {
                // Implement payment logic
                onClose();
              }}
            >
              <CreditCard className="w-5 h-5" />
              Purchase Now
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}