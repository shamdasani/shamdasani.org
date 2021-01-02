import React, { useState } from "react";

const Newsletter = () => {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <main>
      <div className="max-w-2xl">
        <div className="font-sans mx-auto py-1">
        <p className="font-bold tracking-wide uppercase text-gray-700 mt-2">Newsletter</p>

          <div className="sm:flex">
            <div className="sm:w-1/3 mr-6">
              <label className="block text-base mb-2 mt-4 text-gray-700">
                First name
              </label>
              <input
                name="first"
                type="text"
                required
                className="ios shadow w-full outline-none appearance-none px-2 py-3 border-none text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs mr-2"
                placeholder="Samay"
                onChange={handleInputChange}
                value={form.first}
              />
            </div>
            <div className="sm:w-1/3 mr-6">
              <label className="block text-base mb-2 mt-4 text-gray-700">
                Last name
              </label>
              <input
                name="last"
                type="text"
                required
                className="ios w-full shadow outline-none appearance-none px-2 py-3 border-none text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs mr-2"
                placeholder="Shamdasani"
                onChange={handleInputChange}
                value={form.last}
              />
            </div>
            <div className="sm:w-1/3 mr-6">
              <label className="block text-base mb-2 mt-4 text-gray-700">
                Email
              </label>
              <input
                name="email"
                aria-label="Email address"
                type="email"
                required
                className="ios w-full shadow outline-none appearance-none px-2 py-3 border-none text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
                placeholder="samay@shamdasani.org"
                onChange={handleInputChange}
                value={form.email}
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              className={`w-48 rounded shadow flex items-center justify-center py-3 px-2 border border-transparent text-base leading-6 font-medium rounded-md text-white ${
                submitted ? `bg-green-500` : `bg-blue-500 hover:bg-blue-400`
              }  focus:outline-none focus:shadow-outline transition duration-150 ease-in-out cursor-pointer`}
              onClick={() => {
                setSubmitted(true);
                const data = new FormData();
                for (const [key, value] of Object.entries(form)) {
                  data.append(key, value);
                }

                fetch(
                  "https://script.google.com/macros/s/AKfycbz8nQ6sofKTSkh47k-jUzvQHLQs30j-AvxChyLCpETv2uPkgd4W/exec",
                  { method: "POST", body: data }
                ).then(() => {
                  setForm({
                    first: "",
                    last: "",
                    email: ""
                  });
                });
              }}
            >
              {submitted ? "Subscribed :)" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Newsletter;
