import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import ControlPanel from "./pages/ControlPanel";
import Schedule from "./pages/Schedule";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
// const EventPage = React.lazy(() => import("./pages/EventPage"));
const Home = React.lazy(() => import("./pages/Home"))

function App() {
  const routes = [
    // {
    //   path: "/*",
    //   element: <ErrorPage />,
    // },
    {
      path: "/",
      element: (
        <Suspense fallback={
          <div className="center">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        }>
          <LandingPage />
        </Suspense>
      ),
    },
    // {
    //   path: "/signin",
    //   element: <SignIn />,
    // },
    // {
    //   path: "/signup",
    //   element: <SignUp />,
    // },
    {
      path: "/home",
      element: <Suspense fallback={
        <div className="center">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      }>
          <Home />
      </Suspense>,
    },
    {
      path: "/control-panel",
      element: <ControlPanel />
  },
  {
      path: "/schedule",
      element: <Schedule />
  }
  ];
  return (
    <BrowserRouter>
      {/* <AuthProvider>
        <AppProvider> */}
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
      {/* </AppProvider>
      </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;