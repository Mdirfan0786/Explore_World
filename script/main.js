import destinations from "./data.js";
import createElement from "../utils/helperFunction.js";

const container = document.getElementById("cardContainer");
const toggleBtn = document.getElementById("loadMoreBtn");

let visibleCount = 4;
let expanded = false;

// render cards
function renderCards() {
  container.innerHTML = "";

  destinations.slice(0, visibleCount).forEach((item) => {
    const card = createElement("div", null, "card");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;

    const title = createElement("h3", item.title);
    const desc = createElement("p", item.desc);

    const footer = createElement("div", null, "card-footer");

    const price = createElement("span", `₹${item.price} / night`, "price");

    const button = createElement("button", "Book Now", "book-btn");

    // button click
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      alert(`Booking for ${item.title}`);
    });

    // card click for view page
    card.addEventListener("click", () => {
      localStorage.setItem("selectedDestination", JSON.stringify(item));
      window.location.href = "view.html";
    });

    footer.appendChild(price);
    footer.appendChild(button);

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(footer);

    container.appendChild(card);
  });
}

renderCards();

// Toggle button
toggleBtn.addEventListener("click", () => {
  if (!expanded) {
    visibleCount = destinations.length;
    toggleBtn.textContent = "Show Less";
  } else {
    visibleCount = 4;
    toggleBtn.textContent = "Show More";
  }

  expanded = !expanded;
  renderCards();
});
