function convertCurrency() {
      const amount = document.getElementById('amount').value;
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;
      const result = document.getElementById('result');

      if (!amount) {
        result.innerText = "Please enter an amount.";
        return;
      }

      result.innerText = `Converting ${amount} from ${from} to ${to}...`; // Placeholder action
    }

    // Listen for Enter key
    document.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        convertCurrency();
      }
    });