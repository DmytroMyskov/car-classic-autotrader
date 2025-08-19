const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector("button");

  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach(i => {
      i.classList.remove("active");
      i.querySelector("button").textContent = "+";
    });

    if (!isActive) {
      item.classList.add("active");
      btn.textContent = "−";
    }
  });
});