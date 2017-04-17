/**
 * Created by 完美睡姿 on 2017/4/15.
 */
//滚动条
var myScroll;
function loaded () {
    myScroll = new IScroll('#wrapper', {
        scrollbars:false,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
        click:true,
    });
}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
    capture: false,
    passive: false
} : false);
//尺寸选择
var lis=$('.size .selc ul li');
// lis.click(function(){
//     lis.removeClass('act');
//     $(this).addClass('act')
// })
lis.on('touchstart',function(){
    lis.removeClass('act');
    $(this).addClass('act')
})
var n=1;
var lef=$('.add .lef');
var righ=$('.add .righ');
var num=$('.add .mid p span');
lef.on('touchstart',function () {
    lef.children().eq(0).addClass('select');
    righ.children().eq(0).removeClass('select');
    n++;
    num.html(`${n}`);
})
righ.on('touchstart',function () {
    righ.children().eq(0).addClass('select');
    lef.children().eq(0).removeClass('select');
    if(n<=1){
        n=1;
    }else{
        n--;
    }
    num.html(`${n}`);
})
// lef.click(function () {
//     lef.children().eq(0).addClass('select');
//     righ.children().eq(0).removeClass('select');
//     n++;
//     num.html(`${n}`);
// });
// righ.click(function () {
//     righ.children().eq(0).addClass('select');
//     lef.children().eq(0).removeClass('select');
//     if(n<=1){
//         n=1;
//     }else{
//         n--;
//     }
//     num.html(`${n}`);
// })