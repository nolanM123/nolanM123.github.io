export function animDots() {
    $(".dots").each(function () {
        const canvas = this;
        const ctx = canvas.getContext("2d");
        const maxDist = 120;
        const decay = 0.2;
        let dots = [];
        let mouse = { x: 0, y: 0 };
        let numPoints;

        function resize() {
            const { width, height } = canvas.getBoundingClientRect();
            canvas.width = width;
            canvas.height = height;

            numPoints = (width * height) / 4096;
            dots = Array.from({ length: numPoints }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 1.2,
                vy: (Math.random() - 0.5) * 1.2,
            }));
        }

        function draw() {
            const { width, height } = canvas;
            const mx = mouse.x * width;
            const my = mouse.y * height;

            ctx.clearRect(0, 0, width, height);

            dots.forEach((a, i) => {
                // Draw lines between dots close to each other
                for (let j = i + 1; j < dots.length; j++) {
                    const b = dots[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < maxDist) {
                        ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / maxDist) * decay})`;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }

                // Draw line from dot to mouse if close
                const dxm = mx - a.x;
                const dym = my - a.y;
                const distMouse = Math.hypot(dxm, dym);
                if (distMouse < maxDist) {
                    ctx.strokeStyle = `rgba(255,255,255,${(1 - distMouse / maxDist) * decay})`;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(mx, my);
                    ctx.stroke();
                }

                // Move dot and bounce on edges
                a.x += a.vx;
                if (a.x < 0 || a.x > width) a.vx *= -1;

                a.y += a.vy;
                if (a.y < 0 || a.y > height) a.vy *= -1;
            });

            requestAnimationFrame(draw);
        }

        // Update mouse position normalized to canvas
        $(window).on("mousemove", e => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = (e.pageX - rect.left) / rect.width;
            mouse.y = (e.pageY - rect.top) / rect.height;
        });

        $(window).on("resize", resize);

        resize();
        draw();
    });
}
