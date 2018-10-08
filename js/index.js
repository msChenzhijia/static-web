$(function(){    
    //body初始化数据
    var i=0;
    var width=1903;
    var vm1=new Vue({
       el:'#body',
       data:{
           sites:[
               {key:1,name:'HTML',url:'#'},
               {key:2,name:'JAVA',url:'#'},
               {key:3,name:'C#',url:'#'},
               {key:4,name:'Linux',url:'#'},                 
               {key:5,name:'Git',url:'#'},                    
               {key:6,name:'PHP',url:'#'}                    
           ],
           sites1:[
            {url:"img/u=3110728396,3956282060&fm=26&gp=0.jpg",title:"作为一个设计师,如果遭到质疑你是否能恪守自己的原则",content:"曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的..."},
            {url:"img/u=3382007437,105123903&fm=26&gp=0.jpg",title:"最后的午餐",content:"昨晚上做梦了，我本不想记下，可是又怕这种似乎有点真实的感觉就这样溜走，枕头湿了...我也记不得我是在梦中哭过还是...... &shy;在一个小餐馆，男孩叫了一份鱼香茄子、麻婆..."},
            {url:"img/u=4177649261,3020498856&fm=26&gp=0.jpg",title:"作为一个设计师,如果遭到质疑你是否能恪守自己的原则",content:"曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的..."}                      
           ],
           sites2:[
            {url:"img/u=3110728396,3956282060&fm=26&gp=0.jpg"},
            {url:"img/u=3382007437,105123903&fm=26&gp=0.jpg"},
            {url:"img/u=4177649261,3020498856&fm=26&gp=0.jpg"}                      
           ]
       }
    });
    //header初始化数据
    var vm2=new Vue({
        el:"#header",
        data:{
            sites:[
               {key:1,name:'CZJ个人博客',url:'#'},
               {key:1,name:'网站首页',url:'#'},
               {key:1,name:'关于我',url:'#'},
               {key:1,name:'本网站代码',url:'#'},               
               {key:1,name:'慢生活',url:'#'},
               {key:1,name:'WEB',url:'#'},               
               {key:2,name:'后台登陆',url:'#'},
               {key:3,name:'留言',url:'#'}                       
           ],
           sites1:[
                {url:"img/u=3110728396,3956282060&fm=26&gp=0.jpg"},
                {url:"img/u=3382007437,105123903&fm=26&gp=0.jpg"},
                {url:"img/u=4177649261,3020498856&fm=26&gp=0.jpg"}
            ]
        }
    });
    //计算$("#header .imgBox .imgul")的长度
    var sites1length=vm2.sites1.length;     
    var ULlength=sites1length*1903;       
    $("#header .imgBox .imgul").css("width",ULlength+'px');        
    UlNum(sites1length);  
    var c=$("#header .ulNum ul li").length;    
    for (let index = 0; index <c; index++) {     
        $("#header .ulNum ul li:eq("+index+")").click(function(){
            for (let index = 0; index < c; index++) {
                $("#header .ulNum ul li:eq("+index+")").removeClass('active');                
            }
            $("#header .ulNum ul li:eq("+index+")").addClass('active');   
        })
    }
    //下一张
    $("#header .right").click(function(){
        if(i<sites1length-1){
            i++;       
        }
        else{
            i=0;      
        }
        let width1=width*i;
        $("#header .imgBox .imgul").animate({left:-width*i+"px"},500);  
    })       
    //上一张
    $("#header .left").click(function(){        
        if(i<=0){  
            i=3;
           var left = $('#header .imgBox .imgul').css('left');
           $("#header .imgBox .imgul").animate({right:width*(i-3)+"px"},500);  
           console.log(left)            ;
        }
        else{            
            i--;          
            $("#header .imgBox .imgul").animate({right:-width*i+"px"},500);
            console.log($("#header .imgBox .imgul").css('right'))
        }        
    })                       
})  
//添加                            
function UlNum(length){
    for(var i=0;i<length;i++){        
        $("#header .ulNum ul").append('<li></li>');
    }
       
}
/*
   单击添加样式
   val对象
   length数量
*/
function clickAddClass(val,length){
    for(var i=0;i<length;i++){

    }
}