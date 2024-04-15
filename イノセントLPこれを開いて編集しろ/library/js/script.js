  
   // ----------------ハンバーガー----------------//
   $('.btn_trigger').on('click',function(){//.btn_triggerをクリックすると
    $('.btn_trigger').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
    $('.header-nav').fadeToggle(300);//.nav-wrapperが0.3秒でフェードイン(メニューのフェードイン)
    $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
  });
  
  if( $(window).width() <= 768 ){//デバイスの幅が768以下のとき
    $('.menu').on('click',function(){//.nav-item>aをクリックすると
      $('.header-nav').fadeOut(300);//.nav-wrapperが0.3秒でフェードアウト(メニューのフェードアウト)
      $('.btn_trigger').removeClass('close');//.btn_triggerのcloseクラスを削除
      $('body').removeClass('noscroll');//bodyのnoscrollクラスを削除
    });
  }

 // ----------------サービス　ボタン　挙動-----------------//
$(document).ready(function() {
    $('.service-list-btn').click(function() {
      var target = $(this).data('target');
      var isAlreadyVisible = $(target).is(':visible');
  
      // すべてのコンテンツを隠す
      $('.service-list-content').hide();
  
      // 選択されたコンテンツをトグルする
      if (!isAlreadyVisible) {
        $(target).show();
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 50);
      } // もしすでに表示されている場合は、何もしない（上の`.hide()`で非表示になる）
    });
  });

// ----------------サービス　ボタン　挙動----------------//
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.service-list-btn');
  var activeButton = null;

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // このボタンが既にアクティブであれば色を元に戻し、アクティブな状態を解除します
      if (activeButton === button) {
        button.style.backgroundColor = '#e3e3e3'; // 元の色に設定
        activeButton = null;
      } else {
        // 別のボタンがアクティブであれば、その背景色を元に戻します
        if (activeButton) {
          activeButton.style.backgroundColor = '#e3e3e3'; // 元の色に設定
        }
        // クリックされたボタンの背景色を変更します
        button.style.backgroundColor = '#e3e3e3'; // 新しい色に設定
        // このボタンをアクティブボタンとして記録します
        activeButton = button;
      }
    });
  });
});


buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // 初回にアクティブだったボタンがあれば、その背景色を元に戻します
    if (activeButton === button) {
      activeButton.style.backgroundColor = ''; // 元の色（または空文字）に設定
      activeButton = null;
    } else {
      // 以前にアクティブだったボタンがあれば、その背景色を元に戻します
      if (activeButton) {
        activeButton.style.backgroundColor = '#e3e3e3';
      }
      // クリックされたボタンの背景色を変更します
      button.style.backgroundColor = '#ffffff'; // 新しい色に設定
      // このボタンをアクティブボタンとして記録します
      activeButton = button;
    }
  });
});



  // -----------------------split-----------------------------//

  $(target).show().promise().done(function() {
    $('html, body').animate({
      // ここでスクロールする高さを調整します
      // 例えば、ターゲットの位置から更に上にスクロールさせたい場合は、
      // .offset().topの値から希望するピクセル数を引きます。
      scrollTop: $(target).offset().top - 0 // 100ピクセル分上に設定
    }, 50);
  });
  