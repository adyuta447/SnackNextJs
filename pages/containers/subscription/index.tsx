export default function Subscription() {
  return (
    <div
      className="container subscription"
      data-aos="fade-up"
      data-aos-duration="1750"
    >
      <div className="text-subscription container">
        <h2 className="text-white font-weight-bold mb-3 text-center-sm text-center">
          Let us send you offering
        </h2>
        <div className="d-flex d-block justify-content-center px-lg-5 mx-lg-5">
          <input
            type="text"
            className="form-control"
            placeholder="Input your email address in here"
          />
          <button type="submit" className="btn btn-warning mb-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
