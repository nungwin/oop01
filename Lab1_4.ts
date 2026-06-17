let income: number = 50000;
let taxRate: number = 0.07;
let Tax: number =income*taxRate;
let Net: number =income - Tax;

console.log("---Tax Calculator Rrport---");
console.log("Gross income: %d",income);
console.log("Tax rate 7%");
console.log("Tax paid: %d",Tax);
console.log("Net income after tax: %d",Net);
console.log("----------------------------");