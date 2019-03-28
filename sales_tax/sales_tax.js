"use strict";
/* 
User id: 0224851 Robin Kronberg
Assignment number: 03
Date: 1-25-18 */

var $ = function (id) {
    return document.getElementById(id); 
};

var processEntries = function(){
	
	var sub = parseFloat($("subtotal").value);
	var taxRate = parseFloat($("tax_rate").value);
	
	if (isNaN(sub) || isNaN(taxRate)){
		alert("Both entries must be numeric");
	} else if (sub <=0 || sub >=10000){
		alert("Subtotal must be greater than 0 but less than 10,000");
	} else if (taxRate <=0 || taxRate >=12){
		alert("Tax Rate must be greater than 0 but less than 12");
	} else{
		var salesTax=sub*taxRate;
		var saleTotal=sub+salesTax;
	
		$('sales_tax').value=parseFloat(salesTax);
		$('total').value=parseFloat(saleTotal);
	}	
};

var clear = function(){
	$("subtotal").value="";
	$("tax_rate").value="";
	$("sales_tax").value="";
	$("total").value="";
	$("subtotal").focus();
};

var clearSub = function(){
	$("subtotal").value="";
};

var clearRate = function(){
	$("tax_rate").value="";
};

window.onload=function(){
	$("calculate").onclick=processEntries;
	$("subtotal").focus();
	$("clear").onclick=clear;
	$("subtotal").onclick=clearSub;
	$("tax_rate").onclick=clearRate;
	
}
