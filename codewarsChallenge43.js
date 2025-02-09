window.onload = function() {
    var familyMembers = ['Victoire', 'Virgin', 'Vincent', 'Viviane', 'Winner', 'Victorine', 'Winner', 'Vincent','Varius','Winner'];
    var refinedFamilyMembers = new Set(familyMembers)
    console.log(refinedFamilyMembers)

    familyMembers = [...refinedFamilyMembers];

    console.log(familyMembers)
    console.log(...familyMembers)
}