import React from "react";

const Plateforms = () => {
  const plateforms = [
    "amazonfiretv",
    "android",
    "appletv",
    "ios",
    "lg",
    "playstation",
    "samsung",
    "xbox",
  ];

  return (
    <section className="min-h-[60vh] mt-10 bg-gray-700 pb-10">
      <h3 className="text-white font-semibold text-2xl text-center pt-8">
        Take Movex everywhere
      </h3>
      <p className="text-gray-100 text-center pt-3">
        Use for free anytime, anywhere, on almost any device
      </p>
      <ul className="flex flex-wrap  my-10    lg:px-52 xl:px-96 justify-center ">
        {plateforms.map((plateform, i) => (
          <li key={i} className='px-5 py-2'>
            <img src={`/platform/${plateform}.svg` }className=" h-20 p-2 bg-red-40 opacity-[0.5] hover:opacity-100" />
          </li>
        ))}
      </ul>

   
    </section>
  );
};

export default Plateforms;
