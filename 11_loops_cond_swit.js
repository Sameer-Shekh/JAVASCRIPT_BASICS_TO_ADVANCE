// IT WILL RUN ON BROWSER
let total = 0;
let running = true;

while (running) {
  const choice = parseInt(
    prompt(
      "🛒 Grocery Menu:\n" +
      "1. Milk - ₹20\n" +
      "2. Bread - ₹25\n" +
      "3. Eggs - ₹10\n" +
      "4. Rice - ₹50\n" +
      "5. Exit\n" +
      "Enter item number (1-5):"
    )
  );

  switch (choice) {
    case 1: {
      let qty = parseInt(prompt("Enter quantity of Milk:"));
      total += qty * 20;
      alert(`✅ Added ₹${qty * 20} to your bill.`);
      break;
    }

    case 2: {
      let qty = parseInt(prompt("Enter quantity of Bread:"));
      total += qty * 25;
      alert(`✅ Added ₹${qty * 25} to your bill.`);
      break;
    }

    case 3: {
      let qty = parseInt(prompt("Enter quantity of Eggs:"));
      total += qty * 10;
      alert(`✅ Added ₹${qty * 10} to your bill.`);
      break;
    }

    case 4: {
      let qty = parseInt(prompt("Enter quantity of Rice:"));
      total += qty * 50;
      alert(`✅ Added ₹${qty * 50} to your bill.`);
      break;
    }

    case 5:
      alert("🧾 Thank you! Your total bill is ₹" + total);
      running = false;
      break;

    default:
      alert("❌ Invalid choice. Please enter a number between 1 and 5.");
  }
}
