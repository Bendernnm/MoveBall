window.onload = function () {
    var field = document.getElementById('field');
    var ball = document.getElementById('ball');

    field.onclick = function (event) {
        var fieldCoordinatesWithBorder = this.getBoundingClientRect();

        var fieldCoordinates = {
            top: fieldCoordinatesWithBorder.top,// + this.clientTop,
            left: fieldCoordinatesWithBorder.left// + this.clientLeft
        };

        ballCoordinates = {
            top: event.clientY - fieldCoordinates.top - ball.height / 2,
            left: event.clientX - fieldCoordinates.left - ball.width / 2
        };

        console.log(ballCoordinates);

        if (ballCoordinates.top < 0) ballCoordinates.top = 0;

        if (ballCoordinates.left < 0) ballCoordinates.left = 0;

        if (ballCoordinates.left + ball.clientWidth > this.clientWidth)
            ballCoordinates.left = this.clientWidth - ball.clientWidth;

        if (ballCoordinates.top + ball.clientHeight > this.clientHeight)
            ballCoordinates.top = this.clientHeight - ball.clientHeight;

        ball.style.left = ballCoordinates.left + 'px';
        ball.style.top = ballCoordinates.top + 'px';
    }
};