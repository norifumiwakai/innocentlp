  
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


// ----------------サービス　ボタン　挙動----------------//


document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".service-list-btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var targetContent = document.querySelector(button.getAttribute('data-target'));
      var dot = button.querySelector(".dot");

      // もし現在アクティブなボタンが再びクリックされたら、そのコンテンツをトグルする
      if (targetContent.style.display === "block") {
        targetContent.style.display = "none";
        dot.classList.remove("active");
      } else {
        // 他の全てのコンテンツを非表示にし、ドットを非アクティブにする
        document.querySelectorAll(".service-list-content").forEach(function (content) {
          content.style.display = "none";
        });
        document.querySelectorAll(".service-list-btn .dot").forEach(function (d) {
          d.classList.remove("active");
        });

        // 新しく選択されたコンテンツを表示し、ドットをアクティブにする
        targetContent.style.display = "block";
        dot.classList.add("active");
      }
    });
  });
});



  // -----------------------split-----------------------------//

  $('.service-list-btn').click(function() {
    // target変数はこのスコープ内で定義されていると仮定
    var target = $(this).data('target');
  
    // targetに対する操作をこのスコープ内で行う
    $(target).show().promise().done(function() {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 0 // 100ピクセル分上に設定したい場合はここを変更する
      }, 50);
    });
  });
  