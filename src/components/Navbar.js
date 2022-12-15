import React from 'react';
import { DownloadIcon, MailIcon } from '@heroicons/react/solid';

const Navbar = () => {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Afsana Rahman
                    </a>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="#projects" className="mr-5 hover:text-white">
                        Projects
                    </a>
                    <a href="#education" className="mr-5 hover:text-white">
                        Education
                    </a>
                    <a href="https://github.com/AfsanaReem" className="mr-5 hover:text-white">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/afsana-rahman-8a813597/" className="mr-5 hover:text-white">
                        LinkedIn
                    </a>

                </nav>
                <a
                    href="#contact"
                    className="bg-primary inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white">
                    Contact Me
                    <MailIcon className="w-4 h-4 ml-1" />
                </a>
                <span className='ml-1'></span>
                <a
                    href="Resume Of Afsana Rahman.pdf" download='Resume Of Afsana Rahman.pdf'
                    className="bg-secondary inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 animate-pulse text-white">
                    Resume
                    <DownloadIcon className="w-4 h-4 ml-1" />

                </a>
            </div>
        </header>
    );
};

export default Navbar;