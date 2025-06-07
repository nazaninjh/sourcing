import texts from "./assets/texts/bidding.json";
import OnGoingCardComponent from "./cards/onGoingCard.component";
import { iconMap } from "./iconMap";
import { imageMap } from "./imageMap";

import styles from "./bidding.module.scss";
export default function BiddingComponent() {
  // todo: add button to toggle projects
  return (
    <section className="wrapper">
      <p>{texts.title}</p>
      <div className={styles.container}>
        {texts["on-going"].map((item) => {
          return (
            <OnGoingCardComponent
              key={item.name}
              imgSrc={imageMap[item.img]}
              topStartTxts={{
                name: item.name,
                competitionCategory: item.competitionCategory,
                categoryName: item.categoryName,
                category: item.category,
              }}
              bottomTxts={{
                participantName: item.participant.participantName,
                participantNum: item.participant.participantNum,
                participantUnit: item.participant.participantUnit,
                priceName: item.price.priceName,
                priceNum: item.price.priceNum,
                priceUnit: item.price.priceUnit,
                icon: {
                  price: iconMap[item.price.icon as "price"],
                  participant: iconMap[item.participant.icon as "participant"],
                },
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
