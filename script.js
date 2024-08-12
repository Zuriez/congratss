document.addEventListener("DOMContentLoaded", function() {
    const heartsDiv = document.getElementById("hearts");

    function createHeart() {
        const heart = document.createElement("span");
        heart.innerText = "❤";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = Math.random() * 100 + "%";
        heart.style.opacity = 0;
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
                duration: 2000,
                iterations: 1,
                easing: 'ease-in'
            });
            setTimeout(() => heart.remove(), 2000);
        }
    }

    setInterval(animateHearts, 1000);
});