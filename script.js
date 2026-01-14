const API_URL = "YOUR_API_URL_HERE";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const cards = document.getElementById("cards");

    data.reverse().forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${item.nama}</h3>
        <p>${item.pesan}</p>
      `;

      cards.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Gagal mengambil data", err);
  });