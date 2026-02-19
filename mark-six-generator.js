function MarkSixGenerator()
{
    this.result = [];

    /**
     * Generate 6 random numbers and put into result.
     */
    this.generate = function () {
        while (this.result.length < 6) {
            // Get a random integer from 1 to 49.
            var num = Math.floor(Math.random() * 49) + 1;
            // Skip for duplicated number.
            if (this.result.indexOf(num) >= 0) {
                continue;
            }
            this.result.push(num);
        }
        this.result.sort((a, b) => a - b);
    }
}

var generator = new MarkSixGenerator();

$(function() {
    generator.generate();
    $('#result').text(generator.result.join(' '));

    // Refresh button click handler
    $('#refresh-btn').click(function() {
        generator.generate();
        $('#result').text(generator.result.join(' '));
    });
});
