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
            <Banner />
          </div>
          {/* End .row */}

          <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
            <Categories />
          </div>
          {/* End .row */}

          <div className="row y-gap-20 pt-40">
            <div className="col-auto">
              <h2>What to know before visiting Char Dham</h2>
            </div>
            {/* End .col-auto */}

            <IntroTown />
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

      <section className="">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-lg-12">
              <h2 className="text-30 fw-500">
                FAQs about
                Char Dham
              </h2>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <Faq />
              </div>
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
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
