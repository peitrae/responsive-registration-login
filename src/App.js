import SignIn from "./components/SignIn/SignIn";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <SignIn />
        </div>
      </div>
      <div className="panels-container"></div>
    </div>
  );
}

export default App;
