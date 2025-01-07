import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import LocationTopBar from "@/components/common/LocationTopBar";
import RelatedBlog from "@/components/blog/blog-details/RelatedBlog";
import blogsData from "@/data/blogs";
import DetailsContent from "@/components/blog/blog-details/DetailsContent";
import FormReply from "@/components/blog/blog-details/FormReply";
import TopComment from "@/components/blog/blog-details/TopComment";
import BlogNavigator from "@/components/blog/blog-details/BlogNavigator";
import Comments from "@/components/blog/blog-details/Comments";

export const metadata = {
  title: "Blog Single || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const BlogSingleDynamic = ({ params }) => {
  const id = params.id;
  const blog = blogsData.find((item) => item.id == id) || blogsData[0];

  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 justify-center text-center">
            <div className="col-auto">
              <div className="text-15 fw-500 text-blue-1 mb-8 text-capitalize">
                {blog?.tag}
              </div>
              <h1 className="text-30 fw-600">{blog?.title}</h1>
              <div className="text-15 text-light-1 mt-10">{blog?.date}</div>
            </div>
            <div className="col-12">
              <img
                src={blog?.img}
                alt={blog?.title}
                className="col-12 rounded-8 w-100 img_large_details"
              />
            </div>
          </div>
          {/* End .row top bar image and title */}

          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <DetailsContent />
              {/* Details content */}

            
              {/* End  topcommnet  */}
              
              {/* End BlogNavigator */}

              {/* End comments components */}

              <div className="" />

              
              {/* End Leave a repy title */}

            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Details Blog Details Content */}

     
      {/* End Related Content */}

      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogSingleDynamic;
