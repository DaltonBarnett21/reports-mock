import React, { useState } from "react";
import { Modal } from "./Modal";

type Item = {
  name: string;
  reports: string[];
};

interface GroupProp {
  data: Item;
  index: number;
}

export const Group = ({ data, index }: GroupProp) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=" flex w-full bg-gray-300 justify-between items-center ">
        <p className="font-bold p-2 truncate">{data?.name}</p>
        {index === 0 && (
          <button
            onClick={showModel}
            className=" bg-blue-300 hover:bg-blue-500 h-6 p-2 rounded-xl text-white flex items-center"
          >
            Edit
          </button>
        )}
      </div>

      {data?.reports.map((report, index) => (
        <p className=" pl-2 p-1 truncate" key={index}>
          {report}
        </p>
      ))}
    </div>
  );
};
