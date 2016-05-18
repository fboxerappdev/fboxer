function svgClip1(){
    var draw = SVG('marking-clip1').size('100%', '100%');
    var symbol = draw.symbol();
    var  layer7= symbol.image('images/svg/clip1/layer-7.png','100%','290');
    var  layer8= symbol.image('images/svg/clip1/layer-8.png','150','135').x(444).y(10);
    var  layer4= symbol.image('images/svg/clip1/layer-4.png','75','56').x(541).y(111);
    var  layer6= symbol.image('images/svg/clip1/layer-6.png','120','145').x(104).y(66);
    var  layer5= symbol.image('images/svg/clip1/layer-5.png','144','93').x(13).y(30);
    var  layer3= symbol.image('images/svg/clip1/layer-3.png','128','113').x(333).y(80);


    function clp(){
        layer7.move(0,100).opacity(0);
        layer7.animate(700).move(0,0).opacity(1);

        layer8.move(444,100).opacity(0);

        setTimeout(function(){
            layer8.animate(700).move(444,10).opacity(1);
        },400);


        layer6.move(104,166).opacity(0);
        setTimeout(function(){
            layer6.animate(700).move(104,66).opacity(1);
        },600);

        layer5.move(13,80).opacity(0);
        setTimeout(function(){
            layer5.animate(700).move(13,30).opacity(1);
        },1000);


        layer4.move(541,144).opacity(0);
        setTimeout(function(){
            layer4.animate(700).move(541,111).opacity(1);
        },900);


        layer3.move(333,150).opacity(0);
        setTimeout(function(){
            layer3.animate(700).move(333,80).opacity(0.9);
        },900);

        setTimeout(function(){
            setInterval(function(){
                layer3.animate(1000,'<>').move(300,80);
                layer3.animate(1000,'<>').move(333,80);
            }, 2000);

        },900);

        var use  = draw.use(symbol);
    }





    $(window).on('load',function(){
//            $win = $(window);
//            var offset = $('#marking-clip1').offset().top;
//            var high = $('#marking-clip1').height();
//            offset= offset - $win.height() + high;
//            var sts = true;
//
//            $win.on('scroll', function() {
//                if($win.scrollTop()>offset && sts){
//                    clp();
//                    sts=false;
//                }
//            });
//            if($win.scrollTop()>offset && sts){
//                clp();
//                sts=false;
//            }
        clp();



    });


}

function svgClip2(){
    var draw = SVG('marking-clip2').size('100%', '100%');
    var symbol = draw.symbol();

    var  layer1= symbol.image('images/svg/clip2/layer-1.png','240','180').x(15).y(0);
    var  layer2= symbol.image('images/svg/clip2/layer-2.png','184','215').x(414).y(0);
    var  layer3= symbol.image('images/svg/clip2/layer-3.png','100%','265').x(0).y(76);
    var  layer4= symbol.image('images/svg/clip2/layer-4.png','85','166').x(225).y(134);



    function clp(){
        layer1.move(15,60).opacity(0);
        layer1.animate(700).move(15,0).opacity(1);

        layer2.move(414,80).opacity(0);
        layer2.animate(700).move(414,0).opacity(1);

        layer3.move(0,120).opacity(0);
        setTimeout(function(){
            layer3.animate(700).move(0,76).opacity(1);
        },400);

        layer4.move(225,154).opacity(0);
        setTimeout(function(){
            layer4.animate(600).move(225,134).opacity(0.8);
        },1100);

        setTimeout(function(){
            setInterval(function(){
                layer4.animate(1500,'<>').move(350,134);
                layer4.animate(1500,'<>').move(225,134);
            }, 3000);
        },0);

        var use  = draw.use(symbol);
    }


    $(window).on('load',function(){
        $win = $(window);
        var offset = $('#marking-clip2').offset().top;
        var high = $('#marking-clip2').height();
        offset= offset - $win.height() + high;
        var sts = true;
        $win.on('scroll', function() {
            if($win.scrollTop()>offset && sts){
                clp();
                sts=false;
            }
        });
        if($win.scrollTop()>offset && sts){
            clp();
            sts=false;
        }

    });


}




