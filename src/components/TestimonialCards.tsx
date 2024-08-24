"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
        quote:
            "The instructors at this academy are truly outstanding. Their passion for music and dedication to teaching have transformed my playing. I've grown so much as a musician since I started taking lessons here.",
        name: "Emily Johnson",
        title: "Piano Student",
    },
    {
        quote:
            "Joining this music academy was one of the best decisions I've ever made. The personalized approach to lessons and the supportive environment have made learning guitar a joyful and rewarding experience.",
        name: "Michael Smith",
        title: "Guitar Student",
    },
    {
        quote:
            "The performance opportunities offered by this academy have given me the confidence to play in front of an audience. It's an amazing feeling to see my hard work pay off on stage.",
        name: "Sophia Lee",
        title: "Vocal Student",
    },
    {
        quote:
            "This music academy has exceeded all my expectations. The facilities are top-notch, and the instructors are incredibly knowledgeable. I've learned more here in a few months than I did in years of self-study.",
        name: "David Brown",
        title: "Violin Student",
    },
    {
        quote:
            "I can't recommend this music academy enough. The supportive community and expert guidance have reignited my passion for music. Every lesson leaves me inspired and excited to learn more.",
        name: "Olivia Martinez",
        title: "Drum Student",
    },
];

function TestimonialCards() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-white text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default TestimonialCards