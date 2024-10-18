document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded!');
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const colorButton = document.getElementById('colorButton');

    // Add click event listener to the button
    colorButton.addEventListener('click', changeBackgroundColor);

    // Function to change background color
    function changeBackgroundColor() {
        // Generate a random color
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        
        // Change the background color of the body
        document.body.style.backgroundColor = "#" + randomColor;
        
        // Change the button text color for better visibility
        colorButton.style.color = "#" + randomColor;
    }

    console.log('Color changing feature loaded!');
});