function svgClip3(){
    var draw = SVG('marking-clip3').size('100%', '100%');
    var  symbol1 = draw.symbol();
    var  layer2= symbol1.image('images/svg/clip3/layer-2.png','200','165').x(376).y(220);
    var  layer3= symbol1.image('images/svg/clip3/layer-3.png','190','90').x(370).y(100);
    var  layer4= symbol1.image('images/svg/clip3/layer-4.png','76','190').x(346).y(0);
    var  layer5= symbol1.image('images/svg/clip3/layer-5.png','130','204').x(165).y(24);
    var  layer6= symbol1.image('images/svg/clip3/layer-6.png','226','120').x(73).y(115);
    var  layer7= symbol1.image('images/svg/clip3/layer-7.png','200','150').x(77).y(256);
    var  layer1= symbol1.image('images/svg/clip3/layer-1.png','100%','340').x(0).y(154);

    var symbol2 = draw.symbol();
    var  layer8= symbol2.image('images/svg/clip3/layer-8.png','55','40').x(396).y(322);
    var  layer9= symbol2.image('images/svg/clip3/layer-9.png','48','52').x(400).y(78);
    var  layer10= symbol2.image('images/svg/clip3/layer-10.png','50','55').x(165).y(150);
    var  layer11= symbol2.image('images/svg/clip3/layer-11.png','42','42').x(60).y(230);
    var  layer12= symbol2.image('images/svg/clip3/layer-12.png','47','57').x(200).y(300);
    var  layer13= symbol2.image('images/svg/clip3/layer-13.png','30','30').x(180).y(400);
    var  layer14= symbol2.image('images/svg/clip3/layer-14.png','30','30').x(460).y(392);
    var  layer30= symbol2.image('images/svg/clip3/layer-14.png','30','30').x(445).y(175);
    var  layer15= symbol2.image('images/svg/clip3/layer-15.png','30','30').x(435).y(260);

    var symbol3 = draw.symbol();
    var arrow1= symbol3.image('images/svg/clip3/layer-16.png').x(240).y(364);
    var arrow2= symbol3.image('images/svg/clip3/layer-16.png').x(415).y(392);
    var arrow3= symbol3.image('images/svg/clip3/layer-16.png').x(37).y(0).rotate(90, 50, 100);
    var arrow4= symbol3.image('images/svg/clip3/layer-16.png').x(70).y(534).rotate(-90, 50, 100);
    var arrow5= symbol3.image('images/svg/clip3/layer-16.png').x(70).y(165).rotate(180, 200, 150);




    function clp(){
        layer1.move(0,254).opacity(0);
        layer1.animate(500).move(0,154).opacity(1);


        layer2.move(326,220).opacity(0);
        setTimeout(function(){
            layer2.animate(300).move(376,220).opacity(1);
        },500);

        layer3.move(320,120).opacity(0);
        setTimeout(function(){
            layer3.animate(300).move(370,100).opacity(1);
        },800);

        layer4.move(330,50).opacity(0);
        setTimeout(function(){
            layer4.animate(300).move(346,0).opacity(1);
        },1100);

        layer5.move(200,50).opacity(0);
        setTimeout(function(){
            layer5.animate(300).move(165,24).opacity(1);
        },1400);

        layer6.move(125,125).opacity(0);
        setTimeout(function(){
            layer6.animate(300).move(73,115).opacity(1);
        },1700);

        layer7.move(150,240).opacity(0);
        setTimeout(function(){
            layer7.animate(300).move(77,256).opacity(1);
        },2000);



        function moveArrow(selecter, mx , my){
            selecter.move(mx,my);
            setTimeout(function(){
                setInterval(function(){
                    selecter.animate(700,'<>').move(mx,my+15);
                    selecter.animate(700,'<>').move(mx,my);
                }, 1400);
            },1600);
        }

        moveArrow(arrow1,240,364);
        moveArrow(arrow2,415,392);
        moveArrow(arrow3,37,0);
        moveArrow(arrow4,70,534);
        moveArrow(arrow5,70,165);


        symbol2.opacity(0);
        setTimeout(function(){
            symbol2.animate(700).opacity(1);
        },2300);


        symbol3.opacity(0);
        setTimeout(function(){
            symbol3.animate(700).opacity(1);
        },3000);


        draw.use(symbol1);
        draw.use(symbol2);
        draw.use(symbol3);



    }


    $(window).on('load',function(){
        $win = $(window);
        var offset = $('#marking-clip3').offset().top;
        var high = $('#marking-clip3').height();
        offset= offset - $win.height() + high;
        var sts = true;
        $win.on('scroll', function() {
            if($win.scrollTop()>offset && sts){
                clp();
                sts=false;
            }
        });
        if($win.scrollTop()>offset && sts){
            clp();
            sts=false;
        }

    });

}


svgClip1();
svgClip2();
svgClip3();
