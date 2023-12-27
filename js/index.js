window.addEventListener('load',function(){

    var first = this.document.querySelector('.top-nav-first');
    var jt = this.document.querySelector('.top-jt');
    var xz=document.querySelector('.top-xz');
    var end=this.document.querySelector('.top-nav-end');

    //封装顶部点击下拉菜单函数
    function topClick(secElement,dElement,bgElement,hElement,h){
        secElement.addEventListener('click',function(){
            dElement.style.height='';
            bgElement.parentNode.style.background='#111111';
            bgElement.style.color='#ccc';
            if(hElement.style.height==''){
                hElement.style.height=h;
                secElement.parentNode.style.background='#f7f7f7';
                secElement.style.color='#818181';
            }else{
                hElement.style.height='';
                secElement.parentNode.style.background='#111111';
                secElement.style.color='#ccc';
            }
        });
    }
    // 集团网站下拉菜单
    topClick(jt,end,xz,first,'168px');
    /* jt.addEventListener('click',function(){
        end.style.height='';
        xz.parentNode.style.background='#111111';
        xz.style.color='#ccc';
        if(first.style.height==''){
            first.style.height='168px';
            jt.parentNode.style.background='#f7f7f7';
            jt.style.color='#818181';
        }else{
            first.style.height='';
            jt.parentNode.style.background='#111111';
            jt.style.color='#ccc';
        }
    });
 */

    // 选择语言下拉菜单
    topClick(xz,first,jt,end,'300px');
    /* xz.addEventListener('click',function(){

        first.style.height='';
        jt.parentNode.style.background='#111111';
        jt.style.color='#ccc';
        if(end.style.height==''){
            end.style.height='300px';
            xz.parentNode.style.background='#f7f7f7';
            xz.style.color='#818181';
        }else{
            end.style.height='';
            xz.parentNode.style.background='#111111';
            xz.style.color='#ccc';
        }

        
    });
 */

    // 选中小li
    var lis = end.querySelectorAll('li');
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener('click',function(){
            for(var i=0;i<lis.length;i++){
                lis[i].className='';
            }
            this.className='active';
        })
    };

    //产品
    var personal =this.document.querySelector('.personal');
    var personalBottom = document.querySelector('.personal-bottom');
    var product =document.querySelector('.product');
    // personalBottom.children[2].addEventListener('click',function(){
    //     personal.style.height='0';
    // });
    // product.addEventListener('mouseenter',function(){
    //     personal.style.height='520px';
    // });
    // product.addEventListener('mouseleave',function(){
    //     personal.style.height='0';
    // });
    
    //封装下拉菜单函数
    function xButtton(srcElement,h,dElement,Element){
        // alert(1);
        srcElement.addEventListener('click',function(){
            Element.style.height='0';
        });
        dElement.addEventListener('mouseenter',function(){
            Element.style.height=h;
        });
        dElement.addEventListener('mouseleave',function(){
            Element.style.height='0';
        });
    };
    xButtton(personalBottom.children[2],'520px',product,personal);

    //商用产品下拉菜单
    var closebus = document.getElementById('closebus');
    var commercial = document.querySelector('.commercial');
    var business=document.querySelector('.business');
    // console.log(closebus);
    // console.log(commercial);
    // console.log(business);
    xButtton(commercial,'600px',commercial,business);
    
    //服务下拉菜单
    var service = document.querySelector('.service');
    var serve = document.querySelector('.serve');
    var closeSer = document.getElementById('close-ser');
    // console.log(service);
    // console.log(serve);
    // console.log(closeSer);
    xButtton(closeSer,'450px',service,serve);

    // 合作伙伴下拉菜单
    var cooperation=document.querySelector('.cooperation');
    var toghter = document.querySelector('.toghter');
    var closePart = document.getElementById('close-part');
    // console.log(cooperation);
    // console.log(toghter);
    // console.log(closePart);
    xButtton(closePart,'450px',cooperation,toghter);

    // 关于华为下拉菜单
    var aboutHw = document.querySelector('.about-hw');
    var about  = document.querySelector('.about');
    var closeAbout = document.getElementById('close-about');
    // console.log(aboutHw);
    // console.log(about);
    // console.log(closeAbout);
    xButtton(closeAbout,'450px',about,aboutHw);

    //获得input焦点
    var search = document.querySelector('.search');
    var a = search.querySelector('a');
    var input = search.querySelector('input');
    var hot = document.querySelector('.hot');
    // console.log(search);
    // console.log(a);
    // console.log(input);
    // var isClick=true;
    fB(input,hot);

    // 封装获得焦点与失去焦点函数
    function fB(Element,dElement){
        Element.addEventListener('focus',function(){
            dElement.style.display='block'; 
        });
        Element.addEventListener('blur',function(){
        dElement.style.display='none';
        });
    }

    /* input.addEventListener('focus',function(){
            hot.style.display='block'; 
    });
    input.addEventListener('blur',function(){
        hot.style.display='none';
    }) */

    // 搜索框的显示与隐藏
    var cont = this.document.querySelector('.cont');
    var nav = document.querySelector('.nav'); 
    var searchA = this.document.querySelector('.searchA');

    searchA.addEventListener('click',function(){
        search.style.display='none';
        nav.children[2].style.display='block';
        cont.style.display='block';
    });
    console.log(nav.children[2]);
    var fad = document.querySelector('.fa-d');
    fad.addEventListener('click',function(){
        search.style.display='block';
        nav.children[2].style.display='none';
        cont.style.display='none';
        
    });

    // 轮播图
    var prev = document.querySelector('.prev');
    var next = this.document.querySelector('.next');
    var Rotation = document.querySelector('.Rotation');
    var ul = Rotation.querySelector('ul');
    var ol = Rotation.querySelector('.promo-nav');
    var RWidth = Rotation.offsetWidth;

    // 鼠标离开或者放在轮播图事件
    Rotation.addEventListener('mouseenter', function() {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    Rotation.addEventListener('mouseleave', function() {
        prev.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function() {
            next.click(); //手动调用点击事件
        }, 2000);
    });

    for(var i=0;i<ul.children.length;i++){
        var li = document.createElement('li');
        //通过自定义属性 记录当前小圆圈的索引号  
        li.setAttribute('index', i);
        ol.appendChild(li);

        // 给小li绑定点击事件
        li.addEventListener('click',function(){
            for(var i=0;i<ol.children.length;i++){
                ol.children[i].className = '';
            }
            // 改变li颜色
            this.className = 'first';
            var index = this.getAttribute('index');

            animate(ul,-index*RWidth);

            num = index;
            circle = index;
        });
    }
    ol.children[0].className='first';
    var firs = ul.children[0].cloneNode(true);
    ul.appendChild(firs);

    var num = 0;
    var circle = 0;
    var flag = true;
    next.addEventListener('click',function(){
        if(flag){
            flag=false;
            if(num == ul.children.length-1){
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul,-num*RWidth,function(){
                flag=true;
            });
            circle++;
            if(circle == ol.children.length){
                circle = 0;
            }
            circleChange();
        } 
    });

    prev.addEventListener('click', function() {
        if(flag){
            flag=false;
            //如果走到最后复制的一张图片要快速复原left 改为0
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -(num) * RWidth + 'px'; //不要忘记加px

            }
            num--;
            animate(ul, -num * RWidth,function(){
                flag=true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        } 
    });

    function  circleChange(){
        //派他思想先清除其他小圆圈
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //如果等于4就走到了尽头，让其变成0

        ol.children[circle].className = 'first';
    }

    var timer = setInterval(function() {
            next.click(); //手动调用点击事件
        }, 2000);

    // 动画函数
    function animate(obj, target, callback) {
        //保证只有一次定时器使用
        clearInterval(obj.timer)
    
        obj.timer = setInterval(function() {
            // var step = Math.ceil((target -obj.offsetLeft)/10);
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step); //把步长改为整数
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                // if(callback){           //有回调函数就执行，任务做完之后在进行回调函数
                //     callback();
                // }
                callback && callback();
            } else {
                obj.style.left = obj.offsetLeft + step + 'px';
            }
        }, 20)
    }
    
    // 新闻滚动条事件
    var news3 = document.querySelector('.news3');
    var fog = document.querySelector('.fog');
    console.log(news3);
    console.log(fog);
    news3.addEventListener('scroll',function(){
        // console.log(news3.scrollTop);
        if(news3.scrollTop>0){
            fog.style.background='none';
            fog.style.boxShadow='none';
        } else {
            fog.style.background='rgba(248, 248, 248, 0.9)';
            fog.style.boxShadow='0 20px 20px 30px rgba(248, 248, 248, 0.9)';
        }
    });

    var fang = document.querySelector('.fang');
    var footerInput = fang.querySelector('input');
    var footerHot = fang.querySelector('.footer-hot');
    // console.log(fang);
    // console.log(footerHot);
    // console.log(footerInput);
    fB(footerInput,footerHot);

    var sy = this.document.querySelector('.sy');
    var footerIcon = this.document.querySelector('.footer-icon');
    // console.log(sy);
    // console.log(footerIcon);

    sy.addEventListener('click',function(){
        fang.style.display='none';
        footerIcon.style.display='block';
        
    });
    footerIcon.addEventListener('click',function(){
        footerIcon.style.display='none';
        fang.style.display='block';

    });

    // 返回顶部的显示和消失
    var recommendTop = document.querySelector('.recommend-top');
    var h1 = recommendTop.querySelector('h1');
    var backIcon = document.querySelector('.backicon');
    window.addEventListener('scroll',function(){
        // console.log(h1.offsetTop);
        // console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop >=h1.offsetTop){
            backIcon.style.opacity = '1';
        } else {
            backIcon.style.opacity = '0';
        }
    });

    // 返回顶部
    backIcon.addEventListener('click',function(){
        clearInterval(timer);
        // 保证只 开启一个定时器
        timer = setInterval(function(){
            var len = window.scrollY;
            var speed = Math.floor(len/10);
            var y = len-speed;
            if(y<10){
                y=0;
            }
            window.scrollTo(0,y);
            if(window.scrollY==0){
                clearInterval(timer);
            }
            // console.log(window.scrollY);
        },20);
    });
});