document.addEventListener("DOMContentLoaded", function() {
    const heartsDiv = document.getElementById("hearts");

    function createHeart() {
        const heart = document.createElement("span");
        heart.innerText = "❤";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = Math.random() * 100 + "%";
        heart.style.opacity = 0;
        heart.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
        heart.style.color = `hsl(${Math.random() * 360}, 70%, 70%)`;
        document.body.appendChild(heart);
        return heart;
    }

    function animateHearts() {
        for (let i = 0; i < 20; i++) {
            const heart = createHeart();
            heart.animate([
                { opacity: 0, transform: 'translateY(0)' },
                { opacity: 1, transform: 'translateY(-100px)' },
                { opacity: 0, transform: 'translateY(-200px)' }
            ], {
                duration: 3000,
                iterations: 1,
                easing: 'ease-in-out'
            });
            setTimeout(() => heart.remove(), 3000);
        }
    }

    setInterval(animateHearts, 1000);
});

function askSecondQuestion() {
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('surprise').style.display = 'block';
}

function handleAnswer(isExcited) {
    document.getElementById('surprise').style.display = 'none';
    if (isExcited) {
        document.getElementById('message').style.display = 'block';
    } else {
        document.getElementById('goodbye').style.display = 'block';
    }
}
