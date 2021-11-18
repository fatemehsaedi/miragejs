
import Header from "./Components/Header";
import { renderRoutes } from "react-router-config";
import { routes } from "./Routes/routes";

function App() {
  return (
    <>
    <Header/>
    {renderRoutes(routes)}
    </>
  );
}

export default App;
