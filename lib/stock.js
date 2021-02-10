// TODO: Autocomplete the input with AJAX calls.
// get the element

const searchBox = document.querySelector('#search');
const results = document.querySelector('.list-group');
// add the event listener
searchBox.addEventListener('keyup', (event) => {
  event.preventDefault();
    fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=${searchBox.value}&region=US`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3a3fb97506msh8b49abdff28130fp180f5bjsn82a2b01e5bad",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then((data) => {
      results.innerHTML = "";
      console.log(data);
      const quotes = data.quotes.slice(0, 5);
      const shortnames = quotes.map( quote => quote.shortname);
      shortnames.forEach((name) => {
        results.insertAdjacentHTML("beforeend", `<a href="#" class="list-group-item list-group-item-action">${name}</a>`);
      });
    })
    .catch(err => {
      console.error(err);
    });

    // .then((data) => {
    //   results.innerHTML = "";
    //   const topTen = data.words.slice(0, 10);
    //   topTen.forEach((word) => {
    //     results.insertAdjacentHTML("beforeend", `<a href="https://www.dndbeyond.com/search?q=${word}" class="list-group-item list-group-item-action">${word}</a>`);
    //   });
    // });
});
// fetch data
