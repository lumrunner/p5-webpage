function Snake(xInit, yInit) {
    this.x = xInit;
    this.y = yInit;

    this.show = function () {
        rect(this.x, this.y, scl, scl);
    }
}
