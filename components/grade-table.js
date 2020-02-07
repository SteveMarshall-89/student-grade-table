class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    this.deleteGrade = null;
    this.renderGradeRow = this.renderGradeRow.bind(this);
  }
  updateGrades(grades) {
    var tBody = $("tbody");
    tBody.empty();
    if(!grades) {
      $("p").toggleClass()
    }
    for (let i = 0; i < grades.length; i++) {
      this.renderGradeRow(grade[i], this.deleteGrade())
    }

  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var tr = $("<tr>")
      .append($("<td>").text(data.name))
      .append($("<td>").text(data.course))
      .append($("<td>").text(data.grade))
      .append($("<td>")
        .append($('<button type="button">')
        .text("DELETE")
        .addClass("btn btn-danger")
        .addEventListener('click', deleteButton() {
          deleteGrade(data.id)
        })))
    return tr;
  }
}
