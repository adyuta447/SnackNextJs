import Image from "next/image";

export default function About() {
  return (
    <section className="container py-4">
      <div className="row align-items-center">
        <div
          className="col-md-6 my-3"
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <h1 className="font-weight-bold mb-3">Why Snack Team Management</h1>
          <p className="text-muted">
            Develop a website by finding a product identity that has value and
            branding to become a characteristic of a company. We will also
            facilitate the business marketing of these products with our SEO
            experts so that they become a ready-to-use website and help sell a
            product from the company
          </p>
          <a href="" className="btn btn-warning px-3 shadow my-4">
            Learn More
          </a>
        </div>
        <div
          className="col-md-6 my-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            src="/team.png"
            width={540}
            height={644}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
