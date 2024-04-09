import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn/main.jsx";
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
            Loading...
          </div>
        }>
          <LandingPage />
        </Suspense>
      ),
    },
    // {
    //   path: "/event/:eid",
    //   element: <Suspense fallback={<div>Loading...</div>}>
    //     <EventPage />
    //   </Suspense>,
    // },
    // {
    //   path: "/event/manage/:eid",
    //   element: <EventPage />,
    // },
    {
      path: "/signin",
      element: <SignIn />,
    },
    // {
    //   path: "/signup",
    //   element: <SignUp />,
    // },
    {
      path: "/home",
      element: <Suspense fallback={
        <div>
          Loading...
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
    // {
    //   path: "/home/calendars",
    //   element: <Calendars />,
    // },
    // {
    //   path: "/personal",
    //   element: <Personal />,
    // },
    // {
    //   path: "/discover",
    //   element: <DiscoverEvents />,
    // },
    // {
    //   path: "/discover",
    //   element: <DiscoverEvents />,
    // },
    // {
    //   path: "/user/:id",
    //   element: <UserProfile />,
    // },
    // {
    //   path: "/user/:uid/settings",
    //   element: <Settings />,
    // },
    // {
    //   path: "/events-manager",
    //   element: <EventsManager />,
    // },
    // {
    //   path: "/create-event",
    //   element: <CreateEvent />,
    // },
    // {
    //   path: "/event-settings",
    //   element: <EventSettings />,
    // },
    // {
    //   path: "/calendars-manager",
    //   element: <CalendarsManager />,
    // },
    // {
    //   path: "/create-calendar",
    //   element: <CreateCalendar />,
    // },
    // {
    //   path: "/calendar-settings",
    //   element: <CalendarSettings />,
    // },
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