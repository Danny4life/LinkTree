import AfricaIcon from "../icons/AfricaIcon";

const Footer = () => {
    return ( 
     
        <footer className="">
            <hr className="mt-24 w-10/12 m-auto" />
            <div className="flex justify-around mt-6 flex-col ml-6 xl:flex xl:justify-around xl:relative xl:right-14 lg:flex-row">
                <h4 className="flex text-black font-bold mb-2">Zuri
                    <div className="w-1 h-1 bg-red-700 rounded-full mt-3"></div>
                        Internship
                </h4>
                
                <p className="text-base font-normal leading-6 text-gray-500 mb-2 xl:relative xl:left-14">HNG Internship 9 Frontend Task</p>
                <AfricaIcon className="xl:relative xl:left-20" />
           </div>
        </footer>
       
     );
}
 
export default Footer;