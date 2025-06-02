export default function scrollToTop() {
  if (document) {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}
