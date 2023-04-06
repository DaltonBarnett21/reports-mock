import { useState } from "react";
import { motion, Variants } from "framer-motion";

export const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  return (
    <div className=" relative">
      <label className=" absolute text-sm z-20  left-6">
        Group position in Menu
      </label>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className=" relative m-4 "
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-1 bg-gray-200"
        >
          {selected || "1"}
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="20" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.ul
          className="flex flex-col items-start bg-gray-100 absolute  w-full p-1 "
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 0)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.2,
                delayChildren: 0.2,
                staggerChildren: 0.06,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 0)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li
            variants={itemVariants}
            onClick={() => {
              setIsOpen(false);
              setSelected("1");
            }}
            className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 w-full p-1"
          >
            1
          </motion.li>
          <motion.li
            variants={itemVariants}
            onClick={() => {
              setIsOpen(false);
              setSelected(" 2");
            }}
            className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 w-full p-1"
          >
            2
          </motion.li>
          <motion.li
            variants={itemVariants}
            onClick={() => {
              setIsOpen(false);
              setSelected("3");
            }}
            className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 w-full p-1"
          >
            3
          </motion.li>
          <motion.li
            variants={itemVariants}
            onClick={() => {
              setIsOpen(false);
              setSelected("4");
            }}
            className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 w-full p-1"
          >
            4
          </motion.li>
          <motion.li
            variants={itemVariants}
            onClick={() => {
              setIsOpen(false);
              setSelected("5");
            }}
            className="cursor-pointer hover:text-blue-500 hover:bg-gray-200 w-full p-1"
          >
            5
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};
