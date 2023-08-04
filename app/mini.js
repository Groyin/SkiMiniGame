let a46=document.getElementById('a46')
let k9=document.getElementById('k9')
let k10=document.getElementById('k10')
let k14=document.getElementById('k14')




let b1=document.getElementById('b1')
let a1=document.getElementById('a1')
let a2=document.getElementById('a2')
let a4=document.getElementById('a4')
let a3=document.getElementById('a3')
let a5=document.getElementById('a5')

let a7=document.getElementById('a7')
let a6=document.getElementById('a6')
let a10=document.getElementById('a10')
let a11=document.getElementById('a11')
let b2=document.getElementById('b2')
let a12=document.getElementById('a12')
let a13=document.getElementById('a13')
let b3=document.getElementById('b3')


let c1=document.getElementById('c1')
let c2=document.getElementById('c2')
let c3=document.getElementById('c3')
let c4=document.getElementById('c4')
let c5=document.getElementById('c5')
let a8=document.getElementById('a8')
let a9=document.getElementById('a9')

let a15=document.getElementById('a15')
let a18=document.getElementById('a18')

let a22=document.getElementById('a22')
let a26=document.getElementById('a26')
let a30=document.getElementById('a30')
let a36=document.getElementById('a36')
let a37=document.getElementById('a37')
let a38=document.getElementById('a38')
let a40=document.getElementById('a40')

let s22=document.getElementById('s22')
let s26=document.getElementById('s26')
let s30=document.getElementById('s30')
let s36=document.getElementById('s36')
let s37=document.getElementById('s37')
let s38=document.getElementById('s38')

let audio1=document.getElementById('audio1')

let win_hei=window.innerHeight
let win_wid=window.innerWidth
console.log(win_hei,win_wid)
console.dir(a1)

b1.style.height=win_hei+'px'
b2.style.height=win_hei+'px'
a1.style.top=0.1*win_hei+'px'
a1.style.left=0.5*(win_wid-296.8)+'px'
a11.style.top=0.2*win_hei+'px'
a7.style.top=0.5*win_hei+'px'
a7.style.left=0.5*(win_wid-480)+'px'
a12.style.top=0.5*win_hei+26-64+'px'
a12.style.left=0.5*(win_wid-360)+'px'
a10.style.bottom=0.1*win_hei+'px'
a10.style.left=0.5*(win_wid-120)+'px'
k10.width=win_wid
k10.height=win_hei

window.onresize=function(){
    win_hei=window.innerHeight
    win_wid=window.innerWidth
    console.log(win_hei,win_wid)
    b1.style.height=win_hei+'px'
    b2.style.height=win_hei+'px'
    a1.style.top=0.1*win_hei+'px'
    a1.style.left=0.5*(win_wid-296.8)+'px'
    a11.style.top=0.2*win_hei+'px'
    a12.style.top=0.5*win_hei+26-64+'px'
    a12.style.left=0.5*(win_wid-360)+'px'
    a7.style.top=0.5*win_hei+'px'
    a7.style.left=0.5*(win_wid-480)+'px'
    a10.style.bottom=0.1*win_hei+'px'
    a10.style.left=0.5*(win_wid-120)+'px'
    k10.width=win_wid
    k10.height=win_hei
    

}

