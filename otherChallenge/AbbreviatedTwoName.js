const abbrevName = name =>{
    name.toUpperCase().split(' ').map(element => element[0]).join('.')
}


abbrevName("Ushindi Bihame Victoire"); // "U.B.V"


// Split results into an array of names
// Map help in looping through each element of the array
// Join return the result as a string with the first letter of each name separated by a dot