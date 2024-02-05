import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { faculty, courses } from "../../../constants";
import { useSearchCourse } from "./useSearchCourse";

// import the courses list

export const useCoursesInit = () => {
  const urlParams = useParams();
  const { facultyId } = urlParams;
  const [currentCourses, setCurrentCourses] = useState([]);
  const [currentFaculty, setCurrentFaculty] = useState(null);
  const [isFaculty, setIsFaculty] = useState(false);

  const initPage = () => {
    toggleCourse(facultyId);
  };

  const toggleCurrentFaculty = (id) => {
    if (!id) return setCurrentFaculty(null);
    Object.keys(faculty).map((item) => {
      if (faculty[item].id == facultyId) {
        setCurrentFaculty(faculty[item]);
      }
    });
  };
  const toggleCourse = (option) => {
    // options is either all or a facultyId
    setIsFaculty(false);
    if (!option || option == "" || option === "all") {
      toggleCurrentFaculty();
      setCurrentCourses(courses);
      return;
    }
    const list = [];
    courses.map((item) => {
      if (item.facultyId == option) list.push(item);
    });
    setCurrentCourses(list);
    toggleCurrentFaculty(option);
  };

  const toggleFaculties = () => {
    toggleCurrentFaculty();
    const list = [];
    Object.keys(faculty).map((item) => list.push(faculty[item]));
    setCurrentCourses(list);
    setIsFaculty(true);
  };


  // const search = useSearchCourse(courses)
  // const toggleSearch = (query)=> {
  //  const result =  search.query(query)
  //  setCurrentCourses(result);
  // }
  useEffect(() => {
    initPage();
  }, [facultyId]);

  return {
    data: currentCourses,
    faculty: currentFaculty,
    isFaculty,
    actions: {
      toggleFaculties,
      toggleCourse,
    },
  };
};
