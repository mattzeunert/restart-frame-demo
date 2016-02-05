function calculateValue(){
    var value = 6;
    value = subtractTwo(value); // 6 - 2 = 4
    value = multiplyByThree(value); // 4 * 3 = 12
    value = addFour(value); // 12 + 4 = 16

    console.assert(value === 16, "Value wasn't 16.")

    return value;
}