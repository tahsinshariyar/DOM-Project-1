document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#new-quote');
    let quote = document.querySelector('.quote');
    let person = document.querySelector('.person');
    
    const quotes = [
        {
            quote: `“Be yourself; everyone else is already taken.”`,
            person: `Oscar Wilde`
        }, {
            quote: `“When you need a miracle, be miracle.”`,
            person: `Steve Jobs`
        },{
            quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
            person: ` Albert Einstein`
        },{
            quote: `“So many books, so little time.”`,
            person: `Frank Zappa`
        },{
            quote: `“A room without books is like a body without a soul.”`,
            person: `Marcus Tullius Cicero`
        },{
            quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
            person: `Bernard M. Baruch`
        },{
            quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
            person: `Dr. Seusss`
        },{
            quote: `“Be the change that you wish to see in the world.”`,
            person: `Mahatma Gandhi`
        },
    ];
    
    btn.addEventListener('click', function () {
        let random = Math.floor(Math.random() * quotes.length);
    
        quote.innerText = quotes[random].quote;
        person.innerText = quotes[random].person;
    });
});
