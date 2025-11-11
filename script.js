// Array of food facts
const foodFacts = [
    "Did you know? The first pizza was made in Naples, Italy in 1889!",
    "Fun fact: The world's most expensive coffee, Kopi Luwak, is made from coffee beans eaten by civet cats.",
    "Chocolate milk was first invented in Jamaica in 1687!",
    "Ice cream was so expensive in the 18th century that only the rich could afford it!",
    "Bananas are berries, but strawberries are not!"
];

// Select the button and text element
const foodFactBtn = document.getElementById('foodFactBtn');
const foodFactText = document.getElementById('foodFactText');

// Function to show a random food fact
foodFactBtn.addEventListener('click', function() {
    const randomFact = foodFacts[Math.floor(Math.random() * foodFacts.length)];
    foodFactText.textContent = randomFact;
});
