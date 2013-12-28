rtl-ltr-easily
==============

with this small javascript you can add abutton on your site to convert it totally from rtl to ltr direction


How to use
==============
just include the .js and .css files inside your script HEAD tags



HTML DOMS
==============
div,p,table,tr,td,span,ul,ol,li,a,input,textarea,select,button,h1,h2,h3,h4,h5,h6,label,body,article,area,audio,nav,iframe,img,footer,video,head,form,hr,code

Please feel free to add any DOMS or use it in specific dom


Good ideas where to use
==============
If your site have a reading-pan for writing or reading text , you can make it toggle direction so that anyone can use this important reading-ban in LTR or RTL without having to make another full site style in RTL or LTR



        $(document).on("click",'.dir_toggle',function(event){ 
            
                $("#reading-ban").toggleClass("rtl-easily ltr-easily");
            
        });


