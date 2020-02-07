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
      tBody.append(this.renderGradeRow(grades[i], this.deleteGrade))
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var tr = $("<tr>")
      .append($("<td>").text(data.name))
      .append($("<td>").text(data.course))
      .append($("<td>").text(data.grade));
    var deleteButton = $("<td>")
      .addClass("text-right")
      .append($('<button type="button">')
      .text("DELETE")
      .addClass("btn btn-danger"));
    deleteButton.on('click', function() {deleteGrade(data.id)})
    tr.append(deleteButton)
    return tr;
  }
}
