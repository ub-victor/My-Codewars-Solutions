window.onload = function(){
let contact = {
    email_1: "victoireushindi371@gmail.com",
    email_2: "rsmurphy@briazz.com"
};
for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(key);
    console.log(contact[key]);
}
//actualy we can improve this code by using this structure
/*for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(`${key}: ${contact[key]}`);
}
output:
    email_1: victoire
    email_2: Bihame
*/
}
