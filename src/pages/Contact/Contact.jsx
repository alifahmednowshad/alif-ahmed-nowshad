import { useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred, please try again.");
        }
      );
  };

  return (
    <div className="bg-[#050709] py-10 sm:py-20">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="p-10 bg-[#140C1C]">
          <h2 className="title">Let{"’"}s work together!</h2>
          <p className="my-5 text-white leading-relaxed">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form grid gap-3 rounded"
          >
            <label className=" input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="full_name"
                className="grow"
                placeholder="Full name"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Email address"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                name="phone"
                className="grow"
                placeholder="Phone number"
              />
            </label>
            <label className="input input-bordered  flex items-center gap-2">
              <input
                type="text"
                name="subject"
                className="grow"
                placeholder="Subject"
                required
              />
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered w-full  h-40"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="my-btn-primary mt-5 ">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-5 p-3">
          <div className="flex flex-col sm:flex-row gap-5 sm:items-center text-white">
            <div className="icon">
              <FiMail size={30} />
            </div>
            <div>
              <h6 className="text-md sm:text-lg font-normal">Email</h6>
              <p className="text-lg sm:text-xl font-semi-bold">
                alifahmednowshad@gmail.com
              </p>
              <p className="text-lg sm:text-xl font-semi-bold">
                muhammadnowshad2020@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 sm:items-center text-white">
            <div className="icon">
              <IoLocationOutline size={30} />
            </div>
            <div>
              <h6 className="text-md sm:text-lg font-normal">Location</h6>
              <p className="text-lg sm:text-xl font-semi-bold">
                Kushtia, Khulna, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
