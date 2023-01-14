const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll(`section[data-scroll-spy]`);

  const callback = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      // console.log(id);
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    // root
    // rootMargin: "-250px",
    threshold: 0.5,
  });

  $sections.forEach((el) => observer.observe(el));
}
