"use client";

import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Just a Dummy form!!💥");
    };

    return (
        <div className="h-[50rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    Contact us
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
                </p>
                <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-neutral-400 font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 bg-neutral-800 border border-neutral-600 rounded-md text-neutral-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-neutral-400 font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 bg-neutral-800 border border-neutral-600 rounded-md text-neutral-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-neutral-400 font-semibold">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 bg-neutral-800 border border-neutral-600 rounded-md text-neutral-300 h-32"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-md hover:from-indigo-500 hover:to-purple-500 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <BackgroundBeams />
        </div>
    );
}
