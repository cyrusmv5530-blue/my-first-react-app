import { useState } from "react";

export default function ContactUs({ contactOpen, setContactOpen }) {
  if (!contactOpen) return null;

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center bg-black/50"
      onClick={() => setContactOpen(false)}   // click outside closes
    >
      <div
        className="relative bg-white dark:bg-gray-900 w-full max-w-3xl rounded-lg shadow-lg p-6"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={() => setContactOpen(false)}
          className="absolute top-4 right-4 text-text rounded-base hover:bg-black/15"
        >
          ✕
        </button>

        <h2 className="mb-4 text-4xl font-extrabold text-center">
          Contact Us
        </h2>

        <p className="mb-8 text-center text-gray-500">
          Got a technical issue? Let us know.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 border rounded"
          />

          <textarea
            rows="6"
            placeholder="Message"
            className="w-full p-2 border rounded"
          />

          <button className="px-5 py-3 bg-accent text-text rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}