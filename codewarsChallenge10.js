window.onload = function(){
let contact = {
    "first name": "Ronald"
};
contact["first name"] = "Tim";
//contact.first name = "Tim";    // SyntaxError: Unexpected identifier
//contact."first name" = "Tim";    // SyntaxError: Unexpected string

console.log(contact["first name"]);    // Tim
// Verify the update and log the entire object in a readable format  
console.log(JSON.stringify(contact, null, 2)); // Converts the contact object to a JSON string with 2-space indentation for better readability  
}