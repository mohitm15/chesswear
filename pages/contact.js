import React from "react";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <h2 className="text-3xl xl:text-5xl text-black text-center pt-4 xl:pt-8 font-Lobster tracking-wide">
          Lets talk about everything!
        </h2>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              style={{
                width: "100%",
                height: "100%",
                title: "map",
                frameBorder: 0,
                marginHeight: 0,
                marginWidth: 0,
                scrolling: "no",
              }}
              className="absolute inset-0 opacity-20 grayscale contrast-125 "
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  CORPORATE ADDRESS
                </h2>
                <p className="mt-1">
                  Chesswear Group Private Limited , J-32, Sector-63, Noida, Uttar Pradesh, 201301
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  care@chesswear.in
                </a>
                <br />
                <a className="text-indigo-500 leading-relaxed">
                  support@chesswear.in
                </a>  
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  CALL / WHATSAPP
                </h2>
                <p className="leading-relaxed">+91-123 123 1234</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <img
              alt="gallery"
              className="w-24 object-cover h-24  object-center block hover:opacity-50 transform transition-opacity duration-500 mb-6 "
              src="chesswearcircle.png"
            />
            <h2 className="text-gray-900 text-lg lg:text-3xl mb-1 font-medium title-font">
              Feel free to ask us anything!
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              If you have any questions regarding your order, feel free to send
              email, call or Whatsapp us on our support number
            </p>

            <p className="text-xs text-gray-500 mt-3">
              Please Go through the FAQ page also before you ask for any query.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
