$(document).ready(() => {

  // add todo
  $('form').on('submit', function (event) {
    event.preventDefault();
    const val = $('form input').val().trim();
    // default is application/x-www-form-urlencoded
    /* $.ajax({
      type: 'POST',
      url: '/api/todo/add',
      data: { content: val },
      success: result => {
        console.log('result:', result);
        location.reload();
      }
    }); */
    
    // json
    $.ajax({
      type: 'POST',
      url: '/api/todo/add',
      contentType: 'application/json',
      data: JSON.stringify({ content: val }),
      success: result => {
        console.log('result:', result);
        location.reload();
      }
    });
    return false;
  });

  // delete todo
  $('li').on('click', function () {
    var id = $(this).attr('uid');
    $.ajax({
      type: 'DELETE',
      url: `/api/todo/${id}`,
      success: result => {
        console.log('result:', result);
        location.reload();
      }
    });
  });

});