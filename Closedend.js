import * as React from "react";
import ReactDOM from "react-dom";

import VariablesForm from "./VariableForm";
import ClosedEndChart from "./Closedendform";

import defaultState from "./defaultState";

function ClosedEnd() {
  const [state, setState] = React.useState(defaultState);

  return (
    <div id="closedEndCalculator">
      <h1 className="text-center">Closed-End Loan Calculator</h1>
      <hr />
      <VariablesForm onUpdate={variables => setState(variables)} />
      <hr />
      <ClosedEndChart {...state} />
    </div>
  );
}

export default ClosedEnd;