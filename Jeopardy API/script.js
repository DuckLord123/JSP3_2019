//Get Jeopardy question:
let question;
let answer;

$.ajax({
  type: 'GET',
  url: "http://jservice.io/api/random",
  dataType: 'json',
  success: (data) => {
    question = data[0].question;
    answer = data[0].answer;
    $("#question").text(`Question: ${question}`)
    console.log(data);
  }
})

$("#submit").click(() => {
  if ($('#inBox').val() == answer){
    $("#result").text("Correct!")
  }
  else{
    $("#result").text("Incorrect.")
  }
  doPost();
})

//Post answer to jsonstore.io
const doPost = () => {
  $.ajax({
    type: 'POST',
    url: "https://www.jsonstore.io/0210cd2544f4fd3dfe0a756ea2c71999652275317ca0a90a6f69133c3bd70ecd",
    data: JSON.stringify({
      question : question,
      correctAnswer: answer,
      userAnswer: ($('#inBox').val())
    }),  //TODO
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    success: (data) => {

    }
  })
}
