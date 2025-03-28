import React, { useState } from 'react';
import demologo from '../../img/demologo.png';
import SocialMediaIcons from '../icons/SocialMediaIcons';
import { IoClose } from 'react-icons/io5';
import { CgDetailsMore } from 'react-icons/cg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full relative h-fit p-2  bg-opacity-80 items-end justify-between pt-4 py-2 flex ">
      <div className="font-bold w-full  flex flex-wrap  justify-between items-center">
        <div className="flex justify-between w-full items-end gap-4">
          <div className="text-3xl h-fit w-fit rounded-full text-[50px]">
            <img src={demologo} alt="" className="h-16 w-16 rounded-full" />
          </div>
          <h1 className="md:text-[36px] text-xl font-bold text-white drop-shadow-md">
            MAIN_HEADING_PLACEHOLDER
          </h1>

        </div>
      </div>
      <div className={`md:hidden  absolute top-0 right-0 z-50 w-full bg-stone-950 flex flex-col text-bl items-center transition-transform duration-300 ease-in-out ${menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <SocialMediaIcons link={"https://www.keraladrives.com"} title={<span className='text-white'>HOME</span>} />
        <SocialMediaIcons link={"https://www.keraladrives.com/about"} title={<span className='text-white'>ABOUT</span>} />
        <SocialMediaIcons link={"https://www.keraladrives.com/destination"} title={<span className='text-white'>DESTINATIONS</span>} />
        <SocialMediaIcons link={"https://www.keraladrives.com/gallery"} title={<span className='text-white'>GALLERY</span>} />
      </div>
      {/* <div className="md:flex sm:hidden hidden gap-3 z-50 text-[18px] items-end h-fit flex-wrap text-stone-950 text-opacity-90 justify-start rounded-lg">
      <SocialMediaIcons  link={"http://sangitl2020-001-site7.atempurl.com/index.html"} title={<span className='text-white'>HOME</span>} />
        <SocialMediaIcons link={"http://sangitl2020-001-site7.atempurl.com/products.html"} title={<span className='text-white'>PRODUCTS & SERVICES</span>} />
        <SocialMediaIcons link={"http://sangitl2020-001-site7.atempurl.com/about.html"} title={<span className='text-white'>ABOUT</span>} />
        <SocialMediaIcons link={"http://sangitl2020-001-site7.atempurl.com/contact.html"} title={<span className='text-white'>BLOGS</span>} />
      </div> */}
      <button onClick={toggleMenu} className='w-fit absolute top-2 right-2 p-1 flex md:hidden bg-stone-200 z-50 text-red-400 rounded-lg'>
        {menuOpen ? <IoClose /> : <CgDetailsMore />}
      </button>
    </div>
  );
}

export default Navbar;
