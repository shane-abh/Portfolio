

const Hero2 = () => {
  return (
    <div className="relative w-full h-[719px] overflow-hidden ">
    {/* Background with blur effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#AD00FF30]  to-[#001AFF1A] backdrop-blur-3xl"></div>

    {/* Content container */}
    <div className="relative max-w-[1030px] mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between h-full">
      {/* Text content */}
      <div className="md:w-2/3 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
        <div className="text-white text-lg space-y-4">
          <p>Hey everyone, welcome to my world!</p>
          <p>Growing up, I always loved building things, but my true passion sparked when I discovered computer programming. I was instantly drawn to UI design and the idea of creating software that could simplify and automate the everyday tasks we all do.</p>
          <p>Today, I'm a web developer focused on building JavaScript-based applications that solve real-world problems. My main interest is in fintech, where I'm driven to create tools that make financial management more accessible and understandable.</p>
          <p>My interest in fintech began with the book Rich Dad Poor Dad, which taught me practical, impactful lessons about finance. But as a university student, I noticed that many financial tools were either too complex or behind a paywall, making them hard to use. Inspired to make a difference, I started building fintech projects that are not only functional but also educational.</p>
          <p>When I'm not coding, I enjoy watching Formula 1, playing sports, and listening to music.</p>
          <p className="font-semibold">Let's Connect!</p>
          <p>Feel free to explore my projects or reach out if you'd like to connect or collaborate. I'd love to hear from you!</p>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/3 mt-8 md:mt-0">
        <img 
          src="/placeholder.svg?height=502&width=502" 
          alt="Web developer illustration" 
          className="w-full max-w-[502px] h-auto"
        />
      </div>
    </div>
  </div>
  )
}

export default Hero2