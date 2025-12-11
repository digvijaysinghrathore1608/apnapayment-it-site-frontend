"use client";

import { Button } from "@/components/ui/stateful-button";

export default function ContactForm() {
    const handleClick = () => {
        return new Promise((resolve) => {
            setTimeout(resolve, 4000);
        });
    };
    return (
        <>
            <form className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-8 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">Send us a Message</h3>

                <div>
                    <label className="block text-gray-300 mb-1">Your Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label className="block text-gray-300 mb-1">Email Address</label>
                    <input
                        type="email"
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="example@mail.com"
                    />
                </div>

                <div>
                    <label className="block text-gray-300 mb-1">Phone Number</label>
                    <input
                        type="text"
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="+91 9876543210"
                    />
                </div>

                <div>
                    <label className="block text-gray-300 mb-1">Message</label>
                    <textarea
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                        rows={4}
                        placeholder="Write your message here..."
                    ></textarea>
                </div>

                <Button className="bg-blue-500 hover:ring-blue-500" onClick={handleClick}>Send message</Button>
            </form>
        </>
    )
}