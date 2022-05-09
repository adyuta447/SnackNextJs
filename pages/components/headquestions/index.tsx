interface HeadQuestionProps {
  question: string;
  answer: string;
}

export default function HeadQuestion(props: HeadQuestionProps) {
  const { question, answer } = props;
  return (
    <div className="card my-4 border-bottom">
      <div className="" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn font-weight-bold text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {question}
          </button>
        </h2>
      </div>

      <div
        id="collapseOne"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">{answer}</div>
      </div>
    </div>
  );
}
