import { test } from "@jest/globals"
import { Calculator } from "./calc.js"

test("add test", () => {
    let calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
});

test("subtract test", () => {
    let calc = new Calculator();
    expect(calc.subtract(10, 5)).toBe(5);
});

test("multiply test", () => {
    let calc = new Calculator();
    expect(calc.multiply(2, 7)).toBe(14);
});

test("divide test", () => {
    let calc = new Calculator();
    expect(calc.divide(12, 3)).toBe(4);
});