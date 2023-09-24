export default function Slide() {
  return (
    <section className="w-full bg-[url('../assets/images/slide-one.jpg')] h-[65vh] bg-cover bg-bottom bg-fixed">
      <div className="container mx-auto ">
        <div className="w-full flex justify-center items-center">

          <div className="absolute lg:top-1/2 left-1/2 text-center w-full  -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-center text-white">
              Happy homes, happy people and lives
            </h1>
            <p className="my-4 opacity-80 text-white">
              Proin non rhoncus dolor. Nunc bibendum tempus dolor. Praesent
              vulputate.
            </p>

            <button className="px-8 py-2 bg-button text-white text-center rounded-md">Contact Us</button>

          </div>
        </div>
      </div>
    </section>
  );
}
