import { useState } from "react";

export const useSearchCourse = (courses, updateCouses) => {
  const [query, setQuery] = useState("");
  const reset = () => {
    if (!query || query === "") return;
    onQueryChanged("");
  };
  const onQueryChanged = (value) => {
    setQuery(value);
    const result = querySearch(value);
    updateCouses(result);
  };

  const querySearch = (query) => {
    if (!query || query === "") return courses;
    const regex = new RegExp(query, "i");
    const result = courses.filter((item) => regex.test(item.title));
    return result;
  };

  return {
    query,
    onQueryChanged,
    reset,
  };
};
