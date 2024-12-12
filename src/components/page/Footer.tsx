const Footer = () => {
  return (
    <footer className="bg-[#000073] rounded-lg shadow  ">
      <div className="w-full max-w-screen-lg mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <h1 className="font-title text-3xl font-bold text-white">SHANE ABRAHAM</h1>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium font-body text-gray-300 sm:mb-0 ">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/#projects" className="hover:underline me-4 md:me-6">
                Projects
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
          © 2024{" "}
          <a href="/" className="hover:underline ">
            Shane Abraham™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
