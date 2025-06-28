export default function scrollToPosition(position: "top" | "bottom") {
  const customOptions = {
    top: position === "top" ? 0 : document.documentElement.scrollHeight,
    left: 0,
    behavior: "smooth" as ScrollBehavior,
  };
  if (document) {
    document.documentElement.scrollTo(customOptions);
  }
}
