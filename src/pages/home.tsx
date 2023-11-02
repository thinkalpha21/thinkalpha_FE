import { AboutDisplay } from "../components/AboutDisplay";
import { ContactDisplay } from "../components/ContactDisplay";
import { FooterDisplay } from "../components/FooterDisplay";
import { MainCarousel } from "../components/MainCarousel";
import { ServiceDisplay } from "../components/ServiceDisplay";
import { SocialDisplay } from "../components/SocialDisplay";
import { WhatsappButton } from '../components/WhatsappButton';
import { WorksDisplay } from "../components/WorksDisplay";

export const Home = () => {

    return (<>
        <MainCarousel />
        <AboutDisplay />
        <WhatsappButton />
        <ServiceDisplay />
        <WhatsappButton />
        <WorksDisplay />
        <WhatsappButton />
        <SocialDisplay />
        <ContactDisplay />
        <FooterDisplay />

    </>
    );
}