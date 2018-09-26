$(function(){
    //body初始化数据
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
           ]
       }
    });
    //header初始化数据
    var vm2=new Vue({
        el:"#header",
        data:{
            sites:[
               {key:1,name:'个人简历',url:'#'},
               {key:2,name:'登陆',url:'#'},
               {key:3,name:'关于',url:'#'}                       
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
            $("#header  .ulNum ul li:eq("+index+")").addClass('active');   
        })
    }          
       
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