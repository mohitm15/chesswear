import React , {useState} from "react";

const About = () => {
  const [paravisible, setParavisible] = useState(false);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-32 overflow-hidden">
              <img
                alt="content"
                className="object-contain h-full w-full"
                src="logo.png"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center  text-gray-400">
                  <img
                    alt="content"
                    className="object-contain h-20 w-20"
                    src="chesswearcircle.png"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Welcome All !
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Wear the exclusive chess Tshirts and hoodies
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left selection:bg-blue-300 selection:text-indigo-700 selection:font-extralight first-letter:text-7xl first-letter:font-semibold first-letter:text-blue-600
  first-letter:mr-3 first-letter:float-left font-Rubik">
                <p className="leading-relaxed text-lg mb-4">
                  This website is an attempt to deliver amazing products at a
                  good and reasonable price. This entire website was built on a
                  NextJs framework. This website is powerd by NextJs + React +
                  MongoDB for storing the data. For the server side logic, we
                  use NextJs built in SSR and for styling, we used TailwindCSS.
                  If you are curious enough to find how this website was build,
                  checkout the github repo <span className="font-semibold">mohitm15/chesswear</span> and if you are
                  not, buy yourself a trendy chess Tshirt from ChessWear ;) !
                </p>
                <div className={` ${paravisible ? 'hidden':'block'}`}>
                  <a className="text-indigo-500 inline-flex items-center" onClick={()=>setParavisible(!paravisible)}>
                    See More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <p className={`leading-relaxed text-lg mb-4 ${paravisible ? 'block':'hidden'} `}>
                  Codeswear.com is an attempt to serve the people of india with
                  unique designs on apparels. E-commerce is revolutionizing the
                  way we all shop in India. Why do you want to hop from one
                  store to another in search of your favorite chess hoodie when
                  you can find it on the Internet in a single click? Not only
                  hoodies, we also have a wide variety of chessboards, mugs and
                  other apparels! If you are wondering why you should shop from
                  Chesswear when there are multiple options available to you,
                  our unique designs and quality products will answer your
                  question.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
