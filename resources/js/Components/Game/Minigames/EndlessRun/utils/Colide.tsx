export function elementsColliding(el1: React.RefObject<any>, el2: React.RefObject<any>) {
    const a = el1.current?.getBoundingClientRect();
    const b = el2.current?.getBoundingClientRect();

    if (a && b) {
        const horizontalCollision =
            b.left < a.right &&
            b.right > a.left;

        const verticalCollision =
            b.top < a.bottom &&
            b.bottom > a.top;

        if (horizontalCollision && verticalCollision) {
            return true;
        }
    }

    return false;
}