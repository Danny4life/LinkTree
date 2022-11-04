
import Footer from "./Footer";
import FormInput from "./FormInput";


 const ContactForm = () => {

    return ( 
        <div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-semibold leading-10 tracking-tight text-gray-900 mt-12 mr-36 
                                xl:mr-64 xl:mt-8 xl:relative xl:right-4">
                    Contact Me
                </h1>
                <p className="text-lg font-normal leading-7 text-gray-600 mt-4 ml-7 
                                xl:ml-12 xl:mt-8">
                    Hi there, contact me to ask me about anything you have in mind.
                </p>
               <FormInput />
            </div>
            
            <footer>
                <Footer />
            </footer>
        </div>   
     );  
 }
 
 export default ContactForm;

