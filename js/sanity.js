ip_addr = document.getElementById("IP").value
port_n = document.getElementById("PORT").value
res = ip_addr
res2= port_n

function button(){
	ip_addr = document.getElementById("IP").value
	port_n = document.getElementById("PORT").value
	if ((res === "") || (res2 === "")) {
		myFunction();
	}
	else if ((res != ip_addr) || (res2 != port_n)) {
	reset();
	myFunction();
	}
	else {
		reset();
	}
}



function myFunction(){
        var patt = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        var patp = /^()([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;
        var ip_addr = document.getElementById("IP").value
        var port_n = document.getElementById("PORT").value
        var txt = ""
if(ip_addr == '')
        {
        txt = "IP Address field can not be empty";
        document.getElementById("result").innerHTML = txt
        return false;
        }
    else if (port_n == '')  
     {  
        txt = "TCP Port field can not be empty";
        document.getElementById("result").innerHTML = txt;
        return false;  
     }
    else if (patt.test(ip_addr) == false)
     {
        txt = "IP Address format is invalid";
        document.getElementById("result").innerHTML = txt;
        return false;  
     }
    else if (patp.test(port_n) == false)
     {  
        txt = "Port must be between 0-65535";
        document.getElementById("result").innerHTML = txt;
        return false; 
     }
    else {
document.getElementById("btClear").disabled = false;
var elements = document.getElementsByClassName('highlight');
for (var i = 0; i < elements.length; i++) {
  var str = elements[i].innerHTML;
  var r_ip = document.getElementById("IP").value;
  var ip = str.replace("YOUR_IP", r_ip);
  elements[i].innerHTML = ip;
}

for (var p = 0; p < elements.length; p++) {
  var str = elements[p].innerHTML;
  var r_port = document.getElementById("PORT").value;
  var port = str.replace("PORT", r_port);
  elements[p].innerHTML = port;
}
  txt = "You are now ready to copy your desired shell down below";
  document.getElementById("result").innerHTML = txt;
  var ip_addr = document.getElementById("IP").value;
  var port_n = document.getElementById("PORT").value;
  res = ip_addr
  res2 = port_n
  document.getElementById("IP").value = "";
  document.getElementById("PORT").value = "";
  /*return true;*/
}
}


function reset(){
  var elements = document.getElementsByClassName('highlight');
  for (var i = 0; i < elements.length; i++) {
  var str = elements[i].innerHTML;
  var ip = str.replace(res, "YOUR_IP");
  elements[i].innerHTML = ip;
}
  for (var p = 0; p < elements.length; p++) {
  var str = elements[p].innerHTML;
  var port = str.replace(res2, "PORT");
  elements[p].innerHTML = port;
}
  document.getElementById("btClear").disabled = true;
  txt = "reset was done here"
  document.getElementById("result").innerHTML = txt;
}
