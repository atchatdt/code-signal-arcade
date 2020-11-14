function maxMultiple(divisor, bound) {
    for (let i = bound; i > 0; i--) {
        if (bound % divisor == 0) {
            return bound;
        }
        bound--;
    }
}

function maxMultiple(divisor, bound) {
    return bound - (bound % divisor);
}