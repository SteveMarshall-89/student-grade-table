class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this)
    this.formElement.addEventListener('submit', this.handleSubmit);
    this.createGrade = null;
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var formName = formData.get('student');
    var formCourse = formData.get('course');
    var formGrade = formData.get('grade');
    this.createGrade(formName, formCourse, formGrade)
    event.target.reset()
  }
}
