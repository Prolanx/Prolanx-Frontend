import { data as graphicsData } from "./graphics-design";
import { data as fullstack } from "./fullstack";
import { data as ui } from "./ui-ux";
import { data as dataAnalytics } from "./data-analytics";

// export const courses = {

//  graphics: graphicsData,
//  fullstack,
//  ui,
//  dataAnalytics
// }

export const courses = [
  { ...graphicsData },

  { ...fullstack },
  // { ...ui },
  // { ...dataAnalytics },
];
