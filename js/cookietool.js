//添加cookie
function addCookie(key,value,dayCount,path,domain) {
	var d = new Date();
	d.setDate(d.getDate()+dayCount);

	var str = key+"="+escape(value)+";expires="+d.toGMTString();	

	if(path!=undefined){
		str += "path="+path;
	}

	if(domain!=undefined){
		str += "domain="+domain;
	}

	document.cookie = str;
	
}
//获取cookie
function getCookie(key){
	var str = unescape(document.cookie);
	var arr=str.split("; ");

	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].split("=")[1];
		}
	}
			return null;
}


//删除cookie
function removeCookie(key){
	addCookie(key,"aaa",-1);
}