var table = document.querySelector("table");
var header = document.querySelector("header");
var form = document.querySelector("form");

var pageHeaderInstance = new PageHeader(header);
var gradeTableAgain = new GradeTable(table);
var gradeFormInstance = new GradeForm(form);

var appObject = new App(gradeTableAgain, pageHeaderInstance, gradeFormInstance);
appObject.start();
