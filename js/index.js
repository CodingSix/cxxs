//cxxs by cjf 2015/10/31
$(document).ready(function(){
    //banner����
    var img=$('.banner_bg a');
    var index=0;//����
    $('#next').click(function(){
        index=(index+1)%3;
        img.eq(index).fadeIn().siblings().fadeOut();
    });
    $('#prev').click(function(){
        index=(index+1)%3;
        img.eq(index).fadeIn().siblings().fadeOut();
    });
    //���ö�ʱ����
    var playtime=3000;//banner���ż��ʱ��
    play = function(){
        img.eq(index).fadeIn().siblings().fadeOut();
        index = (index+1)%3;
        mytime = setTimeout(play,playtime);
    }
    mytime = setTimeout(play,playtime);
    //����������ֹͣ����
    $('#banner').hover(function(){
        clearTimeout(mytime);
    },function(){
        mytime = setTimeout(play,playtime);
    });

    //�������¼�
    var backtop=document.getElementById('backtop');
    var sidebar=document.getElementById('sidebar');
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;
    window.onscroll = function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;
        if(osTop > 0.2*clientHeight){
            sidebar.style.display = "block";
        }else{
            sidebar.style.display = "none";
        }
    };

    //���ض���
    backtop.onclick = function(){
        timer = setInterval(function(){
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var scrollSpeed = Math.floor(osTop/4);
            isTop = true;
            document.documentElement.scrollTop = document.body.scrollTop = osTop - scrollSpeed;
            if(osTop < 20){
                document.documentElement.scrollTop = document.body.scrollTop=0;
                clearInterval(timer);
            }
        },35);
    };

    //�����bug
    $('#wechat').mousemove(function(){
        sidebar.style.zIndex=100;
    });
    $('#wechat').mouseout(function(){
        sidebar.style.zIndex=1;
    });

    // ���ѡ������
    var people=document.getElementById('people');
    var audio=document.getElementById('audio');
    var singer=document.getElementById('singerpic');
    var all=document.getElementById('all');
    
    $('#close').click(function(){
        people.style.opacity=0;
        people.style.zIndex=-10;
        audio.pause();
        all.style.display="block";
        vote_on.style.zIndex=-100;
        vote_on.style.display='none';
    });

    //�����ѡ����Ϣ
    $('#votesum1').html("<p>������</p><p>111</p><small>Ʊ</small>");
    $('#votesum2').html("<p>����</p><p>222</p><small>Ʊ</small>");
    $('#votesum3').html("<p>��Ӿ��</p><p>333</p><small>Ʊ</small>");
    $('#votesum4').html("<p>������</p><p>444</p><small>Ʊ</small>");
    $('#votesum5').html("<p>��껺�</p><p>555</p><small>Ʊ</small>");
    $('#votesum6').html("<p>ice���</p><p>666</p><small>Ʊ</small>");
    $('#votesum7').html("<p>������</p><p>777</p><small>Ʊ</small>");
    $('#votesum8').html("<p>���ϼ�</p><p>888</p><small>Ʊ</small>");
    $('#votesum9').html("<p>��Ρ</p><p>999</p><small>Ʊ</small>");
    $('#votesum10').html("<p>����Դ</p><p>1111</p><small>Ʊ</small>");


    $('#singer1').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src="music/singer1.mp3";
        $('#song').html("<p>���������鷳��- ������</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>111</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url(image/singer_1.png)");
    });

     $('#singer2').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
         audio.src="music/singer2.mp3";
         $('#song').html("<p>����ǰ����- ����</p>");
         $('#getvote').html("<p>���Ʊ��:<strong>222</strong><small>Ʊ</small></p>");
         $('#people').css("background-image","url(image/singer_2.png)");
    });

    $('#singer3').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src="music/singer3.mp3";
        $('#song').html("<p>���������ˡ�- ��Ӿ��</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>333</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url(image/singer_3.png)");
    });

    $('#singer4').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src="music/singer4.mp3";
        $('#song').html("<p>����վ��- ������</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>444</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url(image/singer_4.png)");
    });

    $('#singer5').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src="music/singer5.mp3";
        $('#song').html("<p>����衷- ��껺�</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>555</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url(image/singer_5.png)");
    });

    $('#singer6').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src="music/singer6.mp3";
        $('#song').html("<p>���������鷳��- ice���</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>666</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url(image/singer_6.png)");
    });

    $('#singer7').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src="music/singer7.mp3";
        $('#song').html("<p>�����ڴ���- ������</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>777</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url(image/singer_7.png)");
    });

    $('#singer8').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src="music/singer8.mp3";
        $('#song').html("<p>����������ҵ����ϡ� - ���ϼ�</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>888</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url(image/singer_8.png)");
    });

    $('#singer9').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src="music/singer9.mp3";
        $('#song').html("<p>���޷����ѡ� - ��Ρ</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>999</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url(image/singer_9.png)");
    });

    $('#singer10').click(function(){
        $('#people').animate({
            opacity:1
        },300);
        people.style.zIndex=10;
        all.style.display="none";
        audio.src="music/singer10.mp3";
        $('#song').html("<p>���ҵĸ���� - ����Դ</p>");
        $('#getvote').html("<p>���Ʊ��:<strong>1111</strong><small>Ʊ</small></p>");
        $('#people').css("background-image","url(image/singer_10.png)");
    });

    //ͶƱ����
    var vote_on=document.getElementById('vote_on');
    var write=document.getElementById('write');
    var choice=document.getElementById('choice');
    $('#vote_click').click(function(){
        vote_on.style.zIndex=999;
        vote_on.style.display='block';
    });

    $('#close_').click(function(){
        vote_on.style.zIndex=-100;
        vote_on.style.display='none';
    });

    $('#write_text').click(function(){
        write.style.display='block';
        choice.style.display='none';
    });

    $('#close_text').click(function(){
        vote_on.style.zIndex=-100;
        vote_on.style.display='none';
    });

    $('#submit').click(function(){
       alert('�ύ�ɹ�');
        write.style.display='none';
        choice.style.display='block';
        vote_on.style.zIndex=-100;
        vote_on.style.display='none';
    });

  //���̼�����
    $(document).keydown(function(e){
        if(!e) var e = window.event;
        if(e.keyCode==27){
            people.style.opacity=0;
            people.style.zIndex=-10;
            audio.pause();
            all.style.display="block";
            vote_on.style.zIndex=-100;
            vote_on.style.display='none';
        }
    });
});

