

const CourseCard = () => {
  return (
    <div
    className="w-full max-w-[1030px] px-8 py-10 md:place-items-center flex flex-col items-start space-y-3 bg-gradient-to-b from-white to-[rgba(5,0,255,0.7)]  hover:bg-blue-400 rounded-lg shadow-lg transition-colors duration-300 ease-in-out"

  >
    <div className="w-full  md:max-w-screen-md space-y-[30px]">
      <h2 className="text-2xl md:text-3xl font-bold text-black font-title">Cognizant Java Full Stack Developer</h2>
      <p className="text-lg text-black w-full md:max-w-[620px] font-body">This course was led my Cognizant</p>
      {/* <div className="w-full h-full bg-black rounded-md overflow-hidden">
        <div className="w-full h-[47px] bg-[#474747] px-4 py-0 flex items-center">
          <div className="flex space-x-1">
            <div className="w-[10px] h-[10px] rounded-full bg-[#CA0000]"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-[#F9E000]"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-[#00DD16]"></div>
          </div>
        </div>
        <img
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          className="w-full h-full md:object-fill object-contain"
        />
      </div> */}
    </div>
  </div>
  )
}

export default CourseCard