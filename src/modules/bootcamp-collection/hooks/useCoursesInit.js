import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { faculty, courses } from "../../../constants";
import { useSearchCourse } from "./useSearchCourse";

export const useCoursesInit = () => {
  const urlParams = useParams();
  const { facultyId } = urlParams;
  const [currentCourses, setCurrentCourses] = useState([]);
  const [currentFaculty, setCurrentFaculty] = useState(null);
  const [isFaculty, setIsFaculty] = useState(false);
  const search = useSearchCourse(courses, setCurrentCourses);
  const initPage = () => toggleCourse(facultyId);

  const toggleCurrentFaculty = (id) => {
    if (!id) return setCurrentFaculty(null);
    Object.keys(faculty).map((item) => {
      if (faculty[item].id == id) {
        setCurrentFaculty(faculty[item]);
      }
    });
  };
  const toggleCourse = (option) => {
    // reset the search qurery if it exists
    search.reset();
    // setIsFaculty(false);
    // if option (facultyId) is not set or is == "all" then show all courses
    if (!option || option == "" || option === "all") {
      console.log("setting all courses ");
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
  useEffect(() => {
    if (search.query) toggleCurrentFaculty();
  }, [search.query]);

  useEffect(() => {
    initPage();
  }, [facultyId]);

  return {
    data: currentCourses,
    faculty: currentFaculty,
    faculties: faculty,
    isFaculty,
    actions: {
      toggleCourse,
    },
    search,
  };
};
