//import { Link } from "react-router-dom";
import AfricaIcon from "../icons/AfricaIcon";
import GitHub  from "../icons/GitHubIcon";
//import ProfileIcon from "../icons/ProfileIcon";
import SlackIcon from "../icons/SlackIcon";
import img1 from "../images/seg.jpeg";

const Home = () => {
    return ( 
        
    <>
        <section>
           <div className="flex justify-center flex-col items-center p-0 mt-12">
            {/* <ProfileIcon id="profile__img" /> */}
            <img id="profile__img" src={img1} alt="profile_image" className="w-20 h-20 rounded-full object-fit" />
           </div>
           <h2 className="text-gray-900 font-bold text-sm leading-7 text-center">
            Segun Osiki
           </h2>
           <div className="flex flex-col justify-center items-center py-6 px-8 gap-12">
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a id="twitter" href="https://twitter.com/segun_osiki">Twitter Link</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg items-center justify-center hidden">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a id="slack" href="www.slack.com">Slack Link</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a id="btn__zuri" href="https://training.zuri.team/">Zuri Team</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a id="books" href="http://books.zuri.team">Zuri Books</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a id="book__python" href="https://books.zuri.team">Python Books</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a id="pitch" href="https://background.zuri.team">Background Check for Coders</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a id="book__design" href="https://books.zuri.team/design-rules">Design Books</a>
                </h4>
            </div>
           </div>
        </section>
        <footer>
            <div className="flex justify-center gap-6">
                <SlackIcon />
                <GitHub />
            </div>
            <div className="flex justify-around mt-20">
                <h4 className="flex text-black font-bold">Zuri<div className="w-1 h-1 bg-red-700 rounded-full mt-3"></div>Internship</h4>
                
                <p className="text-base font-normal leading-6 text-gray-500">HNG Internship 9 Frontend Task</p>
                <AfricaIcon />
           </div>
        </footer>
    </>
        
    );
}
 
export default Home;