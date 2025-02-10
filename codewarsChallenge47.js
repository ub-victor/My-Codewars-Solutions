window.onload = function(){
    const student = {
        name: 'Richard kalehoff',
        guardian: 'Mr. kalehoff'
    };
    const teacher = {
        name: 'Mrs. Wilson',
        room: 'N231'
    };
    let note = teacher.name +',\n\n' +
    'please excuse ' + student.name + ".\n" +
    "He is recovering from the flu.\n\n"+
    "Thank you,\n"+
    student.guardian;

    console.log(note)

}