//função de subir
export function moveUp(yourShip) {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if (topPosition === "0px") {
        return
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;
    }
}