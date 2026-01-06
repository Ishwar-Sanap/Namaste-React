import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appSotre from "./redux/appStore";

function App() {
  return (
    <Provider store={appSotre}>
      <Body />
    </Provider>
  );
}

export default App;
