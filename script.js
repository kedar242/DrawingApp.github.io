//javascript.js
$(function(){
    
    
    //declare variables
    
    //paintingerasing or not    
    var paint = false;
    
    //painting or erasing
    var paint_erase = "paint";
    
    //get the canvas and context
    var canvas = document.getElementById("paint");
    var ctx = canvas.getContext("2d");
    
    //get the canvas container
    var container = $("#container");
        
    //mouse position
    var mouse = {x: 0, y: 0};
    
    //onload load saved work from localStorage
    if(localStorage.getItem("imgCanvas") != null){
        var img = new Image();
        img.onload = function(){
            ctx.drawImage(img, 0, 0);   
        }
        img.src = localStorage.getItem("imgCanvas");
    };
    //set drawing parameters (lineWidth, lineJoin, lineCap)
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    
    //click inside container
    container.mousedown(function(e){
        paint = true;
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.moveTo(mouse.x, mouse.y);
    });
    
    //move the mouse while holding mouse key
    container.mousemove(function(e){
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if(paint == true){
            if(paint_erase == "paint"){
                //get color input   
                ctx.strokeStyle = $("#paintColor").val();
            }else{
                //white color 
                ctx.strokeStyle = "white";
            }
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });
    //mouse up->we are not paintingerasing anymore
    container.mouseup(function(){
        paint = false;
    });
    
    //if we leave the container we are not paintingerasing anymore
    container.mouseleave(function(){
        paint = false;
    });
 
    //click on the reset button
    $("#reset").click(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        paint_erase = "paint";
        $("#erase").removeClass("eraseMode");
    });
    //click on save button
    $("#save").click(function(){
        if(typeof(localStorage) != null){
              localStorage.setItem("imgCanvas", canvas.toDataURL()); 
        }else{
            window.alert("Your browser does not support local storage!");   
        }
    });
    //click on the erase button
    $("#erase").click(function(){
        if(paint_erase == "paint"){
            paint_erase = "erase";   
        }else{
            paint_erase = "paint";   
        }
        $(this).toggleClass("eraseMode");
    });
    
    //change color input
    $("#paintColor").change(function(){
        $("#circle").css("background-color", $(this).val());
    });
    //change lineWidth using slider
    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function(event, ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
            ctx.lineWidth = ui.value;
        }
    });

});
// $(function(){
//     $("#slider").slider({
//         min: 3,
//         max: 30,
//         slide: function(event, ui){
//             $("#circle").height(ui.value);
//             $("#circle").width(ui.value);
//         }
//     });
//    var paint = false;
//    var paint_erase = "paint";
//    var canvas = document.getElementById("paint");   
//    var ctx = canvas.getctx('2d');
//    var container = $("#container");
//    var mouse = {x : 0, y : 0};

//     // set drawing paramenters (lineWidth, lineJoin, lineCap)
//     ctx.lineWidth = 3;
//     ctx.lineJoin = "round";    
//     ctx.lineCap = "round";
    
//     //click inside container
//     container.mousedown(function(e){
//         paint = true;
//         ctx.beginPath();
//         mouse.x = e.pageX - this.offsetLeft;
//         mouse.y = e.pageY - this.offsetTop;
//         ctx.moveTo(mouse.x, mouse.y);
//     });
    
//     //move the mouse while holding mouse key
//     container.mousemove(function(e){
//         mouse.x = e.pageX - this.offsetLeft;
//         mouse.y = e.pageY - this.offsetTop;
//         if(paint == true){
//             if(paint_erase == "paint"){
//                 //get color input   
//                 ctx.strokeStyle = $("#paintColor").val();
//             }else{
//                 //white color 
//                 ctx.strokeStyle = "white";
//             }
//             ctx.lineTo(mouse.x, mouse.y);
//             ctx.stroke();
//         }
//     });
//     container.mouseup(function(){
//         paint = false;
//     })
//     // // click inside container
//     // container.mousedown(function(e){
//     //     paint = "true";
//     //     ctx.beginPath();
//     //     mouse.x = e.pageX - this.offsetLeft;
//     //     mouse.y = e.pageY - this.offsetTop;
//     //     ctx.moveTo(mouse.x,mouse.y);
//     //     alert(e.pageX);
//     // });

//     // // move the mouse while hoding mouse key
//     // container.mousemove(function(e){
//     //     mouse.x = e.pageX - this.offsetLeft;
//     //     mouse.y = e.pageY - this.offsetTop;
//     //     if(paint == true)
//     //     {
//     //         if(paint_erase == "paint")
//     //         {
//     //             // get the color of the line
//     //             ctx.strokeStyle = "red";
//     //         }
//     //         else
//     //         {
//     //             // while erasinf=g the color of the line will be white
//     //             ctx.strokeStyle = "white";
//     //         }
//     //         ctx.lineTo(mouse.x, mouse.y);
//     //         ctx.stroke();
//     //     }
//     // });

// });
 
    
   
//  // //Line drawing
//     // //declare a new path
//     // ctx.beginPath();

//     // //set line width
//     // ctx.lineWidth = 40;
//     // ctx.strokeStyle = "#42e565";
//     // // set cap to the line(round, butt, square)
//     // ctx.lineCap = "round";
//     // // set line join style(bevel,round,miter)
//     // ctx.lineJoin = "round";
//     // // position the ctx point
//     // ctx.moveTo(50,50);
//     // // draw a straight line from starting point to a new position
//     // ctx.lineTo(200,200);
    
//     // //Draw another line
//     // ctx.lineTo(400,100); 

//     // // make it visible
//     // ctx.stroke();