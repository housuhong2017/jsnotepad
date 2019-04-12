var $dlgGoto = (function(){
     var DOM = ''
              +'<div class="notepad-goto-dlg">'
              +'<div class="dialogbox">'
              +'<div class="titlebar">'
              +'<p class="title">转到指定行</p>'
              +'<span class="btn-close">X</span>'
              +'<div>'
              +'<div class="main">'
              +'<label for="">行号(L):</label></br>'
              +'<input class="line-num" type="text" /><br>'
              +'<input class="btn-goto" type="button" value="转到" />'
              +'<input class="btn-cancel" type="button" value="取消" />'
              +'</div>'
              +'</div>'
              +'</div>'
              +'</div>'
              +'</div>';
    var $dlg = $(DOM),
        $btnCancel = $dlg.find('.btn-cancel'),
        $btnClose = $dlg.find('.btn-close');


    function show(){
      $('body').append($dlg);
      $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});

      $btnClose.click(function(){ $dlg.remove(); });
      $btnCancel.click(function(){ $dlg.remove(); });

    }
      
  return {show:show};
})();


