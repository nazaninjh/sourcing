import React, { ReactNode } from "react";
import ParticipantIcon from "./assets/icons/participant.icon";
import PriceIcon from "./assets/icons/price.icon";

export const iconMap: {
  participant: ReactNode;
  price: ReactNode;
} = {
  participant: <ParticipantIcon width={20} height={20} />,
  price: <PriceIcon width={20} height={20} />,
};