function f12(){
    for(i1 in man_list2){
        let can1=man_list2[i1]
        if(can1==7){
            if (i1==0) {
                c1.style.backgroundSize='1333.3px'
                c1.style.backgroundPosition=-2.08*man_list1[can1][0]+'px '+(-2.08)*man_list1[can1][1]+'px'
            }
            else if(i1==1){
                c2.style.backgroundSize='1466.6px'
                c2.style.backgroundPosition=-2.29*man_list1[can1][0]+'px '+(-2.29)*man_list1[can1][1]+'px'
            }
            else if(i1==2){
                c3.style.backgroundSize='1602.6px'
                c3.style.backgroundPosition=-2.5*man_list1[can1][0]+'px '+(-2.5)*man_list1[can1][1]+'px'
            }
            else if(i1==3){
                c4.style.backgroundSize='1466.6px'
                c4.style.backgroundPosition=-2.29*man_list1[can1][0]+'px '+(-2.29)*man_list1[can1][1]+'px'
            }
            else{
                c5.style.backgroundSize='1333.3px'
                c5.style.backgroundPosition=-2.08*man_list1[can1][0]+'px '+(-2.08)*man_list1[can1][1]+'px'
            }
        }
        else if(can1==8){
            if (i1==0) {
                c1.style.backgroundSize='1142.86px'
                c1.style.backgroundPosition=(-50/28)*man_list1[can1][0]+'px '+(-50/28)*man_list1[can1][1]+'px'
            }
            else if(i1==1){
                c2.style.backgroundSize='1257.14px'
                c2.style.backgroundPosition=(-55/28)*man_list1[can1][0]+'px '+(-55/28)*man_list1[can1][1]+'px'
            }
            else if(i1==2){
                c3.style.backgroundSize='1373.7px'
                c3.style.backgroundPosition=(-60.1/28)*man_list1[can1][0]+'px '+(-60.1/28)*man_list1[can1][1]+'px'
            }
            else if(i1==3){
                c4.style.backgroundSize='1257.14px'
                c4.style.backgroundPosition=(-55/28)*man_list1[can1][0]+'px '+(-55/28)*man_list1[can1][1]+'px'
            }
            else{
                c5.style.backgroundSize='1142.86px'
                c5.style.backgroundPosition=(-50/28)*man_list1[can1][0]+'px '+(-50/28)*man_list1[can1][1]+'px'
            }

        }
        else{
            if (i1==0) {
                c1.style.backgroundSize='1391px'
                c1.style.backgroundPosition='-460.87px '+(-2.174)*man_list1[can1][1]+'px'
            }
            else if(i1==1){
                c2.style.backgroundSize='1530.43px'
                c2.style.backgroundPosition='-507px '+(-2.39)*man_list1[can1][1]+'px'
            }
            else if(i1==2){
                c3.style.backgroundSize='1672.348px'
                c3.style.backgroundPosition='-554px '+(-2.613)*man_list1[can1][1]+'px'
            }
            else if(i1==3){
                c4.style.backgroundSize='1530.43px'
                c4.style.backgroundPosition='-507px '+(-2.39)*man_list1[can1][1]+'px'
            }
            else{
                c5.style.backgroundSize='1391px'
                c5.style.backgroundPosition='-460.87px '+(-2.174)*man_list1[can1][1]+'px'
            }
        }

    }

}


let man_list1=[
    [212,256],
    [212,320],
    [212,384],
    [212,448],
    [212,512],
    [212,576],
    [212,640],
    [211,703],
    [212,766], 
]
let man_list2=[0,1,2,3,4]
let person_name=3
a8.onclick=function(){
    for(i in man_list2){
        if (man_list2[i]==0){man_list2[i]=8}
        else{man_list2[i]-=1}   
    }
    person_name=man_list2[2]+1
    f12()
}
a9.onclick=function(){
    for(i in man_list2){
        if (man_list2[i]==8){man_list2[i]=0}
        else{man_list2[i]+=1}   
    }
    person_name=man_list2[2]+1
    f12()
}


//音乐组件//
let music_list1=['./picture/mus1.png','./picture/mus2.png']
let music_const=0
a6.onclick=function(){
    if(music_const==0){
        music_const=1
        a6.style.backgroundImage="url('./picture/mus1.png')"
        audio1.play()
    }
    else{
        music_const=0
        a6.style.backgroundImage="url('./picture/mus2.png')"
        audio1.pause()
    }


}

let a30_c=0
a38.onclick=function(){
    if (a30_c==0) {
        a30.innerText='开'
        s30.innerText='开'
        s38.checked=true
        a30_c=1
    }
    else{
        a30.innerText='关'
        s30.innerText='关'
        s38.checked=false
        a30_c=0
    }
}
s38.onclick=function(){
    if (a30_c==0) {
        a30.innerText='开'
        s30.innerText='开'
        a38.checked=true
        a30_c=1
    }
    else{
        a30.innerText='关'
        s30.innerText='关'
        a38.checked=false
        a30_c=0
    }
}
let a26_c=1
a36.onclick=function(){
    if (a26_c==0) {
        a26.innerText='开'
        s26.innerText='开'
        s36.checked=true
        a26_c=1
    }
    else{
        a26.innerText='关'
        s26.innerText='关'
        s36.checked=false
        a26_c=0
    }   
}
s36.onclick=function(){
    if (a26_c==0) {
        a26.innerText='开'
        s26.innerText='开'
        a36.checked=true
        a26_c=1
    }
    else{
        a26.innerText='关'
        s26.innerText='关'
        a36.checked=false
        a26_c=0
    }   
}
let a22_c=0
a37.onclick=function(){
    if (a22_c==0) {
        a22.innerText='开'
        s22.innerText='开'
        s37.checked=true
        a22_c=1
    }
    else{
        a22.innerText='关'
        s22.innerText='关'
        s37.checked=false
        a22_c=0
    }
}
s37.onclick=function(){
    if (a22_c==0) {
        a22.innerText='开'
        s22.innerText='开'
        a37.checked=true
        a22_c=1
    }
    else{
        a22.innerText='关'
        s22.innerText='关'
        a37.checked=false
        a22_c=0
    }
}

