import React, { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';

const DemoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+917303013866"; // Indian number with country code

  return (
    <>
      {/* Button to open modal */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className=" px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  text-black  "
      >
        Book a Demo
      </button>

      {/* Modal Transition */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog 
          as="div" 
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          {/* Background Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* Modal Content */}
                <Dialog.Panel className="w-full max-w-md transform rounded-xl bg-white shadow-xl transition-all">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b p-4">
                    <Dialog.Title className="text-xl font-bold text-gray-800">
                      Book a Free Demo
                    </Dialog.Title>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none"
                      aria-label="Close"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="p-6 space-y-4 text-center">
                    <p className="text-gray-700 text-lg">
                      Get in touch with us for a free demo session!
                    </p>

                    {/* Call Button */}
                    <a 
                      href={`tel:${phoneNumber}`}
                      className="w-full block text-center py-3 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      📞 Call Now: +91 7303013866
                    </a>

                    {/* WhatsApp Button */}
                    <a 
                      href={`https://wa.me/${phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center py-3 px-4 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      💬 WhatsApp Now: +91 7303013866
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DemoModal;
