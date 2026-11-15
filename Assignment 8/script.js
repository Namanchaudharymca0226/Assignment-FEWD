//Step1: Create student arrays
let students1=["Rahul","Aman"];
let students2=["Priya","Neha"];

//Step 2: Spread Operator-Merge arrays
let students=[...students1,...students2];

console.log("All Students:",students);

//Step 3:Select a student using Array Destructuring
let [student1, student2,...remainingStudents]=students;
console.log("First Student:",student1);
console.log("Second Student:",student2);
console.log("Remaining Students:",remainingStudents);
//Step4:Store marks
let marks=[80,90,85,75];
//Step5:Arrow Function-Calculate total
let calculateTotal=(marks)=>{
    return marks.reduce((sum,marks)=>sum+marks,0);
};

//Step6:Arrow Function-Calculate average
let calculateAverage=(marks)=>{
    return calculateTotal(marks)/marks.length;
};
//Step7: Call Function
let total=calculateTotal(marks);
let average=calculateAverage(marks);

//Step 8: Template Literals - Generate result
let result=`
-----STUDENT RESULT----
Student Name:${student1}
Marks ${marks.join(" , ")}
Total Marks: ${total}
Average:${average.toFixed(2)}

Result:${average >=40?"Pass":"Fail"}
`;
console.log(result);