import { useRef } from "react";

export default function ContactForm() {

    const nameRef = useRef();
    const phoneNumberRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
  
   
  const HandleSubmit = (e) => {
    e.preventDefault();

    const nameValue = nameRef.current.value;
    const phoneNumberValue = phoneNumberRef.current.value;
    const emailValue = emailRef.current.value;
    const messageValue = messageRef.current.value;

    const nameRegex = /^[A-Za-z\s]+$/; 
    const phoneNumberRegex = /^\d{10}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!nameRegex.test(nameValue)) {
      alert('Please enter a valid name');
      return;
    }

    if (!phoneNumberRegex.test(phoneNumberValue)) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (!emailRegex.test(emailValue)) {
      alert('Please ennter a valid e-mail address.');
      return;
    }

    nameRef.current.value = '';
    phoneNumberRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';

  };

  return (
    <section className="w-full bg-[url('../assets/images/hero-contact-us.jpg')] bg-cover bg-fixed text-white" id="contact-us">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-semibold py-4">Contact Us</h1>

        <form
          onSubmit={HandleSubmit}
          className="flex flex-col text-black items-center"
        >
          <div className="w-full lg:w-1/2  flex flex-wrap flex-col  my-4">
            <label className="text-left m-auto w-2/3 py-3 text-white">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter a Name"
              className="p-2 w-2/3 mx-auto border rounded-md form-control"
              required
              ref={nameRef}
            />
          </div>

          <div className="w-full lg:w-1/2 justfiy-center flex flex-wrap flex-col items-center my-4">
            <label className="text-left m-auto w-2/3 py-3 text-white">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter a Phone Number"
              className="p-2 w-2/3 mx-auto border rounded-md form-control"
              required
              ref={phoneNumberRef}
              maxLength={10}
            />
          </div>

          <div className="w-full lg:w-1/2 justfiy-center flex flex-wrap flex-col items-center my-4">
            <label className="text-left m-auto w-2/3 py-3 text-white">
              E-mail Address
            </label>

            <input
              type="email"
              placeholder="Enter a e-mail address"
              className="p-2 w-2/3 mx-auto border rounded-md form-control"
              required
              ref={emailRef}
            />
          </div>

          <div className="w-full lg:w-1/2 justfiy-center flex flex-wrap flex-col items-center my-4">
            <label className="text-left m-auto w-2/3 py-3 text-white">
              Your Message
            </label>

            <textarea
              placeholder="Enter your message"
              className="w-2/3 resize-none text-black rounded-md form-control"
              rows="6"
              cols={20}
              required
              ref={messageRef}
            ></textarea>
          </div>

          <button
            type="submit"
            className="p-2 w-1/3 lg:w-1/12 submit-btn text-white rounded-lg my-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
