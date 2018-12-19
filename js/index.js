        //add cloud
function addcloud(clouds){
        for(var i=0;i<50;i++){
            var cloud=document.createElement("img");
            if(i%2==0)
                cloud.setAttribute("src","index_image/cloud01.png");
            else
                cloud.setAttribute("src","index_image/cloud02.png");
            var cloudtop=Math.random()*500-300;
            cloud.style.top=cloudtop;
            var cloudleft=Math.random()*1500-500;
            cloud.style.left=cloudleft;
            
            if(cloudtop<-200){
                cloud.classList.add("clouds_top");
            }
            else if(cloudtop>100){
                cloud.classList.add("clouds_down");
            }
            else if(cloudleft<250){
                cloud.classList.add("clouds_left");
            }
            else if(cloudleft>=250){
                cloud.classList.add("clouds_right");
            }
            clouds.appendChild(cloud);
        }
}
function usemenu(menu){
        //li:hover
        setTimeout(function(){
        for(var i=0;i<menu.length;i++){ 
          menu[i].addEventListener("mouseover",function(){
                this.children[0].classList.remove("start");
                this.children[0].style.display="none";
                this.children[1].children[0].style.display="inline-block";
            }); 
          menu[i].addEventListener("mouseout",function(){
                this.children[0].style.display="inline-block";
                this.children[1].children[0].style.display="none";
            }); 
        }
        },14500);
}    
        