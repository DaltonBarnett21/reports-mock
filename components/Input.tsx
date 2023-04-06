import React from "react";

const Input = () => {
  return (
    <div className=" relative mt-2">
      <label className=" absolute left-6 text-sm">Group Name</label>
      <input
        className=" bg-gray-200 m-4 p-2 border-b outline-none placeholder:text-black  border-b-gray-400"
        type="text"
        placeholder="Group Name 1"
      />
    </div>
  );
};

export default Input;
