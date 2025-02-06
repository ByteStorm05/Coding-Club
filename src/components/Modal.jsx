import React, { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDiscount, setHasDiscount] = useState(true);
  const originalPrice = 5833;
  const discountPercent = 40;
  const discountedPrice = 3500;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className=" px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        Buy Now
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog 
          as="div" 
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-blue-950/90 transition-opacity" />
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
                <Dialog.Panel className="w-full max-w-md transform rounded-xl bg-white shadow-xl transition-all">
                  <div className="flex items-center justify-between border-b p-4">
                    <Dialog.Title className="text-xl font-bold text-gray-800">
                      Order Summary
                    </Dialog.Title>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
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
                  
                  <div className="p-4 space-y-4">
                    <div className="text-2xl font-bold text-center">6 Month Batch</div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Coding Mafia Batch</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>5 FREE Mock Interviews (Gift)</span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Monthly Fee</span>
                        <div className="text-right">
                          <span className="text-lg font-semibold">₹{hasDiscount ? discountedPrice : originalPrice}</span>
                          {hasDiscount && (
                            <span className="ml-2 text-sm line-through text-gray-400">₹{originalPrice}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="discount"
                          checked={hasDiscount}
                          onChange={(e) => setHasDiscount(e.target.checked)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor="discount" className="text-sm text-gray-600">
                          Apply {discountPercent}% Early Bird Discount
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="border-t p-4 space-y-4">
                    <div className="text-center text-sm text-gray-600">
                      Pay First Month Installment
                    </div>
                    
                    <a 
                      href="https://razorpay.com/payment-button/pl_MvV92BQRLdDqgJ/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center py-3 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Pay Now
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

export default Modal;