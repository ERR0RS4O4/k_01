window.addEventListener('load', function() {
    var selOne = document.querySelector('#sel');
    var xiaL = document.querySelector('#xiaL');
    var ULone = this.document.querySelector('.one');

    // 头部导航栏样式
    for (var i = 1; i < ULone.children.length; i++) {
        ULone.children[i].addEventListener('mouseenter', function() {
            this.className = 'bgc';
        });
        ULone.children[i].addEventListener('mouseleave', function() {
            this.className = '';
        });
    }

    // 下拉菜单
    selOne.addEventListener('mouseenter', function() {
        xiaL.style.display = 'block';
    });
    selOne.addEventListener('mouseleave', function() {
        xiaL.style.display = 'none';
    });

    var bg = this.document.querySelector('.bg');
    var btnLeft = this.document.querySelector('.swiper-button-next');
    var btnRight = this.document.querySelector('.swiper-button-prev');

    // 切换按钮
    bg.addEventListener('mouseenter', function() {
        btnLeft.style.display = 'block';
        btnRight.style.display = 'block';
    });

    bg.addEventListener('mouseleave', function() {
        btnLeft.style.display = 'none';
        btnRight.style.display = 'none';
    });

    // 轮播图
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            autoplay: true,
            disableOnInteraction: false,
        },
        disableOnInteraction: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 推荐列表歌曲切换
    var ulCity = this.document.querySelector('#city');
    var qH = this.document.querySelector('#qiehuan');
    var lis = ulCity.querySelectorAll('li');
    var divs = qH.querySelectorAll('div');
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('mouseenter', function() {
            for (var j = 0; j < lis.length; j++) {
                lis[j].style.color = '#666';
            }
            this.style.color = 'aqua';
            var index = this.getAttribute('index');
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.display = 'none';
            }
            divs[index].style.display = 'block';
        });
    }

    // 右侧栏
    var bg = this.document.querySelector('bg');
    var bgnav = this.document.querySelector('.bg_nav');
    var open = this.document.querySelector('.open');
    var HD = this.document.querySelector('#HD');
    this.window.addEventListener('scroll', function() {
        if (this.window.pageYOffset > 400) {
            open.style.position = 'fixed';
            open.style.top = 205 + 'px';
            open.style.right = 50 + 'px';
            HD.style.display = 'block';
            HD.style.position = 'fixed';
            HD.style.right = 100 + 'px';
            HD.style.bottom = 50 + 'px'

        } else {
            open.style.position = 'absolute';
            open.style.top = 40 + 'px';
            open.style.right = -210 + 'px';
            HD.style.display = 'none';
        }
    })

    HD.addEventListener('click', function() {
        window.scroll(0, 0);
    })
});