var $dlgAbout = (function() {
  var DOM = ''
  + '<div class="notepad-dlg-mask notepad-dlg-about">'
  + '<div class="dialogbox notepad-dlgbox">'
  + '<div class="notepad-dlg-titlebar">'
  + '<span class="title">关于“记事本”</span>'
  + '<span class="close-btn">✖</span>'
  + '</div>'
  + '<div class="main notepad-dlg-main">'
  + '<h1 class="slogan">JSNotepad</h1>'
  + '<hr>'
  + '<img class="app-logo" src="../../images/notepad-icon-32.png" alt="JSNotepad">'
  + '<div class="info">'
  + '<p>作者：侯苏洪</p>'
  + '<p>QQ：379126913</p>'
  + '<p>仓库地址：<a href="https://github.com/housuhong2017/jsnotepad.git" target="_blank">https://github.com/housuhong2017/jsnotepad.git</a></p>'
  + '</div>'
  + '<input class="btn-ok btn" type="button" value="确定">'
  + '</div>'
  + '</div>'
  + '</div>';

var $dlg = $(DOM),
    $btnOk = $dlg.find('.btn-ok'),
    $btnClose = $dlg.find('.close-btn');

function show() {
  $('body').append($dlg);
  $dlg.find('.dialogbox').draggable({handle: $dlg.find('.notepad-dlg-titlebar')});

  $btnOk.click(function() { $dlg.remove();  });
  $btnClose.click(function() { $dlg.remove();  });

}

return {show: show};

}());
