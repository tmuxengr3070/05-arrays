
// Set up event listener for when the user selects a genre
document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Variable to hold the list of movies
  let movieList = [];

  // Add movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList.push("Superbad", "Step Brothers", "Anchorman", "The Hangover");
  } else if (selectedGenre === "Action") {
    movieList.push("Mad Max: Fury Road", "John Wick", "Die Hard", "The Dark Knight");
  } else if (selectedGenre === "Drama") {
    movieList.push("The Shawshank Redemption", "Forrest Gump", "Fight Club", "The Godfather");
  } else if (selectedGenre === "Sci-Fi") {
    movieList.push("Inception", "The Matrix", "Interstellar", "Blade Runner 2049");
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}!`;
});
