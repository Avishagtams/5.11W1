// Exercise 9: CPU Model Info
// Goal: print the model of each CPU core.
// Required: os.cpus() - returns an array of CPU info objects (cpu.model).
// os.cpus() is synchronous (no I/O), but write the surrounding flow in callback style
// (e.g. a function that takes a callback and passes the result to it).
//
// Expected output:
//   CPU 0: Intel(R) Core(TM) i7-9750H CPU
//   CPU 1: Intel(R) Core(TM) i7-9750H CPU
//   ...
//
// Run: node ex09.js

const os = require("os");

// write your code here
function getCpuModels(callback) {
  const cpus = os.cpus();
  const models = cpus.map(function (cpu) {
    return cpu.model;
  });
  callback(null, models);
}

getCpuModels(function (err, models) {
  if (err) {
    console.log("Error:", err.message);
    return;
  }

  models.forEach(function (model, index) {
    console.log("CPU " + index + ": " + model);
  });
});