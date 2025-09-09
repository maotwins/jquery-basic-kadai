$(function () {
  // class：btn　がクリックされたら
  $('.btn').on('click', function() {
    $('.text-box').val('クリックしました！')
    console.log('クリックしました！');
  });
});