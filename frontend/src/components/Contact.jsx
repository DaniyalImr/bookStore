import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the form from refreshing the page
        console.log('Form Submitted!');
    };

    return (
        <div className="bg-blue-100 py-10 px-5 rounded-lg max-w-lg mx-auto shadow-lg">
            <h1 className="text-4xl text-blue-600 text-center font-bold mb-8">Contact Us</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-blue-600 font-medium mb-2">Name</label>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-blue-600 font-medium mb-2">Email</label>
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-blue-600 font-medium mb-2">Message</label>
                    <textarea 
                        placeholder="Your Message" 
                        className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] resize-none"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
            <Link to='/'>
                <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
                    Back
                </button>
            </Link>
        </div>
    );
};

export default Contact;
