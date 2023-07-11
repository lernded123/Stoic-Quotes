document.querySelector("button").addEventListener("click", getQuote);

function getQuote() {
  fetch("https://api.themotivate365.com/stoic-quote")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.author === "Marcus Aurelius") {
        document.querySelector("img").src = "images/MarcusAurelius.jpg";
      } else if (data.author === "Seneca") {
        document.querySelector("img").src = "images/Senaca.jpg";
      } else if (data.author === "Ryan Holiday") {
        document.querySelector("img").src = "images/RyanHoliday.jpg";
      } else if (data.author === "David Goggins") {
        document.querySelector("img").src = "images/DavidGoggins.jpg";
      } else if (data.author === "Charlie Munger") {
        document.querySelector("img").src = "images/CharlieMunger.webp";
      } else if (data.author === "Epictetus") {
        document.querySelector("img").src = "images/Epictetus.jpg";
      } else if (data.author === "Viktor Frankl") {
        document.querySelector("img").src = "images/ViktorFrankl.jpg";
      } else if (data.author === "Robert Greene") {
        document.querySelector("img").src = "images/rg.jpg";
      } else {
        document.querySelector("img").src = "images/Stoic.webp";
      }
      document.querySelector("h2").innerText = data.author;
      document.querySelector("h3").innerText = data.quote;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
