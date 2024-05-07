import React from "react";

const Home = () => {
  return (
    <>
      <section className="w-full bg-white p-2 md:p-6 lg:p-4 xl:p-6 overflow-hidden">
        {/* First Page */}
        <div className="w-full h-full flex flex-col md:flex-row  items-center md:space-y-0 md:space-x-2 lg:space-x-4">
          <div className="w-full h-1/2 lg:h-full lg:w-1/2 text-3xl p-5 md:p-10 space-y-3 md:space-y-6">
            <div className="text-gray-600 text-lg md:text-2xl">
              Welcome to <p>KAPOL GLOBAL ACADEMY</p>
            </div>
            <div className="font-bold text-blue md:text-4xl lg:text-6xl tracking-tighter">
              <h1>
                EMPOWERING <br /> MINDS <br /> TO EXCEL <br />
                IN LIFE
              </h1>
            </div>
          </div>
          <div className="w-full h-1/2 lg:h-full lg:w-1/2">
            <div className="w-full md:h-[350px] lg:h-[700px] flex items-center">
              <img src="src/assets/image.png" className="w-full" alt="" />
            </div>
          </div>
        </div>

        {/* Second Page */}
        <div className="w-full space-y-4 md:space-y-0 md:space-x-2 lg:space-x-4 mt-10 md:mt-14 p-4">
          <div className="w-full space-y-3 mb-10">
            <div className="flex space-x-3 w-6 md:w-24">
              <img src="src/assets/G.jpg" alt="" className="ImageFromTo" />
              <img src="src/assets/R.jpg" alt="" className="ImageFromTo" />
              <img src="src/assets/O.jpg" alt="" className="ImageFromTo" />
              <img src="src/assets/W.jpg" alt="" className="ImageFromTo" />
              <img src="src/assets/W.jpg" alt="" className="ImageFromTo" />
              <img src="src/assets/I.jpg" alt="" className="ImageFromTo" />
              <img src="src/assets/T.jpg" alt="" className="ImageFromTo" />
              <img src="src/assets/H.jpg" alt="" className="ImageFromTo" />
            </div>
            <div className="text-xl md:2xl lg:text-4xl font-bold border-t-2 border-t-black border-b-2 border-b-black p-3">
              <h1>KAPOL GLOBAL ACADEMY (IGCSE)</h1>
            </div>
          </div>
          <div className="w-full h-full flex flex-col lg:flex-row items-center space-y-5 md:space-y-0 md:space-x-2 lg:space-x-4">
            <div className="w-full h-1/2 lg:h-full lg:w-1/2 text-3xl ">
              <div className="grid-flow-col space-y-2 md:space-y-4">
                <div className="flex space-x-2 font-bold text-xl md:text-2xl xl:text-4xl">
                  <h1 className="text-blue">OUR CORE</h1>
                  <h1>FEATURES</h1>
                </div>
                <div className="flex space-x-2 text-lg md:text-xl lg:text-2xl">
                  <h2 className="text-pink">SMALL CLASS</h2>
                  <h2>SIZES</h2>
                </div>
                <div className="text-sm md:text-lg">
                  <p>
                    Each class will have a maximum of 20 students, with a
                    dedicated class teacher and an assisting teacher, in
                    addition to subject teachers. This ensures that each child
                    receives individualized care and is encouraged to learn
                    according to his or her unique strengths and learning
                    styles.
                  </p>
                </div>
                <div className="flex space-x-2 text-lg md:text-xl lg:text-2xl">
                  <h2>DEDICATED</h2>
                  <h2 className="text-pink">SCHOOL COUNSELLOR</h2>
                </div>
                <div className="text-sm md:text-lg">
                  <p>
                    We understand it is important to help children with their
                    emotional and social development. Whether it's making
                    friends, dealing with feelings, or facing tough times, the
                    school counselor is here to make sure every child does well
                    and is happy in school.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 lg:h-full lg:w-1/2">
              <div className="w-full h-full grid grid-cols-2 grid-rows-2 space-y-2 overflow-hidden bg-black">
                <div className="space-x-2 col-span-2 row-span-1 flex">
                  <img className="w-1/2 h-auto" src="src/assets/cr-2.jpg" />
                  <img className="w-1/2" src="src/assets/KGA-2.jpg" />
                </div>
                <div className="space-x-2 col-span-2 row-span-1 flex">
                  <img className="w-1/2" src="src/assets/Library.jpg" />
                  <img className="w-1/2" src="src/assets/KGA-1.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thrid Page */}
        <div className="mt-10">
          <div className="w-full h-full flex flex-col lg:flex-row-reverse items-center p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-2 lg:space-x-4">
            <div className="w-full h-1/2 lg:h-full lg:w-1/2 text-3xl">
              <div className="grid-flow-col space-y-2 md:space-y-4 md:p-6">
                <div className="space-x-2 font-bold text-xl md:text-2xl xl:text-4xl">
                  <h1>UNLOCK THE POWER OF A</h1>
                  <h1 className="text-blue">GLOBAL CURRICULUM</h1>
                </div>
                <div className="flex space-x-2 text-lg md:text-xl lg:text-2xl">
                  <h2 className="text-pink font-bold">Tranform your child’s learning journey!</h2>
                </div>
                <div className="text-sm md:text-lg">
                  <p>
                    Our learning spaces are designed to bring the best of the IGCSE curriculum
                    to your child. We emphasize on hands-on activities, creativity, and problem solving skills as essential parts of everyday lessons. Basic academic concepts
                    are introduced through storytelling, painting, crafts, dance, music, and
                    sports, helping children understand each concept - not memorize it.
                    Our approach goes beyond traditional education. It prepares students for
                    the challenges and opportunities of tomorrow, while nurturing them to
                    become compassionate leaders in our interconnected world.
                  </p>
                </div>
                <div className="flex space-x-2 text-lg md:text-xl lg:text-2xl">
                  <h2 className="text-blue font-bold">HOLISTIC</h2>
                  <h2>GROWTH</h2>
                </div>
                <div className="text-sm md:text-lg">
                  <p>
                    At Kapol Global Academy (IGCSE), we understand every child is unique.
                    Whether your child aspires to be a scientist, artist, or entrepreneur, our
                    diverse range of subjects and innovative learning processes will guide him
                    or her to achieve and excel. Not just that, our aim is also to nurture virtues
                    such as integrity, responsibility, and empathy in our students and through
                    values-based learning, we equip them for success in academics and in all
                    aspects of life.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-1/2 lg:h-full lg:w-1/2">
              <img className="flex w-full object-fill" src="src/assets/KGA-1.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
