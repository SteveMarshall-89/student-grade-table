class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var total = 0;
    for(let i = 0; i < grades.length; i++) {
      total += grades[i]["grade"];
    }
    var average = (total / grades.length);
    this.pageHeader.updateAverage(average);
  }
  getGrades() {
    $.ajax({
      method: 'GET',
      url: 'http://sgt.lfzprototypes.com/api/grades',
      headers: {
        "X-Access-Token": "pYDgjVqL"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start() {
    this.getGrades();
  }
  createGrade(name, course, grade) {
    console.log(name + course + grade)
  }
}
