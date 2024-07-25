export deafult function getStudentByLocation(students, city) {
    return students.filter((students) => students.location === city);
}