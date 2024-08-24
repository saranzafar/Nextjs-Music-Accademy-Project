"use client"

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebnars() {
    const featuredWebinars = [
        {
            title: "Virtual Recital Platform",
            description:
                "Developed a virtual platform for students to perform recitals online, allowing them to showcase their progress to friends and family, no matter where they are in the world.",
            link: "/courses",
        },
        {
            title: "Music Theory Interactive App",
            description:
                "Created an interactive app that helps students learn music theory through engaging lessons and quizzes, enhancing their understanding of musical concepts.",
            link: "/courses",
        },
        {
            title: "Instrument Lending Program",
            description:
                "Launched a program that provides students with high-quality instruments for practice, ensuring they have the tools needed to excel in their musical studies.",
            link: "/courses",
        },
        {
            title: "Summer Music Camp",
            description:
                "Organized a summer camp focused on intensive musical training, offering workshops, masterclasses, and performance opportunities for young musicians.",
            link: "/courses",
        },
        {
            title: "Collaborative Music Project",
            description:
                "Led a collaborative project where students composed and recorded original music together, fostering teamwork and creativity.",
            link: "/courses",
        },
        {
            title: "Community Outreach Concerts",
            description:
                "Coordinated a series of concerts where students perform for local communities, bringing music to those who might not have access to live performances.",
            link: "/courses",
        },
    ];

    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhence Your Musical Journey</p>
                </div>
                <div className="mt-10">
                    <HoverEffect items={featuredWebinars} />
                </div>
                <div className="text-center mt-10">
                    <Link href={"courses"} className="px-4 py-4 rounded-xl transition duration-200 bg-black text-white">
                        View all courses
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebnars