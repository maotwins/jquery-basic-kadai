$(function () {
  // 複数のイベント処理
  $(window).on('load', function() {
    console.log('loadイベントが発生しました')
  });

  $(window).on('scroll', function(){
    console.log('scrollイベントが発生しました')
  });
});