document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    
    // No button shakes and spawns evil faces when hovered
    noButton.addEventListener('mouseenter', function () {
        noButton.classList.add('shake');
        generateEvilFaces();
    });
    
    // No button stops shaking when the mouse leaves
    noButton.addEventListener('mouseleave', function () {
        noButton.classList.remove('shake');
    });

    // Yes button triggers confetti and music
    yesButton.addEventListener('click', function () {
        let content = document.getElementById("content");
        content.innerHTML = `
            <h1>❤️ Yay! Can’t wait for our date! ❤️</h1>
        `;
        confetti();
    });

    // Function to generate multiple evil face emojis
    function generateEvilFaces() {
        for (let i = 0; i < 5; i++) {
            let evilFace = document.createElement('div');
            evilFace.innerHTML = '😈';
            evilFace.classList.add('evil-face');
            document.body.appendChild(evilFace);

            let width = window.innerWidth;
            let height = window.innerHeight
            
            let x = clamp(Math.random() * width, 75, width - 75);
            let y = clamp(Math.random() * height, 75, height - 75);
            
            evilFace.style.left = `${x}px`;
            evilFace.style.top = `${y}px`;
            
            // Remove the emoji after 1 second
            setTimeout(() => {
                evilFace.remove();
            }, 1000);
        }
    }

    function clamp(value, min, max) {
        if (value < min) {
            return min;
        } else if (value > max) {
            return max;
        } else {
            return value;
        }
    }
});
