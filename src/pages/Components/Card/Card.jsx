import { useState } from "react"
import Image from "next/image";
const Card = ({ id, image, front, back }) => {
  const [show, setShow] = useState(false)

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };


  return (
    <div
    key={'a' + id}
    className="w-80 h-80 md:w-80 lg:w-96 transition-all duration-500 ease-in-out transform hover:scale-105 flex-1 text-center block rounded-lg bg-transparent bg-opacity-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {show ? (
      <div key={'c' + id} className="max-w-full h-full bg-green-500 flex flex-col rounded-md items-center justify-center">
        <h1 key={'ft' + id} className="font-bold font-black text-lg sm:text-2xl text-center mb-8">
          {front}
        </h1>
        <p key={'bt' + id} className="text-xl text-white">
          Nivel: {back}
        </p>
      </div>
    ) : (
      <div key={'b' + id} className="w-full h-80 bg-transparent flex flex-col rounded-md border-solid items-center justify-center">
        <div className="flex items-center justify-center  center-items rounded-md border-solid items-center justify-center">
          <Image className="flex items-center justify-center  center-items rounded-md border-solid items-center justify-center" key={'i' + id} src={image} fill={true} />
        </div>
      </div>
    )}
  </div>
  )
}

export default Card