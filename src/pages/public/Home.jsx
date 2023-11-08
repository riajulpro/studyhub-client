import { Helmet } from "react-helmet";
import Banner from "../../components/Homepage/Banner";
import Faq from "../../components/Homepage/Faq";
import Features from "../../components/Homepage/Features";
import UpcomingEvents from "../../components/Homepage/UpcomingEvents";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>StudyHub | An online group study platform</title>
      </Helmet>
      <Banner />
      <Features />
      <Faq />
      <UpcomingEvents />
    </>
  );
};

export default Home;
