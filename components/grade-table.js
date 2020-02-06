class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tBody = $("tbody");
    tBody.empty();
    for (let i = 0; i < grades.length; i++) {
      var tr = $("<tr>")
        .append($("<td>").text(grades[i]["name"]))
        .append($("<td>").text(grades[i]["course"]))
        .append($("<td>").text(grades[i]["grade"]))
      tBody.append(tr)
    }
  }
}
