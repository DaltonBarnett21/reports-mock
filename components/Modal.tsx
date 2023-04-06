import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Input from "./Input";
import { Select } from "./Select";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
          <div className="flex flex-col py-8 px-4 text-center">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <motion.div
              className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
              initial={{
                opacity: 0,
                scale: 0.45,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.2,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.45,
                transition: {
                  ease: "easeIn",
                  duration: 0.2,
                },
              }}
            >
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white w-[450px] h-[500px] py-2">
                  <div className="flex justify-between px-4 ">
                    <span className=" font-bold">Edit Group</span>
                    <span
                      onClick={() => setIsOpen(!isOpen)}
                      className=" text-red-500 font-bold cursor-pointer"
                    >
                      X
                    </span>
                  </div>
                  <div className=" grid grid-cols-2">
                    <Input />
                    <div className="p-4 flex justify-between items-center">
                      <button className="hover:bg-blue-600 transition-all bg-blue-500 text-white p-1 rounded-md text-sm">
                        Save Edit
                      </button>
                      <button className=" text-white hover:bg-orange-600 transition-all bg-orange-500 p-1 rounded-md text-sm">
                        Delete This Group
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <Select />
                    <div className="mt-2 grid-cols-2">
                      <button className=" mt-3 bg-blue-500 hover:bg-blue-600 transition-all text-white text-xs p-1 rounded-md">
                        Save Group position in Group
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 grid-cols-2">
                    <span className=" font-bold p-4">
                      Reports in this group (6)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
