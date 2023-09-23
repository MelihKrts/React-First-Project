import { blogInfo } from "../data/blogText";

export default function Blog() {
  return (
    <section className="w-full mb-8" id="blog">
      <h1 className="text-4xl text-center py-4 font-semibold">Blogs</h1>
      <div className="container mx-auto flex lg:flex-row flex-col">
        {blogInfo.map((blog) => (
          <div key={blog.id} className="lg:w-1/3 w-11/12 lg:mx-4 lg:px-0  mx-auto rounded-lg mt-2 my-6 " style={{boxShadow: "rgba(0, 0, 0, 0.4) 1px -1px 11px 0px"}}>
            <div className="w-full">
              <img
                src={blog.image} 
                alt={blog.title}
                title={blog.title}
                className=" h-[200px] object-cover w-full rounded"
              />
              <h1 className="font-bold text-xl mt-3 ml-2">{blog.title}</h1>
            </div>

            <div className="w-full mb-4">
              <p className="my-2 ml-2">{blog.content}</p>
            </div>

            <div className="w-full mb-4 ml-2">
              <div className="w-full flex flex-row items-center">

                <div className="w-1/12">
                  <img src={blog.aImg} alt={blog.author} title={blog.author} className="rounded-full" />
                </div>

              <div className="w-full flex flex-col justify-center">
                <span className="ml-2 align-middle font-bold">{blog.author}</span>
                <span className="ml-2 align-middle">{blog.time}</span>
              </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
