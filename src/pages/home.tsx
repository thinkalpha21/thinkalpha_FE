import { AboutDisplay } from "../components/AboutDisplay";
import { MainCarousel } from "../components/MainCarousel";
import { ServiceDisplay } from "../components/ServiceDisplay";

export const Home = () => {

    return (<>
        <MainCarousel />
        <AboutDisplay />
        <ServiceDisplay />
    </>
    );
}