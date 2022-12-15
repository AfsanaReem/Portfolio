import React from 'react';
import { AcademicCapIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";
const Testimonials = () => {
    return (
        <div>
            <section id="education">
                <div className="container px-5 py-10 mx-auto text-center">
                    <AcademicCapIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                        My Education
                    </h1>
                    <div className="flex flex-wrap m-4">
                        {testimonials.map((testimonial) => (
                            <div className="w-full md:w-1/2 p-2">
                                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                    <div className="inline-flex items-center">
                                        <img
                                            alt="testimonial"
                                            src={testimonial.image}
                                            className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                        />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-lg text-white">
                                                {testimonial.name}
                                            </span>
                                            <span className="text-gray-500 text-sm uppercase">
                                                {testimonial.company}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {testimonial.grade}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                Passing Year: {testimonial.year}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;