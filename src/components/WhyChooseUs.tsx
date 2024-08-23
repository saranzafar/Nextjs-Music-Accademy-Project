"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
    {
        title: "Personalized Lessons",
        description:
            "Our music academy offers personalized lessons tailored to each student's unique needs and goals. Whether you're a beginner or an advanced musician, our expert instructors will guide you through a curriculum designed just for you. Learn at your own pace and achieve your musical dreams.",
    },
    {
        title: "Expert Instructors",
        description:
            "Learn from the best in the industry. Our instructors are seasoned professionals with years of experience in teaching and performing. They are dedicated to helping you master your instrument and excel in your musical journey.",
    },
    {
        title: "State-of-the-Art Facilities",
        description:
            "Our music academy is equipped with state-of-the-art facilities, providing an ideal learning environment. From well-equipped practice rooms to high-quality instruments, we ensure that you have everything you need to succeed.",
    },
    {
        title: "Performance Opportunities",
        description:
            "Gain real-world experience with our regular performance opportunities. We offer students the chance to showcase their talents in front of an audience, helping them build confidence and stage presence.",
    },
];


function WhyChooseUs() {
    return (
        <div className="w-full">
            <StickyScroll content={musicSchoolContent} />
        </div>
    )
}

export default WhyChooseUs