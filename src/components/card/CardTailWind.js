const CardTailWind = () => {
  return (
    <div className="relative">
      <div className="w-full h-[400px] rounded-lg">
        <img
          className="block w-full h-full inher object-cover rounded-lg"
          src="https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=1200x900"
          alt=""
        />
      </div>
      <div className="absolute bg-white left-2/4 bottom-0 p-5 rounded-[20px] z-10 -translate-x-2/4 translate-y-2/4 w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-[30px]">
          <div className="flex items-center gap-4">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=1200x900"
              alt=""
            />
            <span className="font-light text-gray-500">@zrndson</span>
          </div>
          <div className="flex items-center gap-4">
            <img className="w-[30px] h-[30px]" src="./icons-heart.png" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-[18px] text-black">
            Cosmic Perspective
          </h3>
          <span className="text-[18px] font-bold text-transparent bg-clip-text bg-primary-gradient ">
            12,000 PSL
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardTailWind
