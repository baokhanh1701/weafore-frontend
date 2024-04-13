import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import SignIn from "./pages/SignIn/SignIn.jsx";
import ControlPanel from "./pages/ControlPanel";
import Schedule from "./pages/Schedule";
import WeaforeSider from "./components/Sider.jsx";
import LoadingAnimation from "./components/LoadingAnimation.jsx";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
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
            <LoadingAnimation />
          </div>
        }>
          <LandingPage />
        </Suspense>
      ),
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: '/home',
      element: <Suspense fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <LoadingAnimation />
        </div>
      }>
        <Layout style={{
          height: "100%"
        }}>
          <WeaforeSider />
          <Home />
        </Layout>

      </Suspense>,
    },
    {
      path: '/control-panel',
      element: <Suspense fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <LoadingAnimation />
        </div>
      }>
        <Layout style={{
          height: "100%"
        }}>
          <WeaforeSider style={{
            height: "100vh"
          }} />
          <ControlPanel />
        </Layout>

      </Suspense>,
    },
    {
      path: '/schedule',
      element: <Suspense fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <LoadingAnimation />
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