$(document).ready(function() {
    // Function to generate numbers
    function generateNumbers() {
        const numbers = [];
        while (numbers.length < 6) {
            const num = Math.floor(Math.random() * 49) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        numbers.sort((a, b) => a - b);
        $('#result').text(numbers.join(', '));
    }
    
    // Generate numbers on page load
    generateNumbers();
    
    // Refresh button click handler
    $('#refreshBtn').click(function() {
        generateNumbers();
    });
});