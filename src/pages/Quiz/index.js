import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { data1 } from "../../assets/Dummy";
import { quiz } from "../../assets/Dummy/questions";
import axios from "axios";

const Quiz = () => {
  const navigate = useNavigate();
  const lastMC = localStorage.getItem("last_mc");
  const token = localStorage.getItem("token");
  const [totalData, setTotalData] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [questionQuiz, setQuestionQuiz] = useState("");

  const getQuestions = (item) => {
    axios
      .get(`${process.env.REACT_APP_URL}daidan/get_question_mc/1/${item}`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setQuestionQuiz(res.data.data[0]);
        setTotalData(res.data.totaldata);
      });
  };

  useEffect(() => {
    if (lastMC >= 1) {
      setPage(parseInt(lastMC) + 1);
      getQuestions(parseInt(lastMC) + 1);
    } else {
      getQuestions(page);
    }
  }, [token]);

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    axios
      .post(
        `${process.env.REACT_APP_URL}daidan/submit_answer_mc`,
        { id_question: questionQuiz.id, answer: selectedAnswer },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        if (page !== totalData) {
          setPage((prev) => prev + 1);
          getQuestions(page + 1);
        } else {
          setPage(0);
          navigate("/word-assignment");
        }
      });
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer);
  };

  return (
    <>
      <p className="fs-2 fw-bold text-center">Word Assessment</p>
      <div className="card p-5 shadow-lg border-0">
        <div className="quiz-container">
          <div>
            <div>
              <span className="active-question-no">{addLeadingZero(page)}</span>
              <span className="total-question">
                /{addLeadingZero(totalData)}
              </span>
            </div>
            <h2>{questionQuiz?.question}</h2>
            <ul>
              {questionQuiz.options?.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer.key_option, index)}
                  key={answer.option}
                  className={
                    selectedAnswerIndex === index ? "selected-answer" : null
                  }
                >
                  {answer.option}
                </li>
              ))}
            </ul>
            <div className="flex-right">
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
              >
                {page === totalData ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
