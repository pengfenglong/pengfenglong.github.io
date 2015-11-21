/************************
 * 描述：基于jQuery的DIY弹出消息提醒(确认框、提示框)
 * 作者：Gibil
 * 时间：2014-1-23
************************/
(function ($) {
    $.extend({
        //确认框
        Confirm: {
            defaults: {
                content: '', //提示内容
                //取消回调事件
                cancel: function () {
                    $.Confirm.close();
                },
                //确定回调事件
                sure: function () {
                    $.Confirm.close();
                },
                bg: true//遮罩层
            },
            show: function (op) {
                var ops = $.extend({}, this.defaults, op);

                $('#__popConfirm').remove();
                var _conHtml = '';
                _conHtml += '<div id="__popConfirm">';
                if (ops.content)
                    _conHtml += '<div id="__popWarnMsg">' + ops.content + '</div>';
                _conHtml += '   <div id="__popDoBtn"><button id="__popBtnComfirm" class="__popBtn">确定</button><button id="__popBtnCancel" class="__popBtn">取消</button></div>';
                _conHtml += '</div>';
                $('body').append(_conHtml);

                $('#__popMasklayer').remove();
                if (ops.bg) {
                    $('body').append('<div id="__popMasklayer"></div>');
                }

                var $pop = $('#__popConfirm');
                var $win = $(window);
                $pop.css({ 'top': ($win.height() - $pop.height()) / 2, 'left': ($win.width() - $pop.width()) / 2 });

                $('#__popBtnComfirm').click(function () {
                    ops.sure();
                    $.Confirm.close();
                });
                $('#__popBtnCancel').click(function () {
                    ops.cancel();
                });
            },
            close: function () {
                $('#__popConfirm,#__popMasklayer').remove();
            }
        },
        //提示框 content-提示内容 width-提示框宽度 time-自动关闭时间(毫秒为单位)
        Alert: function (content, width, time) {
            if ($('#__popAlert').length) return; //防止重复提示
            if (!content) return; //提示内容不能为空
            var _time = 3000; //默认自动关闭时间为3秒
            if (time && typeof (time) == 'number')
                _time = time;

            $('body').append('<div id="__popAlert"' + (width ? ' style="width:' + width + 'px;"' : '') + '>' + content + '</div>');
            var $pop = $('#__popAlert');
            var $win = $(window);
            $pop.css({ 'top': ($win.height() - $pop.height()) / 2, 'left': ($win.width() - $pop.width()) / 2 });

            //自动关闭
            setTimeout(function () {
                $('#__popAlert').fadeOut('normal', function () {
                    $('#__popAlert').remove();
                });
            }, _time);
        }
    })
})(jQuery);
