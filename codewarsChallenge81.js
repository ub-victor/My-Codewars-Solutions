// Initialize contact object with various email types
let contact = {
  email: {
    work: "john.doe@company.com",
    private: "john.doe@gmail.com",
    other: "john.doe@another.com"
  }
};

// Delete the 'work' email
delete contact.email.work;

// Log the remaining email addresses
console.log(contact.email.work);   // undefined
console.log(contact.email.private); // "john.doe@gmail.com"