import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import swishLogo from "../../assets/swish_logo.jpg";
import PlusGirotLogo from "../../assets/PlusGirotLogo.gif";
import medgivandeblankett from "../../assets/MEDGIVANDE BLANKETT.pdf";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_m2l86ok", "template_zrb1qe2", form.current, {
          publicKey: "nyR_ZXz1_cp7K4fKX",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            Swal.fire("Success!", "Email sent successfully.", "success");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            Swal.fire("Error!", "An unexpected error occurred.", "error");
            form.current?.reset();
          }
        );
    }
  };

  return (
    <div className=" container mx-auto grid md:grid-cols-2 my-5 gap-10">
      <div className="container mx-auto ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" mt-16 p-4 md:h-[31rem] bg-white rounded-lg shadow-md"
        >
          <h1 className="text-center font-bold mt-5 text-3xl">Join Us</h1>
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              id="user_phone"
              name="user_phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>

          <button
            type="submit"
            className="bg-teal-800 text-white py-2 px-4 w-full font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:shadow-outline-teal active:bg-teal-800"
          >
            Send
          </button>
        </form>
      </div>
      <div className="container  mx-auto  ">
        <div className=" mt-16 p-4 bg-white  md:h-[31rem] rounded-lg shadow-md ">
          <h2 className="font-bold text-3xl text-center mt-5 mb-6">
            Donate Us
          </h2>
          <div className="flex justify-center  flex-col gap-20">
            <div className="flex justify-center items-center rounded-lg p-4">
              <img className=" w-[7rem]" src={swishLogo} alt="Swish Logo" />
              <p className="text-center  bg-[#ffaa36] px-2 py-1 rounded-xl font-bold ">
                1233971272
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-[7rem]"
                src={PlusGirotLogo}
                alt="Plusgrio Logo"
              />
              <p className="text-center bg-[#ffaa36] px-2 py-1 rounded-xl font-bold">
                454543-0
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center ">
              <button>
                <a
                  href={medgivandeblankett}
                  download="medgivande_blankett.pdf"
                  className="bg-teal-800 text-white py-2 px-4 w-full font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:shadow-outline-teal active:bg-teal-800"
                >
                  Kyrkoavgift form | Download PDF
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
