        var div = document.querySelector('.test')
        var left = 0
        var updateLeft = function () {
            div.classList.add('right')
            window.setTimeout(function () { // pour gerer une opérations tous les x millisecondes ici touts les 16 millisecondes
                requestAnimationFrame(function () {
                    div.classList.remove('right')
                    window.setTimeout(function () {
                        requestAnimationFrame(updateLeft)
                    }, 3000)
                })  
            }, 3000)
        }
        requestAnimationFrame(updateLeft)

                document.onmousemove = animateCircles;

        var colors = ['#0FEFBA','#EFEF92','#EF73D5'];

        function animateCircles (event) {
            var circle = document.createElement("div");
            circle.setAttribute("class", "circle");
            document.body.appendChild(circle);

            circle.style.left = event.clientX + 'px';
            circle.style.top = event.clientY + 'px';

            var color = colors[Math.floor(Math.random() * colors.length)];
            circle.style.borderColor = color;

            circle.style.transition = "all 0.5s linear 0s";

            circle.style.left = circle.offsetLeft - 20 + 'px';
            circle.style.top = circle.offsetTop - 20 + 'px';

            circle.style.width = "50px";
            circle.style.height = "50px";
            circle.style.borderWidth = "5px";
            circle.style.opacity = 0;
        }