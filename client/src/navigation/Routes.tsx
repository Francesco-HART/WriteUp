import { Route, Routes } from "react-router-dom";
import Home from "../views/home/home";
import Menu from "../views/menu/Menu";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Menu />
            <Home />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default Router;
