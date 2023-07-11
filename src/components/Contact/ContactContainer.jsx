import AssetsSocial from "../Footer/AssetsSocial";
import InputArea from "./InputArea";

const ContactContainer = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 mx-auto py-10 lg:py-14">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-6 text-gray-900">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-clip">
            Hello I'm <b>Muhammad Imam</b>, I'm a frontend developer, I've been
            learning programming for 2 years, this is one of my portfolio
            projects, TechStack that I'm currently using is <b className="text-[#38ebf5]">reactJS</b> as Frontend,
            <b className="text-[#3F83F8]">TailwindCSS</b> for styles, with <b className="text-black">ExpressJS</b> API as Backend and <b className="text-[#3083bf]">Postgresql</b> as database, then state management using <b className="text-[#895bf5]">Redux</b>. 
            <br/>
            <br/>
            I hope that this
            project can add to my experience in developing web and for my
            learning, I will continue to learn for the future to be even better,
            <br/>
            <br/>
            If you need help building or updating a website? Don't worry! I'm
            here to help you realize your online vision.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <InputArea />
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-zinc-900 border-0 py-2 px-8 focus:outline-none hover:bg-gold rounded text-lg">
                KIRIM
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">imammbgn25@gmail.com</a>
              <p className="leading-normal my-5">
                Tangerang, Banten
                <br />
                Indonesia
              </p>
              <span className="inline-flex gap-3">
                <AssetsSocial />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
