const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const heartPointsCount = random(50,80);
        const traceCount = random(10,20);

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        function getRandomColor() { 
            let r = random(209, 209);
            let g = random(70, 70);
            let b = random(227, 227);
            return `rgba(${r}, ${g}, ${b}, 0.8)`;
        }

        let particles = [];
        let ripples = [];

        for (let i = 0; i < heartPointsCount; i++) {
            let x = random(0, canvas.width);
            let y = random(0, canvas.height);
            particles[i] = {
                x: x,
                y: y,
                vx: (random(-1, 1)) * 2,
                vy: (random(-1, 1)) * 2,
                R: 5,
                speed: random(1, 3),
                color: getRandomColor(),
                trace: []
            };
            for (let k = 0; k < traceCount; k++) {
                particles[i].trace[k] = { x: x, y: y };
            }
        }

        function createRipple(x, y) {
            ripples.push({
                x: x,
                y: y,
                radius: 2,
                alpha: 1
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];

                p.x += p.vx * p.speed;
                p.y += p.vy * p.speed;

                if (p.x < 0 || p.x > canvas.width) {
                    p.vx *= -1;
                    createRipple(p.x, p.y);
                }
                if (p.y < 0 || p.y > canvas.height) {
                    p.vy *= -1;
                    createRipple(p.x, p.y);
                }

                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.R, 0, Math.PI * 2);
                ctx.fill();
            }

            for (let i = 0; i < ripples.length; i++) {
                let r = ripples[i];
                ctx.strokeStyle = `rgba(255, 235, 238, ${r.alpha})`;
                ctx.beginPath();
                ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                ctx.stroke();
                r.radius += 1;
                r.alpha -= 0.02;
                if (r.alpha <= 0) {
                    ripples.splice(i, 1);
                    i--;
                }
            }

            requestAnimationFrame(draw);
        }

        draw();
