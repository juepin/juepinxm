/**
 * Created by 完美睡姿 on 2017/4/16.
 */
var myScroll;

function loaded () {
    myScroll = new IScroll('#wrapper', {
        scrollbars: false,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        click:true,
        bounce:false
    });
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
    capture: false,
    passive: false
} : false);
