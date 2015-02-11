$(function(){

  $.get('/footer.html', function(result){
    $result = $(result);
    
    $result.find('script').appendTo('#footer');
  }, 'html');

});