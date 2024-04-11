import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import SignIn from "./pages/SignIn/SignIn.jsx";
import ControlPanel from "./pages/ControlPanel";
import Schedule from "./pages/Schedule";
import WeaforeSider from "./components/Sider.jsx";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const Home = React.lazy(() => import("./pages/Home"))
function App() {
  console.log(import.meta.env.VITE_ADAFRUIT_API_KEY  ) // "123"
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
      path: '/home',
      element: <Suspense fallback={
        <div>
          Loading...
        </div>
      }>
        <Layout style={{
          height: "100vh"
        }}>
          <WeaforeSider />

          <Home />
        </Layout>

      </Suspense>,
    },
    {
      path: '/control-panel',
      element: <Suspense fallback={
        <div>
          Loading...
        </div>
      }>
        <Layout style={{
          height: "100%"
        }}>
          <WeaforeSider />
          <ControlPanel />
        </Layout>

      </Suspense>,
    },
    {
      path: '/schedule',
      element: <Suspense fallback={
        <div>
          Loading...
        </div>
      }>
        <Layout style={{
          height: "100%"
        }}>
          <WeaforeSider />
          <Schedule />
        </Layout>

      </Suspense>,
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
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}

      </Routes>
    </BrowserRouter>
  );
}

export default App;