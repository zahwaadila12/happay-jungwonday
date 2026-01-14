const API_URL = "https://script.google.com/macros/s/AKfycbzjTx245mgLqxGe5YrbOa52vmV72QVx7uA8tmY3tGwmRsuya2QrZtrJSfWUyEIuWND5Ow/exec";

const cardsContainer = document.getElementById("cards");

cardsContainer.innerHTML = "<p style='text-align:center;'>Loading messages... 💌</p>";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    cardsContainer.innerHTML = "";

    data.reverse().forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${item.nama}</h3>
        <p>${item.pesan}</p>
      `;

      cardsContainer.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    cardsContainer.innerHTML = "<p style='text-align:center;color:red;'>Failed to load messages</p>";
  });

