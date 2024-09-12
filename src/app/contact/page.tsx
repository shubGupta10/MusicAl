import React from 'react';
import { Meteors } from '@/components/ui/meteors';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12  relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Meteors number={150} />
      </div>

      <div className="relative z-10 min-h-screen max-w-4xl mx-auto pt-32 pb-16 px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <p className="text-center text-lg text-gray-400 mb-12">
          Have any questions or want to work with us? Feel free to reach out!
        </p>

        <form className="bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-4 bg-gray-900 text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500"
              placeholder="Enter your Email"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-4 bg-gray-900 text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500"
              placeholder="Enter your message"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-white hover:bg-emerald-600 text-black font-semibold rounded-lg focus:outline-none focus:ring focus:ring-emerald-400 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
