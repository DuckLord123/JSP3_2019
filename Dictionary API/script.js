$('#search').click(() => {
  let word;
  let offensive = false;
  $("#image").attr('src', "");
  $("#image").attr('alt', "");
  $('.delete').remove();
  word = $('#word').val();
  $.ajax({
    type: 'GET',
    url: "https://www.dictionaryapi.com/api/v3/references/sd4/json/" + word+ "?key=715c11b7-9023-4a2a-9b29-3e10a208ebd4",
    dataType: 'json',
    success: (data) => {
      if(data[0].shortdef == undefined){
        $('body').append(`<p class = 'delete'>Error: That's not a word!</p>`)
      }
      else{
        for(let i = 0; i < data.length; i++){
          if(data[i].meta.offensive){
            $('body').append(`<p class = 'delete'>${i+1}. (OFFESNSIVE) Definition: (${data[i].fl}) ${data[i].shortdef} </p>`);
            offensive = true;
          }
          else{
            $('body').append(`<p class = 'delete'>${i+1}. Definition: (${data[i].fl}) ${data[i].shortdef} </p>`);
          }
        }
      }
      if(!offensive){
        $.ajax({
          type: 'GET',
          url: `https://api.unsplash.com/photos/random/?client_id=6f5c5eb89858fba920ff2101c93ec695c1c3db01573df23e382de4030e294cea&query=${word}`,
          dataType: 'json',
          success: (data) => {
            console.log(data);
            $("#image").attr('src', data.urls.small);
          }
        })
      }
      else{
        $("#image").attr('alt', 'Word is offensive: No image shown.')
      }
    }
  })
})
/*
$.ajax({
  type: 'POST',
  url: "https://nano-rest-api-1.herokuapp.com/messages",
  data: JSON.stringify({text: "Ethan's Test 2"}),
  contentType: "application/json; charset=utf-8",
  dataType: 'json',
  success: (data) => {
    let id = data.id;
    $.ajax({
      type: 'GET',
      url: "https://nano-rest-api-1.herokuapp.com/messages",
      dataType: 'json',
      success: (data) => {
        console.log(data[id-2].text);
      }
    })
  }
})
*/
/*
$.ajax({

  url: 'https://www.jsonstore.io/98e570014ff6bc52d980d205b737436419566f7a62f13fb6178d411ea661151c/users/1',
  type: 'POST',
  data: {
    "name" : "Lucas",
    "age" : 17
  },
  dataType: 'json',
  success: () => {
    alert('success');
  }
})
*/
