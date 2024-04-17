import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { courses } from "constants";
import useCustomRouter from "../../../hooks/useCustomRouter";
import { appLinks } from "../../../constants";

export const useInitBootcampInfo = () => {
  const urlParams = useParams();
  const router = useCustomRouter();
  const id = urlParams.id;
  const [bootcamp, setBootcamp] = useState(null);

  const initPage = () => {
    // if id doesnt exist then redirect back to where they were coming from or home page
    if (!id || id === "") {
      return router.navigate(appLinks.bootcampList, true);
    }
    courses.map((item, index) => {
      item.id === id && setBootcamp(item);
    });
  };

  useEffect(() => {
    initPage();
  }, []);

  useEffect(() => {
    console.log("bootcamp changed", bootcamp);
  }, [bootcamp]);

  return {
    bootcamp,
  };
};
