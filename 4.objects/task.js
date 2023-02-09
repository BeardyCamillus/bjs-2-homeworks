function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  // добавить первую оценку
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    // добавить вторую и последующие оценки в массив
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks]
  } else {
    this.marks.push(marks)
  }
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}