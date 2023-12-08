import React from "react";
import data from "./data";
import SingleQuestion from "./Question";

import { useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
      </div>
      <section className="info">
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...questions} />;
        })}
      </section>
    </main>
  );
};

export default App;
