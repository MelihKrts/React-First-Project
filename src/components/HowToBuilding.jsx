import image from "../assets/images/div-image.jpg"
export default function HowTo() {
  return (
    <section className="w-full mb-8" id="howTo">
      <h1 className="text-center text-4xl font-semibold py-4">How To Building LLC</h1>
      <div className="container mx-auto my-4">

        <div className="w-full flex flex-col lg:flex-row items-center" >
            <div className="w-full lg:w-1/3 px-4">
                <img src={image} className="rounded-lg"  />
            </div>
            <div className="lg:w-2/3 w-full px-4 ">
                <h5 className="text-base  font-bold ml-2 mt-2  pt-2">How to Building LLC</h5>
                <div className="relative mt-2">
                    <div className="absolute w-[155px] h-[2px] bg-black bottom-0 left-[9px] content-['']">

                    </div>
                </div>

                <h1 className="lg:text-5xl text-4xl font-bold ml-1 mt-2 pt-4">38 Years Experiences</h1>

                <p className="text-justify my-4  px-2">Nunc pretium nisl nec nisi viverra, accumsan mattis tellus congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac.</p>

                <p className="text-justify my-4  px-2">Nullam dapibus placerat elit id consectetur. Praesent vestibulum porttitor suscipit. Curabitur in justo ex. In pellentesque nisl sed odio dapibus, nec vestibulum tellus molestie. Nam commodo eros urna, sed finibus.</p>

            </div>
        </div>

      </div>
    </section>
  );
}