a13.onclick=function () {
        b3.style.visibility="hidden"
    }
a2.onclick=function (e) {
    b3.style.visibility="visible"
    e.stopPropagation()
    b1.onclick=function () {
        b3.style.visibility="hidden"
    }
    
}


let game_preinstall=[
    [
        '历史记录1241米',
        '历史记录12米',
        '历史记录0米',
    ],
    [
        '历史记录5:21',
        '历史记录10:0',
        '历史记录0:0',
    ],
    [   
        '0关卡',
        '0关卡',
        '0关卡'
    ]

]

let game_preinstall_name=['单人无尽','单人计时赛','单人障碍赛','双人无尽','双人计时赛']
let game_preinstall_difficulity=['简单','中等','困难']
let game_preinstall_1=0
let game_preinstall_2=0
let choose_game_preinstall_name='单人无尽'
let choose_game_preinstall_difficulity='简单'
a15.onchange=function () {
    game_preinstall_1=a15.selectedIndex 
    a3.innerText=game_preinstall_name[game_preinstall_1]
    a4.innerText=game_preinstall[game_preinstall_1][game_preinstall_2]
    choose_game_preinstall_name=game_preinstall_name[game_preinstall_1]
    
}
a18.onchange=function () {
    game_preinstall_2=a18.selectedIndex 
    a5.innerText=game_preinstall_difficulity[game_preinstall_2]
    a4.innerText=game_preinstall[game_preinstall_1][game_preinstall_2]
    choose_game_preinstall_difficulity=game_preinstall_difficulity[game_preinstall_2]
}



