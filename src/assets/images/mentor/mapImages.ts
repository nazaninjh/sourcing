import { StaticImageData } from "next/image";
import mentor1 from "@/assets/images/mentor/mentor1.webp";
import mentor2 from "@/assets/images/mentor/mentor2.webp";
import mentor3 from "@/assets/images/mentor/mentor3.webp";
import mentor4 from "@/assets/images/mentor/mentor4.webp";
import mentor5 from "@/assets/images/mentor/mentor5.webp";
import mentor6 from "@/assets/images/mentor/mentor6.webp";
import mentor7 from "@/assets/images/mentor/mentor7.webp";
import mentor8 from "@/assets/images/mentor/mentor8.webp";

import counseling from "@/assets/images/intro/counseling.webp";
import insurance from "@/assets/images/intro/insurance.webp";
import support from "@/assets/images/intro/support.webp";
import staff from "@/assets/images/intro/staff.webp";
import machines from "@/assets/images/intro/machines.webp";
import project from "@/assets/images/intro/project.webp";

import project1 from "@/assets/images/bidding/project1.webp";
import project1Desk from "@/assets/images/bidding/project1-desk.webp";
import project2 from "@/assets/images/bidding/project2.webp";
import project2Desk from "@/assets/images/bidding/project2-desk.webp";

import archive1 from "@/assets/images/archived/archive1.webp";
import { isMobile } from "react-device-detect";

const mentorImages: Record<string, StaticImageData> = {
  mentor1,
  mentor2,
  mentor3,
  mentor4,
  mentor5,
  mentor6,
  mentor7,
  mentor8,
};
const introImages: Record<string, StaticImageData> = {
  counseling,
  insurance,
  staff,
  support,
  machines,
  project,
};
const biddingImages: Record<string, StaticImageData> = {
  project1: isMobile ? project1 : project1Desk,
  project2: isMobile ? project2 : project2Desk,
};

const archivedImages: Record<string, StaticImageData> = {
  archive1,
};
const imageLists = {
  mentor: mentorImages,
  intro: introImages,
  bidding: biddingImages,
  archived: archivedImages,
};

type ImageListKey = keyof typeof imageLists;
//  imageLists[key] = value
type ImageKey<List extends ImageListKey> = keyof (typeof imageLists)[List];

export const mapImages = (
  listKey: ImageListKey,
  imageKey: ImageKey<ImageListKey>
): StaticImageData => {
  const imageList = imageLists[listKey];

  return imageList[imageKey];
};
