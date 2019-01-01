function pageclick(nextpage){
     nextpage.addEventListener("click",function(){
                var contents=document.getElementsByClassName("introbg-content");
                if(contents[0].classList.contains("introbg-content-ani")){
                    contents[0].classList.add("introbg-content-ani-reserve");
                    contents[1].classList.add("introbg-content-ani-reserve");
                    setTimeout(function(){
                        contents[0].classList.remove("introbg-content-ani-reserve");
                        contents[1].classList.remove("introbg-content-ani-reserve");
                        contents[0].classList.remove("introbg-content-ani");
                        contents[1].classList.remove("introbg-content-ani");
                        var arrow=document.getElementById("introbg-arrow");
                        arrow.classList.remove("introbg-arrow-reserve");
                    },1000); 
                }
                else{
                   contents[0].classList.add("introbg-content-ani");
                   contents[1].classList.add("introbg-content-ani");
                    setTimeout(function(){
                        var arrow=document.getElementById("introbg-arrow");
                        arrow.classList.add("introbg-arrow-reserve");
                    },1000); 
                }
            });
}