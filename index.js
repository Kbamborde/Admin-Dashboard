const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Show Sidebar:
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// Hide Sidebar:
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Change Theme:
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
  console.log(document.body.classList[0]);
  const themeColor = document.body.classList[0];
  if (document.body.classList) {
    localStorage.setItem("themObj", `${themeColor}`);
  } else {
    localStorage.setItem("themObj", "");
  }
});

window.addEventListener("load", () => {
  const item = localStorage.getItem("themObj");
  if (item === "dark-theme-variables") {
    document.body.className = item;
  }
});

// Fill ord(ers in Table:
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${
                  order.shipping === "Declined"
                    ? "danger"
                    : order.shipping === "Pending"
                    ? "warning"
                    : "primary"
                }">${order.shipping}</td>
                <td class="primary">Details</td>
  `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").append(tr);
});
