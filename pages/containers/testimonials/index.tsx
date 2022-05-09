import People from "../../components/people";

export default function Testimonials() {
  return (
    <section className="container py-5 my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="font-weight-bold mb-3">
            Hear From <br />
            Our Users
          </h1>
        </div>
        <div className="col-md-6">
          <p className="text-muted">
            We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready-to-use website and
            help sell a product from the company
          </p>
        </div>
      </div>
      <div className="row pt-3">
        <People
          desc="We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready-to-use website and
            help sell a product from the company"
          img="user.png"
          name="Guy Hawkins"
          role="Software Developer"
        />
        <People
          desc="We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready-to-use website and
            help sell a product from the company"
          img="user1.png"
          name="Ester Howard"
          role="Front-End Developer"
        />
        <People
          desc="We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company"
          img="user2.png"
          name="Leslie Alexander"
          role="UI Designer"
        />
        <People
          desc="We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready-to-use website and
            help sell a product from the company"
          img="user3.png"
          name="Guy Hawkins"
          role="Web3 Engineer"
        />
        <People
          desc="We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready-to-use website and
            help sell a product from the company"
          img="user4.png"
          name="Danica Shen"
          role="Web Designer"
        />
        <People
          desc="We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company"
          img="user5.png"
          name="Leslie Alexander"
          role="UX Designer"
        />
      </div>
    </section>
  );
}
