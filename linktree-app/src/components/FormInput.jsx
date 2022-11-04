import { useState } from "react";

const FormInput = () => {

    const name = "Segun Osiki";
    const errorMessage = "Please enter a message";

    
    const[contact, setContact] = useState({
        first_name : "",
        last_name : "",
        email : "",
        message : "",
    });


    const handleChnage = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setContact({...contact, [e.target.name] : value});
    }
    return ( 
        <div>
             <form className="flex flex-col ml-4">
                
                <div className="xl:flex  mt-8">
                    <label className="block text-sm font-medium leading-5 text-gray-700 mt-4 ml-2 xl:ml-64">
                        First name
                    </label>
                    
                    <input
                    id="first_name"
                    name="first_name" 
                    value={contact.first_name}
                    onChange={(e) => handleChnage(e)}
                    required
                    type="text" placeholder="Enter your first name" 
                    className="items-center flex flex-row w-80 h-11 py-2.5 px-3.5 mt-2 gap-2 
                    rounded-lg ml-2 border border-gray-300 
                    xl:relative xl:top-8 xl:right-20 xl:w-72"/>

                    <label className="block text-sm font-medium leading-5 text-gray-700 mt-4 ml-2 
                                        xl:relative xl:right-16">
                        Last name
                    </label>

                    <input
                    id="last_name"
                    name="last_name" 
                    value={contact.last_name}
                    onChange={(e) => handleChnage(e)}
                    required
                    type="text" placeholder="Enter your last name" 
                    className="items-center flex flex-row w-80 h-11 py-2.5 px-3.5 mt-2 gap-2 
                                rounded-lg ml-2 border border-gray-300 
                                xl:relative xl:top-8 xl:right-36 xl:w-72"/>
                </div>
                
                <label className="block text-sm font-medium leading-5 text-gray-700 mt-4 ml-2 
                                    xl:ml-64 xl:relative xl:top-6 xl:mb-4">
                    Email
                </label>
                
                <input
                id="email"
                name="email" 
                value={contact.email}
                onChange={(e) => handleChnage(e)}
                required
                type="email" placeholder="yourname@email.com" 
                className="items-center flex flex-row w-80 h-11 py-2.5 px-3.5 mt-2 gap-2 
                            rounded-lg ml-2 border border-gray-300
                            xl:ml-64 xl:w-3/5"/>

                <label className="block text-sm font-medium leading-5 text-gray-700 mt-4 ml-2 
                                    xl:ml-64 xl:relative xl:bottom-2 xl:mb-4">
                    Message
                </label>

                <textarea 
                id="message"
                name="message" rows="4" cols="50"
                value={contact.message}
                onChange={(e) => handleChnage(e)}
                required
                typeof="text" 
                placeholder="Send me a message and I'II reply you as soon as possible..."
                className="items-center flex flex-row w-80 h-32 py-2.5 px-3.5 mt-2 gap-2 
                            rounded-lg ml-2 border border-gray-300 
                            xl:ml-64 xl:w-3/5 xl:h-40 xl:relative xl:bottom-7">
                </textarea>
                <span className="ml-2 text-xs text-red-900 xl:ml-64 invisible">{errorMessage}</span>

                <div className="flex">
                    <input 
                    type="checkbox"
                    id="check"
                    required 
                    className="items-center flex flex-row w-5 h-5 py-2.5 px-3.5 mt-3 gap-2 
                    rounded-md ml-2 border border-gray-300 
                    xl:ml-64 xl:relative xl:bottom-2 top-0"/>

                    <label className="mt-3 text-base font-normal leading-6 text-gray-600 ml-3">
                        You agree to providing your data to <span className="font-bold">{name}</span> who may contact you.
                    </label>
                </div>

                <button
                    id="btn__submit"
                    className="flex items-center justify-center flex-row w-80 h-11 py-2.5 px-3.5 mt-4 gap-2 
                    rounded-lg ml-2 border border-blue-600 bg-blue-600 text-white shadow-sm 
                    xl:ml-64 xl:w-3/5 xl:h-12">
                        Send message
                </button>
            </form>
        </div>
     );
}
 
export default FormInput;