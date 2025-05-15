// Initialize contact object with various email types
let contact = {
  email: {
    work: "john.doe@company.com",
    private: "john.doe@gmail.com"
  }
};

// Add a new 'other' email
contact.email.other = "john.doe@another.com";

// Log all email addresses
console.log(contact.email.work);     // "john.doe@company.com"
console.log(contact.email.private);  // "john.doe@gmail.com"
console.log(contact.email.other);    // "john.doe@another.com"