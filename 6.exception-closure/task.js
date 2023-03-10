// Задача №1

function parseCount(value) {
    let parsedNumber = Number.parseInt(value)
    if (isNaN(parsedNumber)) {
        throw new Error('Невалидное значение');
    } else {
        return parsedNumber;
    }
}

function validateCount(value) {
    try {
        return parseCount(value)
    } catch (e) {
        return e;
    }
}

// Задача №2

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    getPerimeter() {
        return Number(this.a + this.b + this.c);
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    } catch (e) {
        const errorMessage = 'Ошибка! Треугольник не существует';
        return {
            getPerimeter() {
                return errorMessage;
            },
            getArea() {
                return errorMessage;
            }
        }
    }
}