import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
          publicKey: "YOUR_PUBLIC_KEY",
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
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-center font-bold text-2xl">Contact Us</h1>
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
  );
};
