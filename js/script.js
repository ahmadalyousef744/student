var students = [];

for (var i = 0; i < 10; i++) {
  var Name = prompt("Enter name of student " + (i+1));
  var grade = prompt("Enter grade of student " + (i+1));
  students.push({name :Name+"="+grade , grade: parseInt(grade)});
}

var grades = document.getElementById("grades");

for (var i = 0; i < students.length; i++) {
  var student = students[i];
  var result = student.name + " : ";

  if (student.grade >= 90) {
    result += "Excellent";
  } else if (student.grade >= 80) {
    result += "Very Good";
  } else if (student.grade >= 70) {
    result += "Good";
  } else if (student.grade >= 60) {
    result += "Acceptable";
  } else if (student.grade >= 50) {
    result += "Weak";
  } else {
    result += "Fail";
  }

  var p = document.createElement("p");
  p.innerHTML = result;
  grades.appendChild(p);
}