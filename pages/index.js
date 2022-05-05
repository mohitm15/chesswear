import Head from "next/head";




export default function Home() {
//MONGO_URI=mongodb://localhost:27017/chesswear
//MONGO_URI=mongodb+srv://mohit_maroliya:password@cluster0.ttieq.mongodb.net/chesswear?retryWrites=true&w=majority
//MONGO_URI=mongodb+srv://mohit_maroliya:password@cluster0.ttieq.mongodb.net/chesswear

  return (
    <div>
      <Head>
        <title>ChessWear.com </title>
        <meta name="description" content="ChessWear.com - Wear the Chess" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap ml-4 sm:ml-1  mb-2 flex-col items-center text-center py-4 border-[1px] bg-gradient-to-b from-slate-200 to-blue-200 z-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              CHESSWEAR.COM
            </h1>
            <p className="lg:w-1/2  w-full leading-relaxed text-gray-500">
              Wear with Chess
            </p>
          </div>
          {/* carousel */}
          <div className="text-gray-600 py-4 body-font">
            <div className="container px-5 py-3 mx-auto flex flex-wrap">

              <div className="flex flex-wrap md:-m-2 -m-1 pb-12">
                <div className="flex flex-wrap w-1/2">
                  <div className=" w-1/2 p-1 md:p-2">
                    <div className="bg-black">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block hover:opacity-50 transform transition-opacity duration-500"
                      src="img_1.jpg"
                    />
                    </div>
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                  <div className="bg-black">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block hover:opacity-50 transform transition-opacity duration-500 "
                      src="img_4.jpg"
                    />
                    </div>
                  </div>
                  <div className="md:p-2 p-1 w-full">
                  <div className="bg-black">
                    <img
                      alt="gallery3"
                      className="w-full object-cover h-full object-center block hover:opacity-50 transform transition-opacity duration-500 "
                      src="img_3.jpg"
                    />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="md:p-2 p-1 w-full">
                  <div className="bg-black">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block hover:opacity-50 transform transition-opacity duration-500 "
                      src="img_2.jpg"
                    />
                    </div>
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                  <div className="bg-black">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block hover:opacity-50 transform transition-opacity duration-500 "
                      src="img_5.jpg"
                    />
                    </div>
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                  <div className="bg-black">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block hover:opacity-50 transform transition-opacity duration-500 "
                      src="img_6.jpg"
                    />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full mb-20 flex-wrap items-center">
                <h1 className="sm:text-5xl text-2xl font-bold text-blue-800 title-font lg:w-1/4 lg:mb-0 mb-4">
                  Grab the chess wardrobe
                </h1>
                <p className="lg:pl-6 lg:w-2/3  mx-auto leading-relaxed text-base md:text-xl">
                  Wear with finest chess Tshirts, Hoodies, Chessboards and
                  Chessmugs and grab all the best chess accessories for free.
                  Wear with finest chess Tshirts, Hoodies, Chessboards and
                  Chessmugs and grab all the best chess accessories for free.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Neptune
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Melanchole
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Bunker
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Ramona Falls
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
