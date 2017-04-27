// 公共脚本
;
$(function() {

    initSpace();

});

function workSpace() {

    this.default = {
        sideHeight: 540,
        sideWidth: 250,
        wraperWidth: 1050,
        sign: true
    }

    //页面模块布局
    this.layOut = function() {

        var _winHeight = $(window).height();
        var _winWidth = $(window).width();
        var _navTop = $(".navTop").outerHeight();
        var _side = _winHeight - _navTop;

        //side
        _side > this.default.sideHeight ? _side = _side : _side = this.default.sideHeight;
        $(".side").height(_side);
        $(".side").width(this.default.sideWidth);

        if (this.default.sign) {

            this.default.sign = false;
            $(".wraper").append('<div class="clearfix"></div>');

        }

        $(".main").width($(".wraper").width() - $(".side").outerWidth()).height($(".side").height());

    }

    //屏幕切换
    this.toggleScreen = function() {

        var toggle = true;

        $(".toggleScreen").on("click", function() {

            if (toggle) {

                toggle = false;
                $(".side").width(0);

            } else {

                $(".side").width(250);
                toggle = true;
                $(window).trigger('resize');

            }
            $(".main").width($("body").outerWidth() - $(".side").outerWidth());
        });

    }

}

function initSpace() {

    this.space = new workSpace();
    // space.layOut();
    space.toggleScreen();

    resize();

    function resize() {
        $(window).resize(function() {
            space.layOut();
        });
        $(window).trigger('resize');
    }

}