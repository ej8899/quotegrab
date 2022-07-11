//
// original project: https://freshman.tech/random-quote-machine/
//
// learning objectives: 
// 1. Fetching API provided data 
// 2. dom manipulation practice
//

const spinner = document.querySelector('#js-spinner');
const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
  spinner.classList.remove('hidden');
  newQuoteButton.disabled = true;

  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayQuote(json.message);
		setTweetButton(json.message);
  } catch {
    alert('Failed to fetch new quote');
  } finally {
    newQuoteButton.disabled = false;
    spinner.classList.add('hidden');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

getQuote();