//import { Link } from "react-router-dom";
import GitHub  from "../icons/GitHubIcon";
import ProfileIcon from "../icons/ProfileIcon";
import SlackIcon from "../icons/SlackIcon";

const Home = () => {
    return ( 
        
    <>
        <section>
           <div className="flex justify-center flex-col items-center p-0 mt-12">
            <ProfileIcon />
           </div>
           <h2 className="text-gray-900 font-bold text-sm leading-7 text-center">
            Annette Black
           </h2>
           <div className="flex flex-col justify-center items-center py-6 px-8 gap-12">
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a href="www.twitter.com">Twitter Link</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg items-center justify-center hidden">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a href="www.twitter.com">Slack Link</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a href="https://training.zuri.team/">Zuri Team</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a href="http://books.zuri.team">Zuri Books</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a href="https://books.zuri.team">Python Books</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a href="https://background.zuri.team">Background Check for Coders</a>
                </h4>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <h4 className="font-medium text-sm leading-5 text-center">
                    <a href="https://books.zuri.team/design-rules">Design Books</a>
                </h4>
            </div>
           </div>
        </section>
        <footer>
            <div className="flex justify-center gap-6">
                <SlackIcon />
                <GitHub />
            </div>
        </footer>
    </>
        
    );
}
 
export default Home;