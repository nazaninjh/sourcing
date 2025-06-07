import { StaticImageData } from "next/image";
import project1 from "./assets/images/project1.webp";
import project1Desk from "./assets/images/project1-desk.webp";
import project2 from "./assets/images/project2.webp";
import project2Desk from "./assets/images/project2-desk.webp";
import { isMobile } from "react-device-detect";

export const imageMap: Record<string, StaticImageData> = {
  project1: isMobile ? project1 : project1Desk,
  project2: isMobile ? project2 : project2Desk,
};
