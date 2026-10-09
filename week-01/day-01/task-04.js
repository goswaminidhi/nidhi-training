const students = [
  { name: "Asha",  marks: [78, 85, 90] },
  { name: "Ravi",  marks: [55, 62, 48] },
  { name: "Meena", marks: [92, 88, 95] },
  { name: "Karan", marks: [70, 75, 80] },
  { name: "Divya", marks: [85, 85, 80] },
];


//CAlculating average
function calculateAverage(marks){
        let sum = marks.reduce((totalsum ,mark) => totalsum + mark, 0 );
        return (sum / marks.length).toFixed(1);
    
}


// New students array with name and Average marks 
const studentsN = [];
function studentsNew(){
    return students.map((student) =>({
        name : student.name,
        averageMarks : calculateAverage(student.marks)
    }));
    
}

console.log(studentsNew());

//Students with average >= 75
function averageGreaterThan75(){
   
    return studentsN.filter(student => student.averageMarks >= 75).map(student => student.name);

}

console.log("Students Marks Greater than or equal to 75 are " + averageGreaterThan75());


//The Topper
function topper(){
    return students.reduce( (highest , student) => { 
        let sum = student.marks.reduce((totalMarks , marks) => totalMarks + marks,0);
    
    
        let highestMarks = highest.marks.reduce((totalMarks , marks) => totalMarks + marks,0);
        if(sum > highestMarks){
            return student;
        }else{
            return highest;
        }
    });
}
console.log(topper());

//Sort by names
function sortByName(){
    return students.sort((a,b) => a.name.localeCompare(b.name));
}

console.log(sortByName());


//Marks below 50
function marksBelow50(){

    if(students.filter(student => student.marks.some(mark => mark < 50))){
        return true;
    }
    return false;
}

console.log(marksBelow50());

//Marks above 40
function marksAbove40(){
    if(students.filter(student => student.marks.some(mark => mark > 40))){
        return true;
    }
    return false;
}

console.log(marksAbove40());