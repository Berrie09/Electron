fetch("https://official-joke-api.appspot.com/random_ten")
  .then(response => response.json())
  .then(jokes => {
    let output = "";
    jokes.forEach(joke => {
      output += `
        <div>
          <p id='joke'>${joke.setup}</p>
          <p>- ${joke.punchline}</p>
        </div>
      `;
    });
    document.getElementById("jokes").innerHTML = output;
  })
  .catch(error => {
    console.error("Error:", error);
  });