/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

//var gauges = [];

function nmaGauge(
        parentElement, 
        id, 
        name, 
        dataPath, 
        factor, 
        minValue, 
        maxValue, 
        height, 
        width,
        top,
        left){
    
//    console.log ('nmaGauge(' + 
//                    parentElement + ', ' +
//                    id + ', ' +
//                    name + ', ' +
//                    dataPath +', ' + 
//                    factor + ', ' +
//                    minValue + ', ' +
//                    maxValue + ', ' +
//                    height + ', ' + 
//                    width + ', ' +
//                    top + ', ' + 
//                    left + ')');
     
   
    this.type = 'gauge';
    this.parentElement = parentElement;
    this.id = id;
    this.name = name;
    this.dataPath = dataPath;
    this.factor = factor;
    this.minValue = minValue;
    this.maxValue = maxValue;   
    this.height = height;
    this.width = width;
    this.top = top; 
    this.left = left;
    this.value = 0;
    this.calibrationFactor = 1;
    
    try {
        
        this.parent = document.getElementById(parentElement);
        this.frame = document.createElement('div');

        this.frame.setAttribute('id', id);
        this.frame.className = 'gaugeFrame';
        this.frame.style.position = 'absolute';
        this.frame.style.top = top + 'px';
        this.frame.style.left = left + 'px';
        this.parent.appendChild(this.frame);

    //    this.gauge = Raphael( id, width, height);'
    //    this.gauge.setStart();

        this.gauge = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.gauge.setAttribute("height", height);
        this.gauge.setAttribute("width", width);
        this.frame.appendChild(this.gauge);

        var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        this.gauge.appendChild(defs);

        var gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        gradient.id = "Gradient1";
        gradient.setAttribute("x1", 0);
        gradient.setAttribute("x2", 0);
        gradient.setAttribute("y1", 0);
        gradient.setAttribute("y2", 1);
        defs.appendChild(gradient);
        
        var stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop.setAttribute("offset", "0%");
        stop.setAttribute("stop-color", "white");
        gradient.appendChild(stop);
        
        var stop = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        stop.setAttribute("offset", "100%");
        stop.setAttribute("stop-color", "black");
        gradient.appendChild(stop);
      

        //Bezel
    //    this.gauge.circle(width/2, height/2, width/2 - 5).attr({
    //        "stroke-width": 7,
    //        "stroke": "#000000",
    //        "fill": "#000000"
    //    }).id = "frame";
    
        var element;
        
        element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        element.setAttribute("cx", width/2);
        element.setAttribute("cy", height/2);
        element.setAttribute("r", height/2 -5);
        element.setAttribute("stroke", "#000000");
        element.setAttribute("stroke-width", "7");
        element.setAttribute("fill", "#000000");
        element.id = "frame";
        this.gauge.appendChild(element);


        
//        this.gauge.circle(width/2, height/2, width/2 - 5).attr({
//            "stroke-width": 5,
//            "stroke": "#737373"
//        });

        element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        element.setAttribute("cx", width/2);
        element.setAttribute("cy", height/2);
        element.setAttribute("r", height/2 -5);
        element.setAttribute("fill", "none");
        element.setAttribute("stroke", "#737373");
        element.setAttribute("stroke-width", "5");
        this.gauge.appendChild(element);
        
        
//        this.gauge.circle(width/2-2, height/2, width/2 - 5).attr({
//            "stroke-width": 2, 
//            "stroke": "#e6e6e6"
//        });

        var element2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        element2.setAttribute("cx", width/2-1);
        element2.setAttribute("cy", height/2);
        element2.setAttribute("r", height/2 -5);
        element2.setAttribute("fill", "none");
        element2.setAttribute("stroke", "#e6e6e6");
        element2.setAttribute("stroke-width", "2");
        this.gauge.appendChild(element2);
        
        
        var i, a, r, x, y, x1, y1, x2, y2, x3, y3;
        var tickValue, fontSize, fontName;

        fontName = 'arial';

        //Tick Values   
//        for (i = 3; i <= 9; i++) {
//            a = Number(45 * Math.PI /180) * i;
//            r = width/3.15 - 6;
//
//            x = width/2 + r * Math.cos(a) - width/20;
//            y = height/2 + 3 + r * Math.sin(a) + height/75;
//
//            tickValue = ((maxValue - minValue)/6) * (i - 3);
//            tickValue = tickValue.toFixed(0);
//            fontSize = width/11;
////            this.gauge.text(x,y, tickValue).attr({
////                "stroke": "white",
////                "fill": "white",
////                "font-size": fontSize
////                });
//    
//            element = document.createElementNS("http://www.w3.org/2000/svg", "text");
//            element.setAttribute("x", x);
//            element.setAttribute("y", y);
//            element.innerHTML = tickValue;
//            element.setAttribute("stroke", "white");
//            element.setAttribute("fill", "white");
//            element.setAttribute("font-size", fontSize);
//            this.gauge.append(element);
//            }; 


        //Tick Marks Major    
        for (i = 3; i <= 9; i++) {
            a = Number(45 * Math.PI /180) * i;

            r = width /2.5 - 5;
            x1 = width/2 + r * Math.cos(a);
            y1 = height/2 + 3 + r * Math.sin(a) - 3;

            r = width/2.25 - 5;
            x2 = width/2 + r * Math.cos(a);
            y2 = height/2 + 3 + r * Math.sin(a) - 3;

//            this.gauge.path(["M", x1, y1, "L", x2, y2]).attr({
//                "stroke-width": 3,
//                "stroke": "white"
//                });

            element = document.createElementNS("http://www.w3.org/2000/svg", "path");
            var path = "M" + x1 + " " + y1 + " L" + x2 + " " + y2;
            element.setAttribute("d", path);
            element.setAttribute("stroke-width", 3);
            element.setAttribute("stroke", "white");
            this.gauge.appendChild(element);

            }; 

        //Tick Marks Minor    
        var start = 55;

        for (i = start; i <= start + 30; i++) {
            a = Number(9 * Math.PI /180) * i;
            r = width /2.40 - 5;
            x1 = width/2 + r * Math.cos(a);
            y1 = height/2 + 3 + r * Math.sin(a) - 3;

            r = width/2.25 - 5;
            x2 = width/2 + r * Math.cos(a);
            y2 = height/2 + 3 + r * Math.sin(a) - 3;

//            this.gauge.path(["M", x1, y1, "L", x2, y2]).attr({
//                "stroke-width": 1,
//                "stroke": "white"
//                });

            element = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path = "M" + x1 + " " + y1 + " L" + x2 + " " + y2;
            element.setAttribute("d", path);
            element.setAttribute("stroke-width", 1);
            element.setAttribute("stroke", "white");
            this.gauge.appendChild(element);

            }; 


        //Gauge Title
//        this.title = this.gauge.text(width/2 ,height/2 + width/4 * 1.25, name);
//        this.title.attr("stroke", "white");
//        this.title.attr("fill", "white");
//        this.title.attr("font-size",fontSize - 5);

//        element = document.createElementNS("http://www.w3.org/2000/svg", "text");
//        element.setAttribute("x", width/2 - width/6);
//        element.setAttribute("y", height/2 + height/3);
//        element.innerHTML = name;
//        element.setAttribute("stroke", "white");
//        element.setAttribute("fill", "white");
//        element.setAttribute("font-size", fontSize - 5);
//        this.gauge.append(element);


        x1 = width/2 - (width * .03);
        y1 = height/2;

        x2 = width/2;
        y2 = height/2 - (height/2 * .75);

        x3 = width/2 + (width * .03);
        y3 = height/2;

//        this.gauge.path(["M", x1, y1, "L", x2, y2, "L", x3, y3]).attr({
//            "fill": "#ff9900"
//        }).id = "needle";

        this.needle = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path = "M" + x1 + " " + y1 + " L" + x2 + " " + y2 + " L" + x3 + " " + y3;
        this.needle.setAttribute("d", path);
        this.needle.setAttribute("fill", "#ff9900");
        this.needle.id = "needle";
        this.gauge.appendChild(this.needle);


//        //Pointer hub
//        this.gauge.circle(width/2, height/2, width/10).attr({
//          "fill": "90-#000000-#ffffff:95"
//        });

        
        element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        element.setAttribute("cx", width/2);
        element.setAttribute("cy", height/2);
        element.setAttribute("r", width/10);
        element.setAttribute("fill", "url(#Gradient1)");
        element.setAttribute("stroke", "black");
//        element.setAttribute("fill", "gray");
        this.gauge.appendChild(element);
        
               
        var animation = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
        animation.id = id + "_needle_animation";
        animation.setAttribute("type", "rotate");
        animation.setAttribute("attributeType", "xml");
        animation.setAttribute("attributeName", "transform");
        animation.setAttribute("type", "rotate");
        animation.setAttribute("from", "360 " + width/2 + " " + height/2); 
        animation.setAttribute("to", 360-135 + " " + width/2 + " " + height/2);
        animation.setAttribute("dur", "500ms");
        animation.setAttribute("calcMode", "paced");
//        animation.setAttribute("additive", "sum"); 
        animation.setAttribute("repeatCount", "0");
        animation.setAttribute("fill", "freeze");
        this.needle.appendChild(animation);
                
        var lastValue = -135;
        var range = maxValue - minValue;
        var increment = 270 / range;
        
//            var animation = document.getElementById(this.id + "_needle_animation");
        
        this.setValue = function (newValue){
//            console.log("gauge " + this.name + " newValue " + newValue);

            newValue = Number(newValue) * Number(this.factor);
            newValue = newValue.toFixed(2) - (range/2) ;
            newValue = newValue * increment;
//            this.needle = this.gauge.getElementById("needle");
//            console.log('angle ' + newValue);


            animation.setAttribute("from", lastValue + " " + width/2 + " " + height/2); 
            animation.setAttribute("to", newValue + " " + width/2 + " " + height/2);
            animation.beginElement();
            lastValue = newValue;
            
//            this.needle.animate({transform: ["R" + (newValue * increment), width/2, height/2 ]}, 750, "<>");
//            this.value = newValue;
//            delete this.needle;
        };

    } catch (err) {
        console.log('error creating gauge ' + err);
    }

};
