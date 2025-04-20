import ActionsButtons from "./action-buttons/ActionButtons";
import BackgroundBlobs from "./background-blobs/BackgroundBlobs";
import IntroSection from "./intro-section/IntroSection";
import ProfileImage from "./profile-image/ProfileImage";
import {SocialLinks} from "../common/social-links/SocialLinks";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative 
                                   bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50
                                   dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                                   overflow-hidden"
    >
      <BackgroundBlobs />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex-1 text-left md:pr-12 animate-fadeIn pb-6">
          <IntroSection />
          <ActionsButtons />
          <SocialLinks />
        </div>
        <ProfileImage />
      </div>
    </section>
  );
};

export default Home;
