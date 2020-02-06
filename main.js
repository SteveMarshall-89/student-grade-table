var table = document.querySelector("table");
var header = document.querySelector("header");

var pageHeaderInstance = new PageHeader(header);
var gradeTableAgain = new GradeTable(table);

var appObject = new App(gradeTableAgain, pageHeaderInstance);
appObject.start();
