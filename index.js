const quoteEl = document.getElementById('quoteText')
const authorEl = document.getElementById('authorName')
const buttonEl = document.getElementById('btn')

const URL = "https://api.quotable.io/random";

async function getQuote(){

    try {
        buttonEl.innerText ='Loading..'
        buttonEl.disabled = true
        quoteEl.innerHTML = 'Updating'
        authorEl.innerHTML = 'Updating'
         const response = await fetch(URL);
         const data = await response.json();
         const quoteContent = data.content;
         const author = data.author;
         buttonEl.innerText = 'GET QUOTE'
         buttonEl.disabled = false;
         quoteEl.innerText = quoteContent;
         authorEl.innerText = author;
        
    } catch (error) {
        console.log(error)
        quoteEl.innerText = 'An error occurred, try again later'
        buttonEl.disabled = false;
        
    }
 }
getQuote();
   

buttonEl.addEventListener("click", getQuote);