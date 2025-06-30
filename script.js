function getDOMLevel(element) {
    if (element === null) {
        return 0; // Base case
    }
    return 1 + getDOMLevel(element.parentNode); // Recursive call
}

// Step 2: Select the element
let levelElement = document.getElementById('level');

// Step 3: Call the function and get the level
let levelCount = getDOMLevel(levelElement);

// Step 4: Display the result
alert(`The level of the element is: ${levelCount}`);