import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";

const CustomerInfo = () => {
  return (
    <>
      <div className="col-xl-9 col-lg-9 mt-10">

        {/* End register notify */}

        <h2 className="text-22 fw-500 mt-40 md:mt-24">
          Let us know who you are
        </h2>

        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-6">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Full Name *</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="email" />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Phone Number *</label>
            </div>
          </div>


          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="number" required />
              <label className="lh-1 text-16 text-light-1">No of Person *</label>
            </div>
          </div>



          <div className="col-12">
            <div className="form-input ">
              <textarea required rows={6} defaultValue={""} />
              <label className="lh-1 text-16 text-light-1">
                Your Message (Optional)
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div className="text-14 text-light-1">
                  By proceeding with this booking, I agree to GoTrip Terms of
                  Use and Privacy Policy.
                </div>
              </div>
              {/* End col-12 */}
            </div>
          </div>
          {/* End col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col-xl-7 */}

      <div className="col-xl-5 col-lg-4 ">
        <div className="booking-sidebar">
          <img src="" alt="" />
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default CustomerInfo;
