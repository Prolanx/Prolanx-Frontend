import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { courses } from "constants";

export const useInitBootcampInfo = () => {
  const urlParams = useParams();
  const id = urlParams.id;
  const [bootcamp, setBootcamp] =  useState(null);

  const initPage = () => {
    // if id doesnt exist then redirect back to where they were coming from or home page
    // if (!id || id === "") return setCurrentCourses(courses);
    courses.map((item) =>  item.id == id && setBootcamp(item))
  };

  useEffect(() => {
    initPage();
  }, [id]);

  return {
    bootcamp, 
    };
};
