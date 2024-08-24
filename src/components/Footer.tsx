
function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8">

                {/* About Section */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About</h2>
                    <p className="text-gray-400">
                        Our music academy is dedicated to nurturing the musical talents of students of all ages and skill levels.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#contact" className="hover:text-white">About Us</a></li>
                        <li><a href="#courses" className="hover:text-white">Courses</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <ul className="space-y-2">
                        <li><a href="https://saranzafar.github.io/" className="hover:text-white">Instagram</a></li>
                        <li><a href="https://saranzafar.github.io/" className="hover:text-white">GitHub</a></li>
                        <li><a href="https://saranzafar.github.io/" className="hover:text-white">LinkedIn</a></li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-400">
                        Kashmir, Pakistan<br />
                        Phone: (92) 311-9777995<br />
                        Email: saran.development@gmail.com
                    </p>
                </div>
            </div>
            <div className="text-center text-gray-600 mt-8">
                &copy; {new Date().getFullYear()} Music Academy. All rights reserved.
            </div>
        </footer>
    );

}

export default Footer