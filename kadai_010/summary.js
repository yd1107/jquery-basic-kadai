$(function() {
  // 文字色変化
  $('#change-color').on('click' , function() {
    $('#target').css('color' , 'pink');
  });

  // 文字内容変化
  $('#change-text').on('click' , function(){
    $('#target').text('hello!');
  });

  // フェードアウト
  $('#fadeOut').on('click' , function() {
    $('#target').fadeOut();
  });

  // フェードイン
  $('#fadeIn').on('click' , function(){
    $('#target').fadeIn();
  });
});