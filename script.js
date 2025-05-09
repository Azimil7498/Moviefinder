function searchMovie() {
    const movieName = document.getElementById("input").value.trim();
    const result = document.getElementById("result");
  
    if (!movieName) {
      result.innerHTML = `<p>Please enter a movie name.</p>`;
      return;
    }
  
    const apiKey = "9b405356";
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          result.innerHTML = `
            <h2>${data.Title}</h2>
            <img src="${data.Poster}" alt="Poster">
            <p><strong>Year:</strong> ${data.Year}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
          `;
        } else {
          result.innerHTML = `<p>Movie not found. Try again!</p>`;
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        result.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
      });
  }
  
