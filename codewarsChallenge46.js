window.onload = function(){
    const student = {
        name: 'Richard kalehoff',
        guardian: 'Mr. kalehoff'
    };
    const teacher = {
        name: 'Mrs. Wilson',
        room: 'N231'
    };

    let message = student.name + " please see " + teacher.name+ " in " + teacher.room +
    " to pick up your card .";
    console.log(message);

}