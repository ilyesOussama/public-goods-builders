import Image from "next/image";

export const Hero = () => {
  return (
    <section className="mt-4 md:mt-8 lg:mt-12 grid md:grid-cols-2 gap-4 mx-auto max-w-7xl px-4 xl:px-0">
      <div className="md:pt-20 lg:pt-36">
        <div className="">
          <h1 className="text-5xl lg:text-6xl font-bold">
            Public Goods Builders
          </h1>
          <p className="text-3xl font-medium text-gray-400">
            Impact oriented developers.
          </p>
        </div>
        <div className="mt-8 flex flex-row gap-2">
          <button className="bg-green-300 py-2 px-4 md:py-3 lg:px-6 text-lg lg:text-xl font-bold rounded-lg text-black">
            Projects
          </button>
          <button className="py-2 px-4 lg:py-3 lg:px-6 text-lg lg:text-xl font-bold border border-green-300 rounded-md">
            Learn more
          </button>
        </div>
      </div>
      <div>
        <Image alt="Public Goods Builders" src="/hero.png" width={600} height={450}/>
      </div>
    </section>
  );
};
