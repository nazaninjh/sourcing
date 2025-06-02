import AddressIcon from "../icons/address.icon";
import MailIcon from "../icons/mail.icon";
import PhoneIcon from "../icons/phone.icon";
import texts from "./footer.json";

export default function useContent() {
  const content = {
    beigi: {
      heading: "",
      items: [
        {
          title: texts.mail.title,
          addres: texts.mail.address,
          icon: <MailIcon />,
          linkAddress: "mailto:office@beigigroup.com",
        },
        {
          title: texts.address.title,
          addres: texts.address.address,
          icon: <AddressIcon />,
          linkAddress: `https://www.google.com/maps?q=${texts.address.address}`,
        },
        {
          title: texts.phone.title,
          addres: texts.phone.address,
          icon: <PhoneIcon />,
          linkAddress: `tel:${texts.phone.address}`,
        },
        {
          title: texts.availbale,
        },
      ],
    },
    media: {
      heading: texts.media,
      items: [
        {
          title: texts.linkedin.title,
          addres: texts.linkedin.linkAdress,
          icon: texts.linkedin.icon,
        },
        {
          title: texts.insta.title,
          icon: texts.insta.icon,
        },
        {
          title: texts.facebook.title,
          icon: texts.facebook.icon,
        },
        {
          title: texts.twitter.title,
          icon: texts.twitter.icon,
        },
      ],
    },
  };

  return content;
}
