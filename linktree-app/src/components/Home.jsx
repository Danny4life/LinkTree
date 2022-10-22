import ProfileIcon from "../icons/ProfileIcon";

const Home = () => {
    return (  
        <section>
           <div className="flex justify-center flex-col items-center p-0 mt-12">
            <ProfileIcon />
           </div>
           <h2 className="text-gray-900 font-bold text-sm leading-7 text-center">
            Annette Black
           </h2>
           <div className="flex flex-row justify-center items-center py-6 px-8 gap-2">
            <div className="w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    Twitter Link
                </h4>
            </div>

           </div>
        </section>
    );
}
 
export default Home;