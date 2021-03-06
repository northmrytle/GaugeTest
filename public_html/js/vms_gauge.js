/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

//var gauges = [];

function vmsGauge(
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
    
//    console.log ('vmsGauge(' + 
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
        
    this.parent = document.getElementById(parentElement);
    this.frame = document.createElement('div');
    
    this.frame.setAttribute('id', id);
    this.frame.className = 'gaugeFrame';
    this.frame.style.position = 'absolute';
    this.frame.style.top = top + 'px';
    this.frame.style.left = left + 'px';
    this.parent.appendChild(this.frame);
    
    this.gauge = Raphael( id, width, height);
    this.gauge.setStart();
    
    //Bezel
    this.gauge.circle(width/2, height/2, width/2 - 5).attr({
        "stroke-width": 7,
        "stroke": "#000000",
        "fill": "#000000"
    }).id = "frame";
    
    this.gauge.circle(width/2, height/2, width/2 - 5).attr({
        "stroke-width": 5,
        "stroke": "#737373"
    });
  
    this.gauge.circle(width/2-2, height/2, width/2 - 5).attr({
        "stroke-width": 2,
        "stroke": "#e6e6e6"
    });
    
    var i, a, r, x, y, x1, y1, x2, y2, x3, y3;
    var tickValue, fontSize;
   
    //Tick Values   
    for (i = 3; i <= 9; i++) {
        a = Number(45 * Math.PI /180) * i;
        r = width/3.15 - 5;
        
        x = width/2 + r * Math.cos(a);
        y = height/2 + 3 + r * Math.sin(a) - 4;

        tickValue = ((maxValue - minValue)/6) * (i - 3);
        tickValue = tickValue.toFixed(0);
        fontSize = width/11;
        this.gauge.text(x,y, tickValue).attr({
            "stroke": "white",
            "fill": "white",
            "font-size": fontSize
            });
        }; 
        
    //Tick Marks Major    
    for (i = 3; i <= 9; i++) {
        a = Number(45 * Math.PI /180) * i;
        
        r = width /2.5 - 5;
        x1 = width/2 + r * Math.cos(a);
        y1 = height/2 + 3 + r * Math.sin(a) - 3;

        r = width/2.25 - 5;
        x2 = width/2 + r * Math.cos(a);
        y2 = height/2 + 3 + r * Math.sin(a) - 3;

        this.gauge.path(["M", x1, y1, "L", x2, y2]).attr({
            "stroke-width": 3,
            "stroke": "white"
            });
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

        this.gauge.path(["M", x1, y1, "L", x2, y2]).attr({
            "stroke-width": 1,
            "stroke": "white"
            });
        }; 
    
    //Gauge Title
    this.title = this.gauge.text(width/2 ,height/2 + width/4 * 1.25, name);
    this.title.attr("stroke", "white");
    this.title.attr("fill", "white");
    this.title.attr("font-size",fontSize - 5);
    
    x1 = width/2 - (width * .03);
    y1 = height/2;
    
    x2 = width/2;
    y2 = height/2 - (height/2 * .75);
    
    x3 = width/2 + (width * .03);
    y3 = height/2;
    
    this.gauge.path(["M", x1, y1, "L", x2, y2, "L", x3, y3]).attr({
        "fill": "#ff9900"
    }).id = "needle";
    
    //Pointer hub
    this.gauge.circle(width/2, height/2, width/10).attr({
      "fill": "90-#000000-#ffffff:95"
    });

     
    this.setValue = function (newValue){
//        console.log("gauge " + this.name + " newValue " + newValue);
        var range = maxValue - minValue;
        newValue = Number(newValue) * Number(this.factor);
        newValue = newValue.toFixed(2) - (range/2) ;
        var increment = 270 / range;
        this.needle = this.gauge.getById("needle");
        this.needle.animate({transform: ["R" + (newValue * increment), width/2, height/2 ]}, 750, "<>");
//        this.value = newValue;
//        delete this.needle;
    };

};
