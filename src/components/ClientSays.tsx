import React from "react";
import Image from "next/image";

const ClientSays = () => {
  return (
    <section className="flex flex-col md:flex-row w-23/25 h-screen items-center justify-between p-6 md:p-10 text-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 relative mb-10 md:mb-0">
        {/* Background Image Layered Under Main Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 z-[-1] rounded-lg scale-110 sm:scale-125 md:scale-150"
          style={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/e5c9/2f95/765a75118c23e4fa4436325fbced2315?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jckOocqTWAInc85LqGUhMQnOqzXARRSudB8TFwQ0dgeGgcbnmfR~wQw6FiUENXvPJMVE~9CklZzxCzA6-HtRZATY5wsFpwsOx2uP5sysZofEeov9zBvOm8QZhWZ-Wwwf0uYffm1NDRCN1gfTBRJZCd6OeOTM28rgPGJ2oPi13eGdlFwVAAkzrLyhlONWxysxfR561Yq2JSJ9HzxAeleREsBFwLuTkdYn0Se8JcCoDjw-UN7t-Yl5FE3GplJ4e4ps8nM65BlHpVC-nB8HObbPtetq8gfFgyJlobFbGxwy7LRGxDAMEWWmlSysXXG1P-GTjXKPlPMQwpMmKCInRaUHkQ__)",
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute object-fill inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-30 blur-3xl rounded-full z-0"></div>

      
   {/* Main Image in Foreground */}
<div className="relative z-10 scale-110 sm:scale-125 md:scale-150">
  <Image
    src="https://s3-alpha-sig.figma.com/img/2368/dd85/55c3634f5be56895887954710f1590a8?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Km1z23u080fqedfgpqZKojbqJQ-MksAn8IeeICfQRjnr863aqzf4vyWSM~n7CTA46ZkO-U42CbuNBYWVDoxy9XEhw~Vwvaph-TB3rAfsXZRFUWcl9AB9UEZ3FOxgPXM69jaqYHsazpn0HnXN1MhlJcCrSjhWWvO-py0ni6n0wnRBXC6EnpQDhc1Oh5EzTqRhbKHWNuM3sx9-3tx0vqWXmoh0w6V-sOnjovEn5yFyV1fdm4D~z8bVGDmJgj47VSBf42pEgqIOu9haVwubKOzCXG40nzK5J5pDWoqYP0PtclsgisO4p1dYN0IbYXoAbMzU-L0UfJBtxNiV98hpIUKPVQ__"
    alt="Client Illustration"
    layout="responsive"
    width={1}
    height={1}
    className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
  />
</div>

      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 text-left md:pl-10 font-roboto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Global Leader
          </span>
          &nbsp;in Mobile Security Solutions
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Xproguard protects millions of users worldwide. Our innovative
          solutions ensure data safety.
        </p>

        <div className="flex flex-col sm:flex-row justify-items-start mt-8 space-y-4 sm:space-y-0 lg:space-x-17 sm:space-x-4">
          <div className="text-left">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              70%
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Increase in user satisfaction with our <br />
              security solutions.
            </p>
          </div>
          <div className="text-left">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              95%
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Reduction in data breaches with <br />
              Xproguard protection.
            </p>
          </div>
        </div>

        <div className="mt-8 space-x-4">
          <button className="z-50 px-4 py-2 sm:px-6 sm:py-2 border-2 border-blue-500 rounded-xl hover:bg-blue-600 transition-all">
            Learn More
          </button>
          <button className="text-blue-400 rounded-full px-4 py-2 hover:text-blue-300 transition-all">
            Join &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientSays;
