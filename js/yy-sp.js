/**
 * Created by 完美睡姿 on 2017/4/12.
 */
var myScroll;
function loaded () {
    myScroll = new IScroll('#wrapper', {
        scrollX:true, //水平方向滚动，默认false
        scrollY:false,
        bounce:false,
        // scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
    });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
    capture: false,
    passive: false
} : false);