//gaming js '''''
function gaming_js1(){


    //let k1=document.getElementById('k1')
    let k3=document.getElementById('k3')
    let mouse_x=0.5*win_wid
    let mouse_y=0.9*win_hei
    let style = document.styleSheets[0]
    let bpox=0
    let bpoy=0
    let content1=1

    let k6=document.getElementById('k6')
    let k5=document.getElementById('k5')
    let k4=document.getElementById('k4')
    let k7=document.getElementById('k7')
    let a41=document.getElementById('a41')
    let a42=document.getElementById('a42')
    let a44=document.getElementById('a44')
    let a45=document.getElementById('a45')
    

    let person_picture_position={
        1:{
            1:[77,247,56,64,7,0,56,64],
            2:[140,246,56,64,7,0,56,64],
            3:[203,245,56,64,7,0,56,64],
            4:[267,246,56,64,7,0,56,64],
            5:[330,247,56,64,7,0,56,64],
            6:[7,247,70,64,0,0,70,64]
        },
        2:{
            1:[77,311,56,64,7,0,56,64],
            2:[140,310,56,64,7,0,56,64],
            3:[203,309,56,64,7,0,56,64],
            4:[267,310,56,64,7,0,56,64],
            5:[330,311,56,64,7,0,56,64],
            6:[7,312,70,64,0,0,70,64]
        },
        3:{
            1:[77,375,56,64,7,0,56,64],
            2:[140,374,56,64,7,0,56,64],
            3:[203,373,56,64,7,0,56,64],
            4:[267,374,56,64,7,0,56,64],
            5:[330,375,56,64,7,0,56,64],
            6:[7,376,70,64,0,0,70,64]
        },
        4:{
            1:[77,439,56,64,7,0,56,64],
            2:[140,438,56,64,7,0,56,64],
            3:[203,437,56,64,7,0,56,64],
            4:[267,438,56,64,7,0,56,64],
            5:[330,439,56,64,7,0,56,64],
            6:[7,440,70,64,0,0,70,64]
        },
        5:{
            1:[77,504,56,64,7,0,56,64],
            2:[140,503,56,64,7,0,56,64],
            3:[203,502,56,64,7,0,56,64],
            4:[267,503,56,64,7,0,56,64],
            5:[330,504,56,64,7,0,56,64],
            6:[7,504,70,64,0,0,70,64]
        },
        6:{
            1:[77,568,56,64,7,0,56,64],
            2:[140,567,56,64,7,0,56,64],
            3:[203,566,56,64,7,0,56,64],
            4:[267,567,56,64,7,0,56,64],
            5:[330,568,56,64,7,0,56,64],
            6:[7,568,70,64,0,0,70,64]
        },
        7:{
            1:[77,632,56,63,7,0,56,63],
            2:[140,631,56,63,7,0,56,63],
            3:[203,630,56,63,7,0,56,63],
            4:[267,631,56,63,7,0,56,63],
            5:[330,632,56,63,7,0,56,63],
            6:[7,632,70,62,0,0,70,62]
        },
        8:{
            1:[77,695,56,64,7,0,56,64],
            2:[141,694,56,66,7,0,56,66],
            3:[203,693,56,68,7,0,56,68],
            4:[266,694,56,66,7,0,56,66],
            5:[330,695,56,64,7,0,56,64],
            6:[6,692,70,64,0,0,70,64]
        },
        9:{
            1:[79,758,56,64,7,0,56,64],
            2:[143,759,56,64,7,0,56,64],
            3:[204,760,56,64,7,0,56,64],
            4:[266,759,56,64,7,0,56,64],
            5:[329,758,56,64,7,0,56,64],
            6:[3,767,70,64,0,0,70,64]
        }
    }
    let ctx_k5=k5.getContext("2d")
    
    let person_direction=3
    let need_person=person_picture_position[person_name][person_direction]
    
    
    ctx_k5.drawImage(k6,need_person[0],need_person[1],need_person[2],need_person[3],need_person[4],need_person[5],need_person[6],need_person[7])
    

    style.insertRule("@keyframes moving_a1{from{ }to{ background-position:"+bpox+"px "+(bpoy-10**5)+"px;}}",0);
    k3.style.animation='moving_a1 '+300+'s linear both'

    //---背景物体解决方案---//
    var ctx_vc1=k10.getContext("2d")
    //物体图像固定数据
    let obj_img_mess={
        small_img:[
            {   x:5,
                y:62,
                w:52,
                h:69,
                bwidth:52,
                bheight:69
            },
            {   x:56,
                y:71,
                w:53,
                h:44,
                bwidth:53,
                bheight:44
            },
            {
                x:115,
                y:90,
                w:64,
                h:34,
                bwidth:59,
                bheight:34
            },
            {
                x:178,
                y:93,
                w:62,
                h:24,
                bwidth:62,
                bheight:24
            },
            {
                x:240,
                y:69,
                w:65,
                h:49,
                bwidth:65,
                bheight:49
            },
            {
                x:370,
                y:65,
                w:42,
                h:55,
                bwidth:42,
                bheight:55
            },
            {
                x:447,
                y:73,
                w:32,
                h:45,
                bwidth:32,
                bheight:45
            },
            {
                x:505,
                y:74,
                w:46,
                h:45,
                bwidth:46,
                bheight:45
            },
            {
                x:572,
                y:65,
                w:40,
                h:54,
                bwidth:40,
                bheight:54
            },
            {
                x:505,
                y:74,
                w:46,
                h:45,
                bwidth:46,
                bheight:45
            },
            {
                x:505,
                y:74,
                w:46,
                h:45,
                bwidth:46,
                bheight:45
            },
            

        ],
        big_img:[
            {
                x:373,
                y:160,
                w:182,
                h:84,
                bwidth:182,
                bheight:84
            },
            {
                x:559,
                y:127,
                w:186,
                h:122,
                bwidth:186,
                bheight:122
            },
            {
                x:505,
                y:74,
                w:46,
                h:45,
                bwidth:46,
                bheight:45
            },
            {
                x:751,
                y:153,
                w:186,
                h:97,
                bwidth:186,
                bheight:97
            },
            {
                x:367,
                y:298,
                w:123,
                h:67,
                bwidth:123,
                bheight:67
            },
            {
                x:882,
                y:390,
                w:62,
                h:114,
                bwidth:62,
                bheight:114
            },
            {
                x:818,
                y:390,
                w:58,
                h:113,
                bwidth:58,
                bheight:113
            }
        ],
        all:function(){
            return this.small_img.concat(this.big_img)}
    }

    //随机整数生成器
    function randomNum(minNum,maxNum){ 
        switch(arguments.length){ 
            case 1: 
                return parseInt(Math.random()*minNum+1,10); 
            break; 
            case 2: 
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
                default: 
                    return 0; 
                break; 
        } 
    } 


    let old_x0=0.5*win_wid
    let old_y0=0.5*win_hei
    let old_round_r=0

    let cen_x0=0.5*win_wid
    let cen_y0=0.5*win_hei//圆心绝对坐标
    let bopox=0
    let bopoy=0//屏幕中心相对坐标

    //获取下一个图形生成区域信息
    let round_r=2*Math.sqrt((win_hei**2)+(win_wid**2))
    let win_ss=Math.round(Math.PI*0.5*(round_r)**2)
    let nums_object=Math.round(win_ss/300000)//根据可视区面积推出要新生成物体的数量
    console.log(round_r)
    //随机生成位置
    let list_position=[]
    for(let i4=0;i4<nums_object;i4++){
        var rr=Math.random()*round_r
        var anglee=Math.random()*Math.PI
        var zzpox=cen_x0+rr*Math.cos(anglee)
        var zzpoy=cen_y0+rr*Math.sin(anglee)
        if((zzpox-old_x0)**2+(zzpoy-old_y0)**2>old_round_r**2){
            list_position.push([zzpox,zzpoy])
        }
    }
    console.log(list_position)
    //匹配位置对应的图像,新物体查找
    let obj_all=obj_img_mess.all()
    let new_obj=[]//
    var can_ci
    var can_obj
    for(let i1=0;i1<list_position.length;i1++){
        can_ci=list_position[i1]
        can_obj=JSON.parse(JSON.stringify( obj_all[randomNum(0,obj_all.length-1)]  ))

        can_obj.pox=can_ci[0]
        can_obj.poy=can_ci[1]
        new_obj.push(can_obj)
        console.log(can_obj)
    }

    //渲染新图像
    for(let i5=0;i5<new_obj.length;i5++){
        var can2=new_obj[i5]
        ctx_vc1.drawImage(k9,can2.x,can2.y,can2.w,can2.h,can2.pox,can2.poy,can2.bwidth,can2.bheight)
    }
    //图形生成区域的全部图形数组
    let all_obj=[[],[]]

    //更新图形对象库
    all_obj.push(new_obj)

    
    //--over--//
    let running_obj_animation=anim1()
    window.onmousemove=function(a){
        
        bpox=parseFloat(window.getComputedStyle(k3, null).backgroundPositionX)
        bpoy=parseFloat(window.getComputedStyle(k3, null).backgroundPositionY)

        mouse_x=a.x
        mouse_y=a.y

        if(mouse_y<=0.5*win_hei){
            //stop
            if(content1!=0){
                clearInterval(running_obj_animation)
                //bpox=parseFloat(window.getComputedStyle(k3, null).backgroundPositionX)
                //bpoy=parseFloat(window.getComputedStyle(k3, null).backgroundPositionY)
                ctx_k5.clearRect(0, 0, 70, 68)
                person_direction=6
                need_person=person_picture_position[person_name][person_direction]
                ctx_k5.drawImage(k6,need_person[0],need_person[1],need_person[2],need_person[3],need_person[4],need_person[5],need_person[6],need_person[7])

                //console.log(2,bpox,bpoy)
                k3.style.backgroundPosition=bpox+'px '+bpoy+'px '
                style.deleteRule(0)
                style.insertRule("@keyframes moving_a00{from{ }to{ background-position:"+bpox+"px "+bpoy+"px;}}",0);
                //v=50px/s
                k3.style.animation='moving_a00 '+300+'s linear both'

                content1=0
            }
        }
        else{
            
            if(mouse_y>=5*mouse_x-2.5*win_wid+0.5*win_hei && mouse_y>=-5*mouse_x+2.5*win_wid+0.5*win_hei){
                //center
                if (content1!=1) {
                    clearInterval(running_obj_animation)

                    ctx_k5.clearRect(0, 0, 70, 68)
                    person_direction=3
                    need_person=person_picture_position[person_name][person_direction]
                    ctx_k5.drawImage(k6,need_person[0],need_person[1],need_person[2],need_person[3],need_person[4],need_person[5],need_person[6],need_person[7])

                    //console.log(bpox,bpoy)
                    k3.style.backgroundPosition=bpox+'px '+bpoy+'px '
                    style.deleteRule(0)
                    style.insertRule("@keyframes moving_a0{from{ }to{ background-position:"+bpox+"px "+(bpoy-10**5)+"px;}}",0);
                    //v=1000/3 px/s
                    k3.style.animation='moving_a0 '+300+'s linear  both'
                    
                    content1=1

                    running_obj_animation=anim1()
                }

            }
            else if(mouse_x<0.5*win_wid){
                if(mouse_y>=-1.5*mouse_x+0.75*win_wid+0.5*win_hei){
                    //left 1
                    if (content1!=2) {
                        clearInterval(running_obj_animation)
                        //bpox=parseFloat(window.getComputedStyle(k3, null).backgroundPositionX)
                        //bpoy=parseFloat(window.getComputedStyle(k3, null).backgroundPositionY)
                        ctx_k5.clearRect(0, 0, 70, 68)
                        person_direction=2
                        need_person=person_picture_position[person_name][person_direction]
                        ctx_k5.drawImage(k6,need_person[0],need_person[1],need_person[2],need_person[3],need_person[4],need_person[5],need_person[6],need_person[7])
                
                        //console.log(bpox,bpoy)
                        k3.style.backgroundPosition=bpox+'px '+bpoy+'px '
                        style.deleteRule(0)
                        style.insertRule("@keyframes moving_a3{from{   }to{ background-position:"+(bpox+38268)+"px "+(bpoy-92390)+"px;}}",0);
                        //v=400px/s
                        k3.style.animation='moving_a3 '+300+'s  linear both'
                        
                        content1=2

                        running_obj_animation=anim2()
                    }
                    
                }
                else{
                    if(content1!=3){
                        clearInterval(running_obj_animation)
                        //bpox=parseFloat(window.getComputedStyle(k3, null).backgroundPositionX)
                        //bpoy=parseFloat(window.getComputedStyle(k3, null).backgroundPositionY)
  
                        //left 2
                        ctx_k5.clearRect(0, 0, 70, 68)
                        person_direction=1
                        need_person=person_picture_position[person_name][person_direction]
                        ctx_k5.drawImage(k6,need_person[0],need_person[1],need_person[2],need_person[3],need_person[4],need_person[5],need_person[6],need_person[7])

                        //console.log(bpox,bpoy)
                        k3.style.backgroundPosition=bpox+'px '+bpoy+'px '
                        style.deleteRule(0)
                        style.insertRule("@keyframes moving_a4{from{  }to{ background-position:"+(bpox+70710)+"px "+(bpoy-70710)+"px;}}",0);
                        //v=400px/s
                        k3.style.animation='moving_a4 '+300+'s  linear both'
                        
                        content1=3

                        running_obj_animation=anim3()
                    }

                }
            }
            else{
                if(mouse_y>=1.5*mouse_x-0.75*win_wid+0.5*win_hei){
                    if (content1!=4) {
                        clearInterval(running_obj_animation)
                        //bpox=parseFloat(window.getComputedStyle(k3, null).backgroundPositionX)
                        //bpoy=parseFloat(window.getComputedStyle(k3, null).backgroundPositionY)
                        //right 1
                        ctx_k5.clearRect(0, 0, 70, 68)
                        person_direction=4
                        need_person=person_picture_position[person_name][person_direction]
                        ctx_k5.drawImage(k6,need_person[0],need_person[1],need_person[2],need_person[3],need_person[4],need_person[5],need_person[6],need_person[7])

                        //console.log(bpox,bpoy)
                        k3.style.backgroundPosition=bpox+'px '+bpoy+'px '
                        style.deleteRule(0)
                        style.insertRule("@keyframes moving_a2{from{}to{ background-position:"+(bpox-38268)+"px "+(bpoy-92390)+"px;}}",0);
                        //v=400px/s
                        k3.style.animation='moving_a2 '+300+'s  linear both'
                        
                        content1=4

                        running_obj_animation=anim4()
                    }

                }
                else{
                    if(content1!=5){
                        clearInterval(running_obj_animation)
                        //bpox=parseFloat(window.getComputedStyle(k3, null).backgroundPositionX)
                        //bpoy=parseFloat(window.getComputedStyle(k3, null).backgroundPositionY)
                        //right 2

                        ctx_k5.clearRect(0, 0, 70, 68)
                        person_direction=5
                        need_person=person_picture_position[person_name][person_direction]
                        ctx_k5.drawImage(k6,need_person[0],need_person[1],need_person[2],need_person[3],need_person[4],need_person[5],need_person[6],need_person[7])

                        //console.log(bpox,bpoy)
                        k3.style.backgroundPosition=bpox+'px '+bpoy+'px '
                        style.deleteRule(0)
                        style.insertRule("@keyframes moving_a3{from{  }to{ background-position:"+(bpox-70710)+"px "+(bpoy-70710)+"px;}}",0);
                        //v=400px/s
                        k3.style.animation='moving_a3 '+300+'s  linear both'
                        
                        content1=5

                        running_obj_animation=anim5()
                    }
                }
            }
            //k3.style.animationPlayState="running"
        }
    }
    //构造人物位置监视器
    setInterval(
        function interval_position_f(){
            console.log(bopox,bopoy,round_r)
            //检测到需要创建新物体
            
            if((bopox**2+bopoy**2)>=((0.5*round_r)**2)){
                
                console.log(50000)
                //创建新物体函数
                old_x0=cen_x0+bopox
                old_y0=cen_y0+bopoy
                old_round_r=round_r

                cen_x0=0.5*win_wid
                cen_y0=0.5*win_hei
                bopox=0
                bopoy=0
                
                win_s0=win_hei*win_wid
                round_r=2*Math.sqrt((win_hei**2)+(win_wid**2))
                win_ss=Math.round(Math.PI*0.5*(round_r)**2)
                nums_object=Math.round(win_ss/200000)//需要生成物体数量
                console.log(1,nums_object)
                //随机生成位置
                list_position=[]
                for(let i4=0;i4<nums_object;i4++){
                    rr=Math.random()*round_r
                    anglee=Math.random()*Math.PI
                    zzpox=cen_x0+rr*Math.cos(anglee)
                    zzpoy=cen_y0+rr*Math.sin(anglee)
                    if((zzpox-old_x0)**2+(zzpoy-old_y0)**2>old_round_r**2){
                        list_position.push([zzpox,zzpoy])
                    }
                }
                console.log(2,list_position)
                //匹配位置对应的图像,新物体查找
                new_obj=[]
                
                for(let i1=0;i1<list_position.length;i1++){
                    can_obj=JSON.parse(JSON.stringify( obj_all[randomNum(0,obj_all.length-1)]  ))
                    can_obj.pox=list_position[i1][0]
                    can_obj.poy=list_position[i1][1]
                    new_obj.push(can_obj)
                    console.log(can_obj)
                }
                //渲染新图像
                for(let i5=0;i5<new_obj.length;i5++){
                    can2=JSON.parse(JSON.stringify( new_obj[i5]  ))
                    ctx_vc1.drawImage(k9,can2.x,can2.y,can2.w,can2.h,can2.pox,can2.poy,can2.bwidth,can2.bheight)
                }

                //更新图形对象库
                all_obj.shift()
                all_obj.push(new_obj )
                
                console.log(all_obj)

            }
        }
    ,100)
    
    let start_time=new Date().getTime()
    let run_time=0
    let haomiao=0
    let miao=0
    let fen=0
    let all_use_time=0

    let setinterval_1=setInterval(
        function(){
        run_time=new Date().getTime()-start_time+all_use_time
        haomiao=parseInt((run_time%1000)/10)
        miao=(parseInt(run_time/1000))%60
        fen=parseInt((parseInt(run_time/1000))/60)
        k4.innerText=fen+':'+miao+'.'+haomiao}
        ,10)
    k7.innerHTML=choose_game_preinstall_name+'  '+choose_game_preinstall_difficulity
    a42.onclick=function(){
        a46.style.visibility='visible'
        a41.style.visibility='visible'
        all_use_time=run_time
        clearInterval(setinterval_1)
    }
    a44.onclick=function () {
        a46.style.visibility='hidden'
        a41.style.visibility='hidden'
        start_time=new Date().getTime()
        setinterval_1=setInterval(
            function(){
                run_time=new Date().getTime()-start_time+all_use_time
                haomiao=parseInt((run_time%1000)/10)
                miao=(parseInt(run_time/1000))%60
                fen=parseInt((parseInt(run_time/1000))/60)
                k4.innerText=fen+':'+miao+'.'+haomiao}
            ,10)
    }
    a45.onclick=function(){
        style.deleteRule(0)
        k3.style.animation=''
        window.onmousemove=null
        ctx_k5.clearRect(0, 0, 70, 68)
        a40.style.visibility='hidden'
        a41.style.visibility='hidden'
        a46.style.visibility='hidden'
        
        b1.style.visibility='visible'
        return 1
    }

    //动画函数
    //竖直向下v=1000/3 px/s
    function anim1() {
        var anima1=setInterval(()=>{
            ctx_vc1.clearRect(0, 0,win_wid, win_hei )
            bopox+=0
            bopoy-=5
            for(let i2 in all_obj){
                for(let i3 in all_obj[i2]){
                    all_obj[i2][i3].pox+=0
                    all_obj[i2][i3].poy-=5
                    var canner1=JSON.parse(JSON.stringify(  all_obj[i2][i3] ))
                    ctx_vc1.drawImage(k9,canner1.x,canner1.y,canner1.w,canner1.h,canner1.pox,canner1.poy,canner1.bwidth,canner1.bheight);
                }
            }
        },15)
        return anima1
    }
    //向左45
    function anim3() {
        var anima3=setInterval(()=>{
            ctx_vc1.clearRect(0, 0, win_wid, win_hei)
            bopox+=3.5
            bopoy-=3.5
            for(let i2 in all_obj){
                for(let i3 in all_obj[i2]){
                    all_obj[i2][i3].pox+=3.5
                    all_obj[i2][i3].poy-=3.5
                    var canner1=JSON.parse(JSON.stringify(  all_obj[i2][i3] ))
                    ctx_vc1.drawImage(k9,canner1.x,canner1.y,canner1.w,canner1.h,canner1.pox,canner1.poy,canner1.bwidth,canner1.bheight);

                }
            }
        },15)
        return anima3
    }
    //向右45
    function anim5() {
        var anima5=setInterval(()=>{
            ctx_vc1.clearRect(0, 0, win_wid, win_hei )
            bopox-=3.5
            bopoy-=3.5
            for(let i2 in all_obj){
                for(let i3 in all_obj[i2]){
                    all_obj[i2][i3].pox-=3.5
                    all_obj[i2][i3].poy-=3.5
                    var canner1=JSON.parse(JSON.stringify(  all_obj[i2][i3] ))
                    ctx_vc1.drawImage(k9,canner1.x,canner1.y,canner1.w,canner1.h,canner1.pox,canner1.poy,canner1.bwidth,canner1.bheight);
                }
            }

        },15)
    return anima5
    }
    //向左22.5
    function anim2() {
        var anima2=setInterval(()=>{
            ctx_vc1.clearRect(0, 0, win_wid, win_hei  )
            bopox+=1.9
            bopoy-=4.6
            for(let i2 in all_obj){
                for(let i3 in all_obj[i2]){
                    all_obj[i2][i3].pox+=1.9
                    all_obj[i2][i3].poy-=4.6
                    var canner1=JSON.parse(JSON.stringify( all_obj[i2][i3]  ))
                    ctx_vc1.drawImage(k9,canner1.x,canner1.y,canner1.w,canner1.h,canner1.pox,canner1.poy,canner1.bwidth,canner1.bheight);
                }
            }
        },15)
        return anima2
    }
    //向右22.5
    function anim4() {
        var anima4=setInterval(()=>{
            ctx_vc1.clearRect(0, 0, win_wid, win_hei )
            bopox-=1.9
            bopoy-=4.6
            for(let i2 in all_obj){
                for(let i3 in all_obj[i2]){
                    all_obj[i2][i3].pox-=1.9
                    all_obj[i2][i3].poy-=4.6
                    var canner1=JSON.parse(JSON.stringify( all_obj[i2][i3]  ))
                    ctx_vc1.drawImage(k9,canner1.x,canner1.y,canner1.w,canner1.h,canner1.pox,canner1.poy,canner1.bwidth,canner1.bheight);
                }
            }

        },15)
        return anima4
    }
}
a40.style.visibility='hidden'
a41.style.visibility='hidden'
a10.onclick=function () {
    b1.style.visibility='hidden'
    a40.style.visibility='visible'
  
    gaming_js1()
}