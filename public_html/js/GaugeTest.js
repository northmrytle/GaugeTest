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

function updateValueAjax(){
    console.log('updateValuesLive');
    $.ajax({
        url: baseURL + '/flow', 
        timeout: ajaxTimeout,
        dataType: 'json',
        success: function(data){
            console.log('data ' + data);
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

