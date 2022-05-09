import HeadQuestions from "../../components/headquestions";

export default function Questions() {
  return (
    <section className="container py-5 my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="font-weight-bold mb-3">
            Frequently
            <br /> Asked Questions
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
        <div className="col-md-6" data-aos="fade-up" data-aos-duration="750">
          <div className="accordion" id="accordionExample">
            <HeadQuestions
              question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
              answer="Some placeholder content for the first accordion panel. This
                  panel is shown by default, thanks to the
                  .show className."
            />
            <HeadQuestions
              question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
              answer="Some placeholder content for the first accordion panel. This
                  panel is shown by default, thanks to the
                  .show className."
            />
            <HeadQuestions
              question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et."
              answer="And lastly, the placeholder content for the third and final
                  accordion panel. This panel is hidden by default."
            />
          </div>
        </div>
        {/**
        <div className="col-md-6" data-aos="fade-up" data-aos-duration="1750">
          <div className="accordion" id="accordionExample">
            <HeadQuestions
              question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et."
              answer="And lastly, the placeholder content for the third and final
                  accordion panel. This panel is hidden by default."
            />
            <HeadQuestions
              question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et."
              answer="And lastly, the placeholder content for the third and final
                  accordion panel. This panel is hidden by default."
            />
            <HeadQuestions
              question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et."
              answer="And lastly, the placeholder content for the third and final
                  accordion panel. This panel is hidden by default."
            />
          </div>
        </div>
        **/}
      </div>
    </section>
  );
}
