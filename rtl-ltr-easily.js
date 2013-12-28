$(document).ready(function(){
                                  
        $(document).on("click",'.dir_toggle',function(event){ 
            
                $("div,p,table,tr,td,span,ul,ol,li,a,input,textarea,select,button,h1,h2,h3,h4,h5,h6,label,body,article,area,audio,nav,iframe,img,footer,video,head,form,hr,code").toggleClass("rtl-easily ltr-easily");
            
        });
        
                    
});
