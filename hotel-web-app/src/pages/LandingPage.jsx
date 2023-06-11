import { Fragment } from "react";
import Hero from "../components/Hero";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Navbar from "../components/Navbar"
import { MAX_WIDTH } from "../utils/const";
import HotelAmenity from "../components/HotelAmenity";
import HotelRoomImage from "../components/HotelRoomsImage";
import Footer from "../components/Footer";
import Investors from "../components/Investors";
import NewsLetter from "../components/NewsLetter";

export default function LandingPage() {
    return (
        <Fragment>
            <Navbar />
            <MaxWidthWrapper backgroundColor="#fff7f0" val={MAX_WIDTH}>
                <Hero />
                <HotelRoomImage />
                <HotelAmenity 
                    title="Luxury Room"
                />
                <HotelAmenity title="Suites" />
                <HotelAmenity title="Modern Room" />
                <HotelAmenity title="Standard Room" />
                <Investors />
                <NewsLetter/>
            </MaxWidthWrapper>
            <Footer />
        </Fragment>
    )
}