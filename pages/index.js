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
            <h1 className="sm:text-4xl text-2xl font-Lobster title-font  mb-2 text-gray-900">
              Chesswear.com
            </h1>
            <p className="lg:w-1/2  w-full leading-relaxed font-Dancing text-gray-700">
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
                <h1 className="sm:text-5xl text-2xl font-bold font-Dancing text-blue-800 title-font lg:w-1/4 lg:mb-0 mb-4">
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

          <div className="flex flex-wrap -m-4 mb-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 text-center rounded-lg hover:bg-slate-100 hover:border-indigo-800 hover:cursor-pointer ">
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
                <h2 className="text-lg text-gray-900 font-medium font-Rubik title-font mb-2">
                  Premium Tshirts
                </h2>
                <p className="leading-relaxed text-base">
                  Our T-Shirts are 100% made of premium cotton fabric and are easy to wash.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 text-center rounded-lg hover:bg-slate-100 hover:border-indigo-800 hover:cursor-pointer">
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
                <h2 className="text-lg text-gray-900 font-medium font-Rubik title-font mb-2">
                  Free Shipping
                </h2>
                <p className="leading-relaxed text-base">
                  Either delivering the order or picking up the returns all over India, we charge zero cost.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 text-center rounded-lg hover:bg-slate-100 hover:border-indigo-800 hover:cursor-pointer">
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
                <h2 className="text-lg text-gray-900 font-medium font-Rubik title-font mb-2">
                  Amazing Offers
                </h2>
                <p className="leading-relaxed text-base">
                  We provide instant cashbacks,amazing gift vouchers and discount on our products.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
}
