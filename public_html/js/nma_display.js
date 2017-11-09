/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

function nmaDisplay (
        parentElement,
        id, 
        name, 
        dataPath, 
        factor, 
        units,
        allowReset,
        allowCalibrate,
        height,
        width,
        top,
        left){
           
//        console.log ('vmsDisplay(' + 
//                    parentElement + ', ' +
//                    id + ', ' +
//                    name + ', ' +
//                    dataPath +', ' + 
//                    factor + ', ' +
//                    units + ', ' +
//                    allowReset + ', ' +
//                    allowCalibrate + ', ' +
//                    height + ', ' +  
//                    width + ', ' +
//                    top + ', ' + 
//                    left + ')');       
           
    this.type = 'display';
    this.parentElement = parentElement;
    this.id = id;
    this.name = name;
    this.dataPath = dataPath; 
    this.factor = factor;
    this.units = units;
    this.allowReset = allowReset;
    this.allowCalibrate = allowCalibrate;
    this.height = height;
    this.width = width;
    this.top = top;
    this.left = left;
    this.value = 0;
    this.calibrationFactor = 1;
    
    this.parameters = {
        'type': 'display',
        'parentElement': parentElement,
        'name': this.name,
        'dataPath': this.dataPath,
        'factor': this.factor,
        'units': this.units,
        'allowReset': this.allowReset,
        'allowCalibrate': this.allowCalibrate,
        'height': this.height,
        'width': this.width,
        'top': this.top,
        'left': this.left
        };
    
    this.JSONString = JSON.stringify(this.parameters);
    
    this.parent = document.getElementById(parentElement);
    this.frame = document.createElement('div');
    
    this.frame.setAttribute('id', id);
    this.frame.className = 'displayFrame';
    this.frame.style.position = 'absolute';
    this.frame.style.top = top + 'px';
    this.frame.style.left = left + 'px';
    this.parent.appendChild(this.frame);
    
    this.display = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.display.setAttribute("height", height);
    this.display.setAttribute("width", width);
    this.display.setAttribute("version", "1.1");
    this.display.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.display.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.frame.appendChild(this.display);
//<svg height="720" version="1.1" width="720" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.2.0</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><linearGradient id="dq08w90-_000000-_ffffff:95" x1="0" y1="1" x2="6.123233995736766e-17" y2="0" gradientTransform="matrix(1,0,0,1,0,0)" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><stop offset="0%" stop-color="#000000" stop-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></stop><stop offset="95%" stop-color="#ffffff" stop-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></stop></linearGradient></defs><circle cx="360" cy="360" r="355" fill="#000000" stroke="#000000" stroke-width="7" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="360" cy="360" r="355" fill="none" stroke="#737373" stroke-width="5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><circle cx="358" cy="360" r="355" fill="none" stroke="#e6e6e6" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle><text x="201.91112677757903" y="517.088873222421" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="65px" stroke="#ffffff" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 65px;"><tspan dy="22.510748222420943" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan></text><text x="136.42857142857142" y="359" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="65px" stroke="#ffffff" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 65px;"><tspan dy="22.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">5</tspan></text><text x="201.91112677757897" y="200.91112677757903" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="65px" stroke="#ffffff" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 65px;"><tspan dy="22.504876777579028" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">10</tspan></text><text x="359.99999999999994" y="135.42857142857142" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="65px" stroke="#ffffff" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 65px;"><tspan dy="22.506696428571416" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">15</tspan></text><text x="518.088873222421" y="200.91112677757897" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="65px" stroke="#ffffff" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 65px;"><tspan dy="22.50487677757897" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">20</tspan></text><text x="583.5714285714286" y="358.99999999999994" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="65px" stroke="#ffffff" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 65px;"><tspan dy="22.499999999999943" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">25</tspan></text><text x="518.0888732224211" y="517.088873222421" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="65px" stroke="#ffffff" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 65px;"><tspan dy="22.510748222420943" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30</tspan></text><path fill="none" stroke="#ffffff" d="M159.88878092420705,560.111219075793L137.26136392623755,582.7386360737624" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M77,360.00000000000006L45,360.00000000000006" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M159.888780924207,159.88878092420705L137.2613639262375,137.26136392623755" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M359.99999999999994,77L359.99999999999994,45" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M560.1112190757929,159.888780924207L582.7386360737624,137.2613639262375" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M643,359.99999999999994L675,359.99999999999994" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M560.111219075793,560.1112190757929L582.7386360737626,582.7386360737624" stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M151.40349954996873,568.5965004500317L137.2613639262378,582.7386360737628" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M121.33998665939058,533.3966494262796L105.15964677189163,545.1523544721291" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M97.1530753644314,493.92719742316615L79.33294488066406,503.0070074179571" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M79.43832769292976,451.16001334060957L60.41719736702669,457.34035322810854" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M68.63193952443442,406.1481671868685L48.87817271253169,409.2768564876731" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M65,360.0000000000001L45,360.0000000000001" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M68.63193952443442,313.85183281313175L48.87817271253164,310.7231435123271" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M79.43832769292965,268.8399866593906L60.417197367026574,262.6596467718917" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M97.15307536443129,226.07280257683405L79.33294488066394,216.99299258204312" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M121.33998665939043,186.60335057372052L105.15964677189149,174.84764552787107" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M151.4034995499686,151.40349954996836L137.26136392623766,137.2613639262374" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M186.60335057372032,121.33998665939058L174.84764552787087,105.15964677189163" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M226.07280257683334,97.15307536443169L216.99299258204238,79.33294488066434" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M268.8399866593904,79.43832769292976L262.6596467718914,60.41719736702669" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M313.85183281313203,68.63193952443436L310.7231435123274,48.87817271253158" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M359.9999999999999,65L359.9999999999999,45" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M406.14816718686774,68.6319395244343L409.2768564876723,48.87817271253158" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M451.16001334060934,79.43832769292965L457.3403532281083,60.417197367026574" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M493.92719742316643,97.15307536443152L503.00700741795737,79.33294488066417" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M533.3966494262795,121.33998665939043L545.152354472129,105.15964677189149" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M568.5965004500313,151.40349954996822L582.7386360737621,137.26136392623724" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M598.6600133406093,186.60335057372032L614.8403532281084,174.84764552787087" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M622.8469246355685,226.0728025768338L640.6670551193359,216.9929925820429" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M640.5616723070702,268.8399866593904L659.5828026329733,262.6596467718914" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M651.3680604755656,313.8518328131315L671.1218272874682,310.7231435123268" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M655,359.99999999999983L675,359.99999999999983" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M651.3680604755656,406.14816718686825L671.1218272874684,409.27685648767283" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M640.5616723070704,451.16001334060934L659.5828026329734,457.34035322810826" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M622.8469246355687,493.9271974231659L640.667055119336,503.00700741795686" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M598.6600133406096,533.3966494262795L614.8403532281086,545.1523544721289" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><path fill="none" stroke="#ffffff" d="M568.5965004500315,568.5965004500316L582.7386360737623,582.7386360737626" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="360" y="585" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="60px" stroke="#ffffff" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 60px;"><tspan dy="20.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">GPH Port</tspan></text><path fill="#ff9900" stroke="#000000" d="M338.4,360L360,90L381.6,360" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);" transform="matrix(0.5305,-0.8477,0.8477,0.5305,-136.1481,474.18)"></path><circle cx="360" cy="360" r="72" fill="url('http://localhost:8383/GaugeTest/index.html#dq08w90-_000000-_ffffff:95')" stroke="#000" opacity="1" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1; fill-opacity: 1;"></circle></svg>


//    var group;
//    group = document.createElementNS("http://www.w3.org/2000/svg", "g");
//    this.display.appendChild(group);
    
    var element;
    
    element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    element.setAttribute("x", 2);
    element.setAttribute("y", 2);
    element.setAttribute("rx", 5);
    element.setAttribute("ry", 5);
    element.setAttribute("height", height - 10);
    element.setAttribute("width", width - 10);
    element.setAttribute("stroke-width", 6);
    element.setAttribute("stroke", "#737373");
    element.setAttribute("fill", "#000000");
    this.display.appendChild(element);
    
    element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    element.setAttribute("x", 2);
    element.setAttribute("y", 3);
    element.setAttribute("rx", 5);
    element.setAttribute("ry", 5);
    element.setAttribute("height", height - 10);
    element.setAttribute("width", width - 10);
    element.setAttribute("stroke-width", 1);
    element.setAttribute("stroke", "#e6e6e6");
    element.setAttribute("fill", "none");
    this.display.appendChild(element);
    
    //Title Display
    var title = document.createElementNS("http://www.w3.org/2000/svg", "text");
    title.setAttribute("x", width/2);
    title.setAttribute("y", height * .10 + 5);
    title.setAttribute("stroke-width", 1);
    title.setAttribute("fill", "white");
    title.setAttribute("stroke", "white");
    title.setAttribute("font-size", Math.min(height/8, width/8) );
    title.setAttribute("text-anchor", "middle");
    title.setAttribute("alignment-baseline", "central");
    title.innerHTML = "<tspan>" + name + "</tspan>";
    this.display.appendChild(title);

    //Value Display
    this.valueDisplay = document.createElementNS("http://www.w3.org/2000/svg", "text");
    this.valueDisplay.setAttribute("x", width/2 );
    this.valueDisplay.setAttribute("y", height/2);
    this.valueDisplay.setAttribute("stroke-width", 1);
    this.valueDisplay.setAttribute("fill", "white");
    this.valueDisplay.setAttribute("stroke", "white");
    this.valueDisplay.setAttribute("font-size", Math.min(height/3, width/3) );
    this.valueDisplay.setAttribute("text-anchor", "middle");
    this.valueDisplay.setAttribute("alignment-baseline", "central");
    this.valueDisplay.innerHTML = "0";
    this.display.appendChild(this.valueDisplay);

    //Units Display
    element = document.createElementNS("http://www.w3.org/2000/svg", "text");
    element.setAttribute("x", width/2  );
    element.setAttribute("y", height * .80);
    element.setAttribute("stroke-width", 1);
    element.setAttribute("fill", "white");
    element.setAttribute("stroke", "white");
    element.setAttribute("font-size", Math.min(height/8, width/8) );
    element.setAttribute("text-anchor", "middle");
    element.setAttribute("alignment-baseline", "central");
    element.innerHTML = "<tspan>" + units + "</tspan>";
    this.display.appendChild(element);
    
//    $(this.frame).on('taphold', calibrateX);
//    $(this.frame).on('click', resetX);
    
    
    function calibrateX(){
//        console.log('calibrateX');
        if (allowCalibrate === 1){
            calibrate(dataPath, factor, name);
        };    
    };
    
    
    function resetX(){
//        console.log('resetX');
        if (allowReset === 1){
            reset();
        }
    }
    
        
    function reset(){
//        console.log('reset');
        if (localNetworkStatus === 'up'){
//            console.log('local network is up');
            displayResetForm();
        } else {
        var dialog = new vmsDialog(parent, 
            'Reset Error',
            'Cannot reset ' + name + '.  The device is not connected.',
            function(){});  
            document.getElementById('dialogYes').innerHTML = 'OK';
        };
    };
    
    
    function displayResetForm(){
//        console.log ('displayResetForm');
        if (allowReset === 1) {          
            var dialog = new vmsDialog(parent, 
                            'Reset', 
                            'Are you sure you want to reset ' + name + '?',
                            resetYes, 
                            resetNo);         
        };            
    };
       
    
    function resetYes(){
//        console.log('resetYes ' + dataPath);
//        console.log('dataPath ' + baseURL + '/' +  dataPath.replace(/\./g, '/'));
        var sendData = {value: 0};
        $.ajax({
            url: baseURL + '/' + dataPath.replace(/\./g, '/'),
            timeout: ajaxTimeout,
            type: 'PUT',
            data: JSON.stringify(sendData),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function() {
//                console.log('updated counter ' + JSON.stringify(sendData));
            },
            error: function(){
                console.log('could not update coutner ' + JSON.stringify(sendData));
            }
        });
    };
     
     
    function resetNo(){
//        console.log('resetNo');
    };
    
   
//    $(this.frame).click(
//        function() {
//            if (this.zoom != true) {
//            $(this).animate({ 'zoom': 2.0 }, 400);
//            this.zoom = true;   
//        
//            }else{
//            $(this).animate({ 'zoom': 1.0 }, 400);
//            this.zoom = false;    
//            };
//    });
    
    
    this.setValue = function(newValue){
//        console.log('setValue ' + newValue);
//        console.log('cf ' + flowCounts.calibrationFactor);
        newValue = Number(newValue) * Number(this.factor);// * eval(dataPath + ' * calibrationFactor' );
        newValue = Math.floor(newValue * 10)/10;
        newValue = newValue.toFixed(1);
        this.valueDisplay.innerHTML = "<tspan>" + newValue + "</tspan>";
//        this.valueDisplay.text = newValue;
//        this.value = newValue;
//        delete this.valueDisplay;
    };
       
};



    
