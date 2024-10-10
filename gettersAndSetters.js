class Rectangle {
    constructor(width, height) {
        this._width = width; 
        this._height = height; 
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Setter for width
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth; 
        } else {
            console.error("Width must be a positive Number");
        }
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Setter for height
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight; 
        } else {
            console.error("Height must be a positive Number");
        }
    }
}

const rectangle = new Rectangle(3, 4);

// Now you can access width and height using the getters
console.log(rectangle.width);  // Logs: 3
console.log(rectangle.height); // Logs: 4
