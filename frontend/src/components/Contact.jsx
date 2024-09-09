import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the form from refreshing the page
        console.log('Form Submitted!');
    };

    return (
        <div className="bg-pink-100 py-10 px-5 rounded-lg max-w-lg mx-auto shadow-lg">
            <h1 className="text-4xl text-pink-600 text-center font-bold mb-8">Contact Us</h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-pink-600 font-medium mb-2">Name</label>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-2 border-2 border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                </div>

                <div>
                    <label className="block text-pink-600 font-medium mb-2">Email</label>
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full px-4 py-2 border-2 border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                </div>

                <div>
                    <label className="block text-pink-600 font-medium mb-2">Message</label>
                    <textarea 
                        placeholder="Your Message" 
                        className="w-full px-4 py-2 border-2 border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[150px] resize-none"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-pink-500 text-white py-3 rounded-md font-semibold hover:bg-pink-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
            <Link to='/'>
                <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                    Back
                </button>
            </Link>
        </div>
    );
};

export default Contact;
