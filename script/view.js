import createElement from "../utils/helperFunction.js";

const container = document.getElementById("viewContainer");

const data = JSON.parse(localStorage.getItem("selectedDestination"));

if (data) {
  // Main card container
  const card = createElement("div", null, "view-card");

  // Image
  const img = document.createElement("img");
  img.src = data.img;
  img.alt = data.title;

  // Content wrapper
  const content = createElement("div", null, "view-content");

  // Title
  const title = createElement("h2", data.title);

  // Description
  const desc = createElement("p", data.desc);

  // Price
  const price = createElement("div", `₹${data.price} / night`, "price");

  const buttonContainer = createElement("div", null, "buttonContainer");

  // Button
  const button = createElement("button", "Book Now", "btn");

  button.addEventListener("click", () => {
    alert(`Booking for ${data.title}`);
  });

  // Back button
  const back = createElement("a", "← Back to Home", "back-btn");
  back.href = "index.html";

  // Append content
  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(price);
  content.appendChild(buttonContainer);

  // Append to card
  card.appendChild(img);
  card.appendChild(content);

  // Append to container
  container.appendChild(card);
  buttonContainer.appendChild(button);
  buttonContainer.appendChild(back);
} else {
  const error = createElement("h2", "No Data Found");
  error.style.textAlign = "center";
  container.appendChild(error);
}
