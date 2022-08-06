async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    return data;
  }
  getQuotes();

let quote = getQuotes()
let citata = document.querySelector('.quote');
let avtor = document.querySelector('.author');

const getCitata = () => quote.then((value) => {
    let i = Math.floor(Math.random() * (value.length - 0 + 1)) + 0;
    citata.textContent = `"${value[i].text}"`;
    avtor.textContent = value[i].author;
  });
  getCitata()

const changeQuote = document.querySelector('.change-quote');
changeQuote.addEventListener('click', getCitata)