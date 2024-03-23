import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    getAllEvents,
} from "../services/events";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export const AppContext = React.createContext("");

export default function AppProvider({ children }) {
    const navigate = useNavigate();
    const { width, height } = useWindowDimensions();
    const commonBreakPoint = [320, 480, 768, 1024, 1025, 1200];
    const [events, setEvents] = useState([]);
    const [initRenderFlag, setInitRenderFlag] = useState(true);

    const upcomingEvents = events.filter((event) => {
        const end_time = event.end_time;
        return new Date().valueOf() < new Date(end_time).valueOf();
    }).sort((a, b) => {
        return new Date(a.start_time) - new Date(b.start_time)
    });

    const pastEvents = events.filter((event) => {
        const end_time = event.end_time;
        return new Date().valueOf() > new Date(end_time).valueOf();
    }).sort((a, b) => {
        return new Date(b.end_time) - new Date(a.end_time)
    });

    const fetchEventsData = async () => {
        // console.log(localStorage.getItem("profile-dataaaa"));
        const id = JSON.parse(localStorage.getItem("profile-data"))?._id;
        if (id != null) {
            const events_update = await getAllEvents({
                user_id: id,
            });
            setEvents(events_update.data);
        }
        else console.log("Can't get Events Data since user id is not exist")
    };

    // useEffect(() => {
    //   fetchEventsData()
    // }, [])

    return (
        <AppContext.Provider
            value={{
                width,
                height,
                commonBreakPoint,
                navigate,
                events,
                setEvents,
                upcomingEvents,
                pastEvents,
                initRenderFlag,
                setInitRenderFlag,
                fetchEventsData
            }}
        >
            {children}
        </AppContext.Provider>
    );
}