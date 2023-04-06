import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Loader from "../utils/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const courseOptions = [
  {
    value: "JAVA",
    label: (
      <div className="flex justify-start p-2 items-center">
        <span>Java</span>
        <img
          src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
          alt=""
          style={{ width: "20px", height: "20px" }}
        />
      </div>
    ),
  },
];

const timeCommitmentOptions = [
  {
    value: 2,
    label: "2 hours",
  },
  {
    value: 4,
    label: "4 hours",
  },
  {
    value: 6,
    label: "6 hours",
  },
];

const Enroll = () => {
  const [courseDetails, setCourseDetails] = useState({
    userId: "a1",
    course: null,
    committedTime: null,
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCourse = (key, e) => {
    setCourseDetails((prev) => ({ ...prev, [key]: e.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/enroll`,
        courseDetails,
        {
          Headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/schedule");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading && <Loader />}

      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-2xl  rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center p-2 mb-2 font-bold text-teal-600 text-md underline underline-offset-4">
              Kickstart your learning path!
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="Course"
              >
                Course
              </label>
              <Select
                options={courseOptions}
                onChange={(e) => handleCourse("course", e)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-500 text-sm font-bold mb-2"
                htmlFor="Time Commitment"
              >
                Time Commitment per day
              </label>
              <Select
                options={timeCommitmentOptions}
                onChange={(e) => handleCourse("committedTime", e)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="flex-shrink-0 bg-teal-500 font-bold hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
              >
                Enroll
              </button>
              <button
                className="flex-shrink-0 font-bold text-teal-500 text-sm py-1 px-2 rounded"
                onClick={() => navigate("/schedule")}
                type="submit"
              >
                Schedule <FontAwesomeIcon icon={faArrowCircleRight} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Enroll;
