let elText = document.querySelector("span");
let numbers = [3.02, -3.65, 5, -9];
let normalizeNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    let result = Math.abs(Math.round(element));
    normalizeNumbers.push(`${result}`);
}
elText.textContent = normalizeNumbers;
