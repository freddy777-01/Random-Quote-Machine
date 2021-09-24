const quote_url= 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let allQuotes;
const fetchQuote=()=>{
    axios.get(quote_url)
      .then(function (response) {
        allQuotes = response.data.quotes
        // console.log(response.data.quotes);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
          document.querySelector('main #text').innerHTML =allQuotes[Math.floor(Math.random()*allQuotes.length)].quote;
          document.querySelector('main #author').innerHTML =allQuotes[Math.floor(Math.random()*allQuotes.length)].author;
        // console.log(Math.floor(Math.random()*allQuotes.length));
      });
}
fetchQuote();