import Navbar from "../../components/navbar";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <section className="bg-hero pt-3">
        <Navbar />
        <div className="text-center mt-md-4 pt-md-4 d-flex justify-content-center align-items-center">
          <div className="col-md-8" data-aos="fade-up" data-aos-duration="750">
            <h1 className="text-white font-weight-bold py-3 py-md-2">
              Snack Team Management
            </h1>
            <p className="text-white-80">
              We will help to develop every smallest thing into a big one for
              your company We will help to develop every smallest thing into a
              big one for
            </p>
            <a href="" className="btn btn-lg btn-warning my-3">
              Try For Free
            </a>
            <Image
              src="/hero.png"
              width={1013}
              height={614}
              className="img-fluid mt-4"
              alt=""
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </section>
    </>
  );
}
