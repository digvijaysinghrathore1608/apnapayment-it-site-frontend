"use client";

import { useState } from "react";
import { AtSign, Phone, Building2, Users, Briefcase, CheckCircle } from "lucide-react";
import { contact_details } from "@/data/business";



export default function ContactTabsSEOEnhanced() {
    const [activeTab, setActiveTab] = useState("consultation");

    return (
        <section className="mt-10" aria-labelledby="contact-section">
            <div className="mx-auto max-w-5xl">
                {/* === Tabs === */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {contact_details.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium transition-colors
                ${activeTab === tab.id
                                    ? "bg-blue-600 text-white shadow"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }
              `}
                            aria-controls={tab.id}
                        >
                            {tab.icon}
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* === Content (ALL rendered for SEO) === */}
                <div className="space-y-14">

                    {contact_details.map(tab => (
                        <article
                            key={tab.id}
                            id={tab.id}
                            className={activeTab === tab.id ? "block" : "hidden"}
                        >
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

                                <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                                    {tab.title}
                                </h3>

                                <p className="text-slate-600 mb-6 max-w-3xl">
                                    {tab.description}
                                </p>

                                {/* Points */}
                                <ul className="mb-8 space-y-2">
                                    {tab.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-600">
                                            <CheckCircle size={16} className="text-green-500" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Contact Info */}
                                <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                                    <a
                                        href={`mailto:${tab.email}`}
                                        className="flex items-center gap-3 rounded-lg border p-4 hover:bg-gray-50"
                                    >
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                                            <AtSign size={18} />
                                        </span>
                                        <span className="font-medium text-blue-600">
                                            {tab.email}
                                        </span>
                                    </a>

                                    <a
                                        href={`tel:${tab.phone}`}
                                        className="flex items-center gap-3 rounded-lg border p-4 hover:bg-gray-50"
                                    >
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                                            <Phone size={18} />
                                        </span>
                                        <span className="font-medium text-blue-600">
                                            {tab.phone}
                                        </span>
                                    </a>
                                </div>

                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}
