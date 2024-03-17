"use client";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";


const Card = ({ item, id, handelClick }) => {

  const click = () => {
    window.location.reload()
  }
  return (
    <div className=" absolute w-screen h-screen bg-[#0000004b]">
      <div className=" flex items-center justify-center w-full h-full">
        <div className=" w-[300px] h-[300px] bg-white rounded-md flex flex-col  items-center ">

        <BsPatchCheckFill size={100} className="text-green-500 my-4" />
        <p className=" text-2xl font-semibold pt-4">Congratulation</p>
        <p className=" text-lg font-semibold pt-1">Completed game</p>

        <button onClick={click} className=" mt-6 bg-green-500 text-white py-2 w-[80%] rounded-lg text-lg font-medium cursor-pointer">Close</button>


        </div>
        
      </div>
    </div>
  );
};

export default Card;
