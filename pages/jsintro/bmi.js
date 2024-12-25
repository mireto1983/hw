function calculateBMI(weight, height) 
{ return weight / (height * height);

 }
 let heightInMeters = 1.75;
 let weightInKilograms = 70;
 let bmi = calculateBMI(weightInKilograms, heightInMeters);
 console.log(`Индексът на телесната маса (BMI) е: ${bmi.toFixed(2)}`);