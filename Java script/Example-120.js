//JavaScript: Check whether a point lies strictly inside a given circle

function check_a_point(a, b, x, y, r) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}

console.log(check_a_point(0, 0, 2, 4, 6));
console.log(check_a_point(0, 0, 6, 8, 6));
