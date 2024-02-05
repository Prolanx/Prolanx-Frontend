import { useEffect, useState } from "react";

export const useSearchCourse = (courses, setCurrentCourses) => {

  const [query, setQuery] = useState(null);
  const onQueryChanged = (value) => {
    setQuery(value);
    const result = querySearch(value);
    console.log("search result");
    setCurrentCourses(result);
  };

  const querySearch = (query) => {
    const regex = new RegExp(query, "i");
    const result = courses.filter((item) => regex.test(item.title));
    return result;
  };

  return {
    query,
    // querySearch,
    onQueryChanged,
  };
};
