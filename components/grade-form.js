class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = handleSubmit;
    this.formElement.addEventListener('submit', this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("hi")
  }
}
