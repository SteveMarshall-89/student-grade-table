class App {
  constructor() {
    var boundError = this.handleGetGradesError.bind(this);
    var boundSuccess = this.handleGetGradesSuccess.bind(this);
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log(grades);
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
}
