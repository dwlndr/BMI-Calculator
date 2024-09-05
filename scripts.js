document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const resultDiv = document.querySelector(".result");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Ambil nilai dari input user
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);
  
      // Validasi input
      if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = `<p>Please enter valid weight and height!</p>`;
        return;
      }
  
      // Hitung BMI: Berat Badan (KG) / (Tinggi Badan (CM) / 100) ^ 2
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
  
      // Tentukan status BMI berdasarkan kategori
      let bmiCategory = "";
      if (bmi < 18.5) {
        bmiCategory = "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Normal weight";
      } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = "Overweight";
      } else {
        bmiCategory = "Obesity";
      }
  
      // Tampilkan hasil
      resultDiv.innerHTML = `<p>Your BMI is <b>${bmi.toFixed(1)}</b> which means you are <b>${bmiCategory}</b>.</p>`;
    });
  });
  