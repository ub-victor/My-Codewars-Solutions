let contact = {
  name: "Alice",
  notes: "Meeting at 3 PM"
};

// The 'notes' property exists, so this will log:
if ("notes" in contact) {
    console.log(contact.notes);
}
