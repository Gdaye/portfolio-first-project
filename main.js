let banner = {

    rollId: null,

    interval: 2000,

 

    //benner reset

    rollInit: function (newinterval) {

        if(parseInt(newinterval) > 0){

            this.interval = newinterval;

        }

        //present benner

        let firstitem = document.querySelector('.rollimgs li');

        if(firstitem){

            firstitem.classList.add('currentroll');

        }

        //next benner

        let seconditem = document.querySelectorAll('.rollimgs li')[1];

        if(seconditem){

            seconditem.classList.add('nextroll');

        }

        //prev benner

        document.querySelector('.rollimgs li:last-child').classList.add('prevroll');

        this.rollId = setInterval(this.rollNext, this.interval);//롤링 인터벌 호출

    },

    

    //next benner rolling

    rollNext: function () {

        if(document.querySelector('.prevroll')){

            document.querySelector('.prevroll').classList.remove('prevroll');

        }

        if(document.querySelector('.currentroll')){

            document.querySelector('.currentroll').classList.add('prevroll');

            document.querySelector('.currentroll').classList.remove('currentroll');

        }

        if(document.querySelector('.nextroll')){

            document.querySelector('.nextroll').classList.add('currentroll');

            document.querySelector('.nextroll').classList.remove('nextroll');

        }

    //

        if(document.querySelector('.currentroll').nextElementSibling){

            document.querySelector('.currentroll').nextElementSibling.classList.add('nextroll');

        }else{

            document.querySelector('.rollimgs li').classList.add('nextroll');

        }

    },

 

    //prev benner rolling

    rollPrev: function () {

        document.querySelector('.rollimgs').classList.add('reverse');

        if(document.querySelector('.nextroll')){

            document.querySelector('.nextroll').classList.remove('nextroll');

        }

        if(document.querySelector('.currentroll')){

            document.querySelector('.currentroll').classList.add('nextroll');

            document.querySelector('.currentroll').classList.remove('currentroll');

        }

        if(document.querySelector('.prevroll')){

            document.querySelector('.prevroll').classList.add('currentroll');

            document.querySelector('.prevroll').classList.remove('prevroll');

        }else{

    

        }

        if(document.querySelector('.currentroll').previousElementSibling){

            document.querySelector('.currentroll').previousElementSibling.classList.add('prevroll');

        }else{

            document.querySelector('.rollimgs li:last-child').classList.add('prevroll');

        }

    } 

}

 

document.addEventListener('DOMContentLoaded', function(){

    banner.rollInit(4000); // benner rolling

});

 

 

 

//click event listener 

document.querySelectorAll('.btnmove').forEach(function(item){

    item.addEventListener('click', function(e){

        clearInterval(banner.rollId);

        //arrow

        if(e.target.parentElement.parentElement.classList.contains('prev')){

            banner.rollPrev();

        }else{

            banner.rollNext();

        }

        banner.rollId = setInterval(banner.rollNext, banner.interval);//롤링 인터벌 재호출

    });

});

 


 

 

 

 

    //item

 

    document.querySelector('.commet_btn2').addEventListener('click', function(){

        document.querySelector('.item_container').style.transform = 'translate(-1200px)';

    });

 

    document.querySelector('.commet_btn1').addEventListener('click', function(){

        document.querySelector('.item_container').style.transform = 'translate(0px)';

    });

 

 

    //item scroll

 

    document.querySelector('.commet_btn2').addEventListener('click', function(){

        document.querySelector('.scroll_container').style.transform = 'translate(0px)';

    });

 

    document.querySelector('.commet_btn1').addEventListener('click', function(){

        document.querySelector('.scroll_container').style.transform = 'translate(-400px)';

    });

 

 

 

        //item_mini

 

        document.querySelector('.commet_btn02').addEventListener('click', function(){

            document.querySelector('.item_container').style.transform = 'translate(-728px)';

        });

    

        document.querySelector('.commet_btn01').addEventListener('click', function(){

            document.querySelector('.item_container').style.transform = 'translate(0px)';

        });

 

 

        //item_mini scroll

 

        document.querySelector('.commet_btn02').addEventListener('click', function(){

            document.querySelector('.scroll_container').style.transform = 'translate(0px)';

        });

 

        document.querySelector('.commet_btn01').addEventListener('click', function(){

            document.querySelector('.scroll_container').style.transform = 'translate(-400px)';

        });

 

 

 



 

 

    //item2

 

 

    document.querySelector('.commet_btn4').addEventListener('click', function(){

        document.querySelector('.item_container2').style.transform = 'translate(-1200px)';

    });

 

    document.querySelector('.commet_btn3').addEventListener('click', function(){

        document.querySelector('.item_container2').style.transform = 'translate(0px)';

    });

 

     //item scroll2

 

    document.querySelector('.commet_btn4').addEventListener('click', function(){

        document.querySelector('.scroll_container2').style.transform = 'translate(0px)';

    });

 

    document.querySelector('.commet_btn3').addEventListener('click', function(){

        document.querySelector('.scroll_container2').style.transform = 'translate(-400px)';

    });

 

 

 

 

 

 

            //item_mini2

 

            document.querySelector('.commet_btn04').addEventListener('click', function(){

                document.querySelector('.item_container2').style.transform = 'translate(-728px)';

            });

        

            document.querySelector('.commet_btn03').addEventListener('click', function(){

                document.querySelector('.item_container2').style.transform = 'translate(0px)';

            });

 

 

             //item_mini scroll2

 

            document.querySelector('.commet_btn04').addEventListener('click', function(){

                document.querySelector('.scroll_container2').style.transform = 'translate(0px)';

            });

 

            document.querySelector('.commet_btn03').addEventListener('click', function(){

                document.querySelector('.scroll_container2').style.transform = 'translate(-400px)';

            });

 

 

//popup

 

    $(document).ready(function(){

        $(".menu_toggle_btn").click(function(){

            $(".popup").css({"display" : "block"});

        })

 

        $(".toggle_back_btn").click(function(){

            $(".popup").css({"display" : "none"});

        })

    });

 

 

 

 

 

 

 

    document.querySelector('.mini_benner_btn1').addEventListener('click', function(){

        document.querySelector('.mini_benner_container').style.transform = 'translateY(0px)';

    });

 

    document.querySelector('.mini_benner_btn2').addEventListener('click', function(){

        document.querySelector('.mini_benner_container').style.transform = 'translateY(-500px)';

    });

 

 

        if(document.querySelector('.mini_benner_container').style.transform = 'translateY(-500px)'){

 

            document.querySelector('.mini_benner_btn2').addEventListener('click', function(){

                document.querySelector('.mini_benner_container').style.transform = 'translateY(-1000px)';

            });

        }