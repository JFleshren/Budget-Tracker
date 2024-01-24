const Handlebars = require('handlebars')
// Helper function to format currency
Handlebars.registerHelper('formatCurrency', function (value) {
  // Assume value is a number representing a currency amount
  return `$${value.toFixed(2)}`
})
// Helper function to display a message based on a condition
Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
  return arg1 === arg2 ? options.fn(this) : options.inverse(this)
})

// Add as needed

module.exports = Handlebars;

// Addded helper functions below
// {{formatCurrency totalAmount}}

//  {{#ifEquals userRole 'admin'}}
//  <p>Welcome, Admin!</p>
//  {{else}}
//  <p>Welcome, User!</p>
//  {{/ifEquals}}
