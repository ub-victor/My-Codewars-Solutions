// Define a contact object without a notes property
let contact = {
  name: "John Doe",
  email: "john@example.com"
};

// Check if contact.notes is falsy (undefined, null, "", etc.)
if (!contact.notes) {
  contact.notes = "something really important";
}
console.log(contact);