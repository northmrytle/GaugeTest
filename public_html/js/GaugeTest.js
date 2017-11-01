/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var gauge1;

var viewHeight = document.documentElement.clientHeight;
var viewWidth = document.documentElement.clientWidth;
var random1 = 0;

gauge1 = new nmaGauge(
                'page1', 
                'ff1a', 
                'GPH Port', 
                0,
                0.4755096,
                0,
                30,
                viewWidth*.45,
                viewWidth *.45,
                80,
                10);

setInterval(updateValue, 1000);
console.log('startup complete');

function updateValue(){
//    console.log('updateValue');
    random1 = Math.floor((Math.random() * 30) + 1);
    gauge1.setValue(random1);
    
};