import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import TopDestinations2 from "@/components/destinations/TopDestinations2";
import Faq from "@/components/faq/Faq";
import TestimonialLeftCol from "@/components/home/home-1/TestimonialLeftCol";
import Testimonial from "@/components/home/home-1/Testimonial";
import Link from "next/link";
import Slights from "@/components/block/Slights";
import Blog from "@/components/blog/Blog3";
import LocationTopBar from "@/components/common/LocationTopBar";
import Banner from "@/components/destinations/components/Banner";
import Ourservices from "@/components/destinations/components/our-services";
import Categories from "@/components/destinations/components/Categories";
import IntroTown from "@/components/destinations/components/IntroTown";
import Weather from "@/components/destinations/components/Weather";
import GeneralInfo from "@/components/destinations/components/GeneralInfo";
import Cars from "@/components/cars/Cars";
import Tours from "@/components/tours/Tours";
import Activity from "@/components/activity/Activity";
import Rentals from "@/components/rentals/Rentals";
import Hotels from "@/components/hotels/Hotels2";

export const metadata = {
  title: "Destinations || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const Destinations = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pb-md">
        <div className="container">
          <div className="row">
            < Ourservices />
          </div>
          {/* End .row */}


          {/* End .row */}

          <div className="row y-gap-20 pt-40">

            {/* End .col-auto */}

            <div className="col-xl-7">
              <p className="text-15 text-dark-1">
                <div className="col-auto">
                  <h2>What to know before Booking Car</h2>
                </div>
                London is a shining example of a metropolis at the highest peak of
                modernity and boasts an economy and cultural diversity that’s the envy
                of other global superpowers.
                <br />
                <br />
                Take the opportunity to acquaint yourself with its fascinating history
                chronicled by institutions like the British Museum as well as see how
                far it has come by simply riding the Tube and passing by celebrated
                landmarks like Buckingham Palace, Westminster Abbey, and marvels like
                Big Ben, the London Eye, and the Tower Bridge.
                <br />
                <br />
                You can also immerse yourself in its ever-evolving and impactful
                culture by visiting places like the National Gallery, the Tate Modern,
                West End, Abbey Road, the Royal Albert Hall, Oxford Street and the
                Westfield Shopping Centers, and areas referenced and seen in
                literature and film.
              </p>

            </div>
            {/* End .col */}

            <div className="col-xl-5">
              <div className="relative d-flex ml-35 xl:ml-0">
                {/* booking form  */}

              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="pt-0 mt-30 border-top-light" />
          {/* border separation */}

          <div className="" />

          {/* End .row */}
          <div className=" " />
          {/* border separation */}
        </div>
        {/* End .container */}
      </section>
      {/* End Top Banner,categorie,intro,weather, generic info section */}


      {/* End  Hotel sections */}

      {/* End Tours Sections */}


      {/* Trending Activity Sections */}


      {/* Featured Rentals Sections */}


      {/* Popular Car Hire Sections */}


      {/* End blog Section */}


      {/* End Top sights in London */}


      {/* End testimonial Section */}

      {/* End Faq Section */}


      {/* End top destinations */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Destinations), { ssr: false });
