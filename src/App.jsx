import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 import SignIn from "./pages/SignIn/main.jsx";
// import SignUp from "./pages/SignUp";
// import Calendars from "./pages/Calendars";
// import CreateEvent from "./pages/CreateEvent";
// import EventsManager from "./pages/EventsManager";
// import Personal from "./pages/Personal";
// import Settings from "./pages/Settings";
// import UserProfile from "./pages/UserProfile";
// import DiscoverEvents from "./pages/DiscoverEvents";
// import CalendarsManager from "./pages/CalendarsManager";
// import CreateCalendar from "./pages/CreateCalendar";
// import CalendarSettings from "./pages/CalendarSettings";
// import EventSettings from "./pages/EventSettings";
// import ErrorPage from "./pages/ErrorPage";
// import AuthProvider from "./context/AuthProvider";
// import AppProvider from "./context/AppProvider";

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
        <Suspense fallback={<div>Loading...</div>}>
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
      element: <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>,
    },
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