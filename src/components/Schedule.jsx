import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
import TileContent from "./TileContent";
import Loader from "../utils/Loader";

const Schedule = () => {
  const [schedule, setSchedule] = useState(null);

  const getSchedule = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/get-schedule`,
        { userId: "a1" },
        {
          Headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const courseSchedule = response.data.data["tasks"];
      setSchedule(courseSchedule);
    } catch (error) {}
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <div className="w-full flex justify-center items-center my-16">
      {!schedule && <Loader />}
      <Calendar
        className="shadow-xl rounded-xl p-4"
        tileContent={(props) => <TileContent {...props} schedule={schedule} />}
      />
    </div>
  );
};

export default Schedule;
