class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
    this.deleteGrade = null;
  }
  updateGrades(grades) {
    var tBody = $("tbody");
    tBody.empty();
    for (let i = 0; i < grades.length; i++) {

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
