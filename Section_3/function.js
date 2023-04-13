function fruitProcessor(apples, oranges) {
    // console.log(apple, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} orannges.`;
    return juice;
}

fruitProcessor(5,0); // musim to ulo6it do premenej aby som videl vysledok 

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

// tie6 to mozem hned vytlacit 
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(5,2);
console.log(appleOrangeJuice);