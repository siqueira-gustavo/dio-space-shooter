//função de descer
export function moveDown(yourShip) {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if (topPosition === "510px") {
        return
    } else {
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = `${position}px`;
    }
}