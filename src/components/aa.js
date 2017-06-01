// Author:wangyajun // Date:2017.5.11 //可以链式调用 
;
(function($) {
        $.fn.extend({
            loadSteps: function(opt) {
                var Defaults = { hover: true, steps: [{ title: '标题', description: '相关描述文字相关描述文字' }, { title: '标题', description: '相关描述文字相关描述文字' }] },
                    opts = $.extend(true, {},
                        Defaults, opt);
                if (opts.steps && opts.steps.length > 0) {
                    var stepHtml, horizontal, _this = $(this),
                        direction = _this.attr('direction'),
                        verticalStr = ' <
                    div class = "ad-step-head" > < /div> <
                    div class = "ad-step-cont" > < /div>', horizontalStr = ' <
                    div class = "ad-step-head" > < /div> <
                    div style = "clear:both" > < /div> <
                    div class = "ad-step-cont" > < /div>'; if (direction==undefined || direction=='horizontal') { stepHtml=horizontalStr; }else if(direction=='vertical'){ stepHtml=verticalStr; _this.addClass('.ad-step-horizontal'); } / / horizontal ? stepHtml = verticalStr : stepHtml = horizontalStr;
                    _this.append(stepHtml);
                    var $adStepHead = _this.find($('.ad-step-head')),
                        $adStepCont = _this.find($('.ad-step-cont')),
                        $line = ' <
                    div class = "ad-step-line" > < /div>', $cont = ' <
                    div class = "ad-step-log" > < /div>', $item = ' <
                    div class = "ad-step-item" > < /div>', $title = ' <
                    div class = "ad-step-title" > < /div>', $description = ' <
                    div class = "ad-step-description" > < /div>', $clear = ' <
                    div style = "clear:both" > < /div>'; $adStepHead.append($line); if(horizontal) _this.find($('.ad-step-line')).eq(0).css('marginTop',0); $.each(opts.steps, function(i, val) { $adStepHead.append($cont); $adStepHead.append($line); $adStepCont.append($item); var _item = _this.find($('.ad-step-item')).eq(i);
                    _item.append($title);
                    _item.append($description);
                    var $adStepTitle = _this.find($('.ad-step-title')),
                        $adStepLog = _this.find($('.ad-step-log')),
                        $adStepDescription = _this.find($('.ad-step-description'));
                    $adStepLog.eq(i).text(i + 1);
                    opts.steps[i].title ? $adStepTitle.eq(i).text(opts.steps[i].title) : $adStepTitle.eq(i).text('');
                    opts.steps[i].description ? $adStepDescription.eq(i).text(opts.steps[i].description) : $adStepDescription.eq(i).text('');
                }); //hover提示 if (opts.hover) _this.hoverStep(); $adStepHead.append($clear); $adStepCont.append($clear); _this.append($clear); } return
            _this;
        }, setStep: function(step) {
            var _this = $(this);
            if (step && step > 0) {
                var $_item = _this.find('.ad-step-item'),
                    $unFinish = _this.find($('.ad-step-finish')),
                    $finishLine = _this.find($('.ad-step-line')),
                    $finishLog = $finishLine.siblings('.ad-step-log');
                //多次调用setStep 重置 if($unFinish) $unFinish.removeClass('ad-step-finish'); $_item.removeClass('ad-step-finish-item ad-step-active'); $finishLog.removeClass('ad-step-complate'); $finishLog.each(function(i, el) { if (step>i) { $finishLine.eq(i).addClass('ad-step-finish');
                $finishLog.eq(i).addClass('ad-step-finish');
                $_item.eq(i).addClass('ad-step-finish-item');
                $finishLine.eq(step + 1).removeClass('ad-step-complate');
            }
        });
        var finishLength = _this.find($('.ad-step-finish')).length / 2,
            maxLength = _this.find($('.ad-step-head')).children().length / 2 - 1;
        if (finishLength == maxLength) {
            _this.find('.ad-step-line').addClass('ad-step-finish').eq(maxLength).addClass('ad-step-complate');
            _this.find('.ad-step-log.ad-step-finish').eq(maxLength - 1).addClass('ad-step-complate');
            _this.find('.ad-step-item').eq(maxLength - 1).addClass('ad-step-active');
        }
    }
    return _this;
}, getStep: function() {
var _this = this,
step = _this.find($('.ad-step-log.ad-step-finish')).length;
_this.step = step;
return step;
}, nextStep: function() {
var _this = this;
var step = _this.getStep();
_this.setStep(step += 1);
return
_this;
}, prevStep: function() {
var _this = this;
var step = _this.getStep();
_this.setStep(step -= 1);
return _this;
}, hoverStep: function() {
var _this = this,
logBar = _this.find('.ad-step-log'),
hover = ' <
div class = "ad-step-hover" > aaa < /div>'; / / logBar.unbind('mouseenter').unbind('mouseleave');
logBar.hover(function(e) {
var hovlen = logBar.find('.ad-step-hover').length;
if (hovlen <
    1) $(this).append(hover);
}, function(e) { _this.find('.ad-step-hover').remove(); });
}
});
})(jQuery);