const users = [
    	{ 
firstName: 'Alice', 
favoriteColor: 'Blue', 
personalQuote: 'Keep pushing' 
}, { 
firstName: 'Bob', 
favoriteColor: 'Green', 
personalQuote: 'Seize the day' 
}, { 
firstName: 'Carol', 
favoriteColor: 'Blue', 
personalQuote: 'Believe and achieve' 
},
    	// More user objects...
];

const blueUser = users.find(user => { 
return user.favoriteColor === "Blue"; 
});

console.log(blueUser);

// Logs the first user with favoriteColor as "Blue".

const blueLovers = users.filter(user => {
return user.favoriteColor === "Blue"
});

console.log(blueLovers);

// Logs an array of users with favoriteColor "Blue".

const quotesWithExclamation = users.map(user => { 
return `${user.personalQuote}!`
});

console.log(quotesWithExclamation);

// Adds "!" to each user's personal quote.

const totalQuoteLength = users.reduce((total, user) => { 
return total + user.personalQuote.length; 
}, 0); 

console.log(totalQuoteLength);

// Calculates total character count of all personalQuote strings.