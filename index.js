const canvas =  /** @type {HTMLCanvasElement} */ (document.querySelector('#myCanvas'))
const ctx = canvas.getContext('2d')

function drawBranches(context, startX, startY, trunkWidth, level) {
    if (level < 12) {
        const changeX = 100 / (level + 1);
        const changeY = 200 / (level + 1);

        const topRightX = startX + Math.random() * changeX;
        const topRightY = startY - Math.random() * changeY;

        const topLeftX = startX - Math.random() * changeX;
        const topLeftY = startY - Math.random() * changeY;

        // рисуем правую ветвь  
        ctx.beginPath();
        ctx.moveTo(startX + trunkWidth / 4, startY);
        ctx.quadraticCurveTo(startX + trunkWidth / 4, startY - trunkWidth, topRightX, topRightY);
        ctx.lineWidth = trunkWidth;
        ctx.lineCap = "round";
        ctx.stroke();

        // рисуем левую ветвь  
        ctx.beginPath();
        ctx.moveTo(startX - trunkWidth / 4, startY);
        ctx.quadraticCurveTo(startX - trunkWidth / 4, startY - trunkWidth, topLeftX, topLeftY);
        ctx.lineWidth = trunkWidth;
        ctx.lineCap = "round";
        ctx.stroke();

        drawBranches(context, topRightX, topRightY, trunkWidth * 0.7, level + 1);
        drawBranches(context, topLeftX, topLeftY, trunkWidth * 0.7, level + 1);
    }
}

for (let n = 1; n < 10; n++) {
    const startPosition = n * (canvas.width / 10) + Math.random() * 50;
    drawBranches(ctx, startPosition, canvas.height, 50, 0);
}