document.addEventListener("DOMContentLoaded", () => {
    const users = [
      { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" },
      { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv" },
      { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net" },
      { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org" },
      { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca" },
      { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
      { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
      { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
      { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io" },
      { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" }
    ];
  
    const container = document.getElementById("userContainer");
  
    users.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
      `;
  
      container.appendChild(card);
    });
  });
  