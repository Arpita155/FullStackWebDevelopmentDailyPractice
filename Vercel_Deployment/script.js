// Array holding local data objects
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Make each day your masterpiece.", author: "John Wooden" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "Intelligence is the ability to adapt to change.", author: "Stephen Hawking" },
    { text: "Don't count the days, make the days count.", author: "Muhammad Ali" }
];

// Reference HTML layout hooks
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Logic to pick a random element index
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    // Inject updating values dynamically into DOM nodes
    quoteText.textContent = `"${selectedQuote.text}"`;
    quoteAuthor.textContent = `- ${selectedQuote.author}`;
}

// Trigger initialization event handler on button click
newQuoteBtn.addEventListener("click", generateQuote);
