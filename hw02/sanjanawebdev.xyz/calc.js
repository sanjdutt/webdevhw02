
var keepNum = '';
var op = '';
var thisNum = '';


function numPress(entry) { 
    if (entry =='c') { 
    	document.getElementById("output").value = '';
    	keepNum = '';
    	thisNum = '';
    	op = '';
    } else if (entry=='+=') {
    	
    	op = '+';
    	
    	keepNum = thisNum;
    	
    	thisNum = '';
    	
    	document.getElementById("output").value = keepNum;
    	
    
    } else if ((entry=='-') || (entry=='*') || (entry=='/')) {
    	op = entry; 
    	
    	keepNum = thisNum;
    	
    	thisNum = '';
    
    	document.getElementById("output").value = keepNum;
    } else if (entry=='.'){ 
    	thisNum += entry; 
    	document.getElementById("output").value = thisNum; 
    } else {
    	thisNum += entry;
    	thisNum = eval(keepNum + op + thisNum);
    	document.getElementById("output").value = thisNum;
    }
} 

