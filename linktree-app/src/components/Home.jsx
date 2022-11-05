import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import GitHub  from "../icons/GitHubIcon";
//import ProfileIcon from "../icons/ProfileIcon";
import SlackIcon from "../icons/SlackIcon";
import img1 from "../images/seg.jpeg";
import Footer from "./Footer";

const Home = () => {

    // const navigate = useNavigate();


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
                <a id="twitter" href="https://twitter.com/segun_osiki" 
                className="font-medium text-sm leading-5 text-center">Twitter Link</a>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg items-center justify-center hidden">
                <a id="slack" href="www.slack.com/segun" 
             className="font-medium text-sm leading-5 text-center">Slack Link</a>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <a id="btn__zuri" href="https://training.zuri.team/" 
                className="font-medium text-sm leading-5 text-center">Zuri Team</a>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <a id="books" href="http://books.zuri.team" 
                className="font-medium text-sm leading-5 text-center">Zuri Books</a>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
              <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=Segun Osiki" 
              className="font-medium text-sm leading-5 text-center">Python Books</a>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <a id="pitch" href="https://background.zuri.team" 
                className="font-medium text-sm leading-5 text-center">Background Check for Coders</a>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <a id="book__design" href="https://books.zuri.team/design-rules" 
                className="font-medium text-sm leading-5 text-center">Design Books</a>
            </div>
            <div className="xl:w-3/4 w-80 h-16 bg-gray-200 border-solid rounded-lg flex items-center justify-center">
                <Link to={"/contact"}id="contact" className="font-medium text-sm leading-5 text-center cursor-pointer">
                    Contact Me
                </Link>
            </div>
           </div>
           <div className="flex justify-center gap-6">
                <SlackIcon />
                <GitHub />
            </div>
        </section>
        <Footer />
    </>
        
    );
}
 
export default Home;