import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-darkish top-0 left-0 w-screen h-auto min-h-screen mx-auto overflow-hidden z-1 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <hr className="w-[120%] mx-auto my-2 border-2 border-reddish" />
        <div className="flex justify-center mx-auto">
          <h1 className="font-subtitle text-light text-4xl">ΠΡΟΦΙΛ</h1>
        </div>
        <hr className="w-[120%] mx-auto my-2 border-2 border-reddish" />
      </div>
    </section>
  );
};

export default About;