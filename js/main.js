var quotes = [
    {'author': 'Khaled Hosseini',
     'quote': 'But better to get hurt by the truth than comforted with a lie.'
    },
    {'author': 'E.E. Cummings',
     'quote': 'It takes courage to grow up and become who you really are.'
    },
    {'author': 'Andre Gide, Autumn Leaves',
     'quote': 'It is better to be hated for what you are than to be loved for what you are not..'
    },
    {'author': 'J.M. Barrie, Peter Pan',
     'quote': 'To die will be an awfully big adventure.'
    },
    {'author': 'Oscar Wilde',
     'quote': 'The truth is rarely pure and never simple'
    },
    {'author': 'Albert Einstein',
     'quote': 'Anyone who has never made a mistake has never tried anything new.'
    },
    {'author': 'Mark Twain',
     'quote': 'A lie can travel half way around the world while the truth is putting on its shoes.'
    },
    {'author': ' Ray Bradbury',
     'quote': `You don't have to burn books to destroy a culture. Just get people to stop reading them.`

    },
    {'author': ' Ahmed Ehab',
     'quote': `You sometimes need to take a break to just {Breathe} `

    },
];

  var lastRandomNum = "";
  function randomGen (){
    return  Math.floor(Math.random() * quotes.length) ; // mn 0 l quote.length - 1 . we kda kda el quote btbd2 mn el 0 ("INDEX BASED")
   
  }
  function randomCheck(){           // b3ml call ll randomGen()--> we low tl3 nfs el rkm el fat byd5l while y3ml call tany ll randomGen() 
    var newRandomNum = randomGen();
    while (newRandomNum === lastRandomNum) { // first attempt === undefined fa m4 htt4t8l 
      newRandomNum = randomGen();
    }
    lastRandomNum = newRandomNum;
    return newRandomNum;
   
  }
  

  function test() {
    x = randomCheck();
    document.querySelector('#quoteText').textContent = `"${quotes[x].quote}"`;
    document.querySelector('#quoteAuthor').textContent = `"${quotes[x].author}"`;
    
    }





// ===================================== Another solution  no repeating quotes
// let quotes = [
//   {
//     author: "Khaled Hosseini",
//     quote: "But better to get hurt by the truth than comforted with a lie.",
//   },
//   {
//     author: "E.E. Cummings",
//     quote: "It takes courage to grow up and become who you really are.",
//   },
//   {
//     author: "Andre Gide, Autumn Leaves",
//     quote:
//       "It is better to be hated for what you are than to be loved for what you are not.",
//   },
//   {
//     author: "J.M. Barrie, Peter Pan",
//     quote: "To die will be an awfully big adventure.",
//   },
//   { 
//     author: "Oscar Wilde",
//     quote: "The truth is rarely pure and never simple" },
//   {
//     author: "Albert Einstein",
//     quote: "Anyone who has never made a mistake has never tried anything new.",
//   },
//   {
//     author: "Mark Twain",
//     quote:
//       "A lie can travel half way around the world while the truth is putting on its shoes.",
//   },
//   {
//     author: "Ray Bradbury",
//     quote: `You don't have to burn books to destroy a culture. Just get people to stop reading them.`,
//   },
// ];


// let remainingQuotes = [...quotes].sort(() => Math.random() - 0.5); 

// function test() {
//   if (remainingQuotes.length === 0) {
//     remainingQuotes = [...quotes].sort(() => Math.random() - 0.5); 
//   }

//   let selectedQuote = remainingQuotes.pop();
//   document.querySelector("#quoteText").textContent = `"${selectedQuote.quote}"`;
//   document.querySelector("#quoteAuthor").textContent = `"${selectedQuote.author}"`;
// }
