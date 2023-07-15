var quotes =[

    {
        quoteName : `"It's not what happens to you, but how you react to it that matters."`,
        authorName :'"-- Epictetus"'
    },
    
    {
        quoteName :' "Be yourself; everyone else is already taken."',
        authorName :'"-- Oscar Wilde"'
    },
    {
        quoteName : `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe"`,
        authorName :'"-- Albert Einstein"'
    },
    {
        quoteName : '"You only live once, but if you do it right, once is enough."',
        authorName :'"-- Mae West"'
    },
    {
        quoteName : '"Be the change that you wish to see in the world."',
        authorName :'"-- Mahatma Gandhi"'
    }
]

  
    // ! gets random quotes without repetition
    var currentRandom;
    function getRandomNumber() {
      var randomQuotes = Math.floor(Math.random() * quotes.length);
      if(randomQuotes === currentRandom) {
        randomQuotes = Math.floor(Math.random() * quotes.length);
      }
      currentRandom = randomQuotes;
      return randomQuotes;
    }
  
    // ! Add quote in inner HTML
    var quoteDesc = document.getElementById("quoteName");
    var author = document.getElementById("authorName");

    function addQuote() {
      document.getElementById('bg-color').style.backgroundColor = "#000"
      var randomQuotes = quotes[getRandomNumber()];
      quoteDesc.innerHTML = randomQuotes.quoteName;
      author.innerHTML = randomQuotes.authorName;

    }
  
  
  