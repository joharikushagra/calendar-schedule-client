import React from "react";
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-screen absolute z-10 flex justify-center items-center bg-slate-100/80">
      <CircleLoader color="#36d7b7" className="absolute top-14 left-14 z-10" />
      <div className="z-20 font-bold text-xl">Loading..</div>
    </div>
  );
};

export default Loader;
