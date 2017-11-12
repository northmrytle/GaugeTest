/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var display1, display2;
var gauge1, gauge2;


var viewHeight = document.documentElement.clientHeight;
var viewWidth = document.documentElement.clientWidth;
var random1 = 0;
var random2 = 0;

var ajaxTimeout = 950;
var baseURL = 'http://10.10.10.1:5002/vms/api/v1.0';
var flow;


var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        flow = JSON.parse(this.responseText);
        gauge1.setValue(flow.sensor1.counts.count0);
    }
};    

try {
//display1 = new vmsDisplay(
//                'page1', 
//                'ff1', 
//                'Fuel Flow', 
//                0,
//                '0.4755096',
//                'GPH',
//                0,
//                0,          
//                viewHeight*.15,     
//                viewWidth*.50-5,    
//                5,                  
//                5                   ); //.0005 * .264172 * 3600
//    
//display2 = new nmaDisplay(
//                'page1', 
//                'ff2', 
//                'Fuel Flow', 
//                0,
//                '0.4755096',
//                'GPH',
//                0,
//                0,          
//                viewHeight*.15,     
//                viewWidth*.50-5,    
//                5,                  
//                viewWidth*.50                   ); //.0005 * .264172 * 3600
                
gauge1 = new vmsGauge(
                'page1', 
                'ff1a', 
                'GPH Port', 
                0,
                0.4755096,
                0,
                30,
                viewWidth*.45,
                viewWidth *.45,
                150,
                10);


//gauge2 = new nmaGauge(
//                'page1', 
//                'ff2a', 
//                'GPH Port', 
//                0,
//                0.4755096,
//                0,
//                30,
//                viewWidth*.45,
//                viewWidth *.45,
//                150,
//                viewWidth *.50);

}catch (err){
    alert('error ' + err);
}


setInterval(updateValueAjax, 1000);
console.log('startup complete');

function updateValue(){
//    console.log('updateValue');
    random1 = Math.floor((Math.random() * 30) + 1);
    gauge1.setValue(random1);
    random2 = Math.floor((Math.random() * 30) + 1);
    gauge2.setValue(random2);
};

function updateValueAjax(){
    console.log('updateValuesLive');
    $.ajax({
        url: baseURL + '/flow', 
        type: 'GET',
        timeout: ajaxTimeout,
        dataType: 'json',
        contentType: 'application/json',
        success: function(data){
//            alert('data ' + data);
            flow = data;
            gauge1.setValue(flow.sensor1.counts.count0);
            },
        error: function(data){
            console.log("error retreiving flow data " + JSON.stringify(data));
        }
    });
 };


function updateValueXMLHTTP(){
    console.log('updateValueXMLHTTP');
    xmlhttp.open("GET", baseURL + '/flow', true);
    xmlhttp.send();
    
};

