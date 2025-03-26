const calculator = (operator, ...numbers) => {
    switch (operator) {
      case "+":
        return numbers.reduce((a, b) => a + b);
      case "-":
        return numbers.reduce((a, b) => a - b);
      case "*":
        return numbers.reduce((a, b) => a * b);
      case "/":
        return numbers.reduce((a, b) => a / b);
      case "%":
        return numbers.reduce((a, b) => a % b);
      default:
        return "Error Bang";
    }
  };
  
  console.log("Hasil Penjumlahan", calculator("+", 20, 20, 20));
  console.log("Hasil Pengurangan:", calculator("-", 50, 10, 5));
  console.log("Hasil Perkalian:", calculator("*", 2, 3, 4));
  console.log("Hasil Pembagian:", calculator("/", 100, 2, 5));
  console.log("Hasil Modulus:", calculator("%", 10, 3));
  
  