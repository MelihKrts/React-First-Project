export default function Slide() {
  return (
    <section className="w-full  relative">
      <div className="w-full bg-[url('../assets/images/slide-one.jpg')] bg-cover bg-bottom bg-fixed h-[500px]">
        <div className="container mx-auto">
          <div className="w-full flex flex-col justify-center items-center mx-auto relative">
            <div className="translate-y-1/2 absolute top-1/2 pt-16">
          <h1 className="text-4xl lg:text-5xl md:text-3xl font-bold text-center text-white">
              Happy homes, happy people and lives
            </h1>
            <p className="my-4 opacity-80 text-white md:text-sm lg:text-base text-center">
              Proin non rhoncus dolor. Nunc bibendum tempus dolor. Praesent
              vulputate.
            </p>
            <button className="px-8 py-2 bg-button text-white text-center rounded-md left-[35%] lg:left-[40%] relative">Contact Us</button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
