
$(function () {
    // 轮播图大图小图切换
    // 判断屏幕宽度是否是小屏幕
    // 1.获取屏幕宽度
    // 2.定义一个小屏幕的标准(这个标准就参照bootstrap的xs)
    //获取轮播图元素
    //如果是小屏幕设置小屏幕 如果是大屏幕设置大屏幕
    //获取屏幕宽度
    //直接获取的话只能获取一次 如果窗口拉伸就无法重新获取
    //那么如果我们能每次窗口拉伸都获取一下屏幕宽度就可以了
    //那么怎么让每次窗口拉伸都获取呢
    //有一个窗口大小变化事件resize
    //定义一个小屏幕标准

    $(window).on("resize", function () {
        var screenWid = $(window).width();

        if (screenWid < 640) {
            var items = $('.carousel-inner .item');
            for (var i = 0; i < items.length; i++) {
                var item = $(items[i]);
                var imgsrc = item.data('small-img');
                item.html('<a href="#" class="mobileImg" ><img src="' + imgsrc + '"></a>');
            }
        } else {
            var items = $('.carousel-inner .item');
            items.each(function (index, value) {
                var item = $(value);
                var imgsrc = item.data('big-img');
                item.html('<a href="#" class="pcImg" style="background-image:url(' + imgsrc + ')"></a>');
            })
        }
    }).trigger('resize');
})
