function ajax(method,url,data,success){
	var xhr = null;
	try{
		xhr = new XMLHttpRequest();
	}catch(e){
		xhr = ActiveXobject('Microsoft.XMLHTTP');//兼容ie6及以下版本
	}
	//2.判断请求方式
	if(method == 'get'&& data){
		url+='?'+date;
	}
	//3.提交
	//打开链接
	xhr.open(method, url,true);
	if(method == 'get'){
		xhr.send();
	}else{
		//post设置头部信息再提交
		xhr.setRequestHeader( 'Content-Type','application/json; charset=UTF-8');
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				success && success(xhr.responseText);
			}else{
				alert('出错了,err'+xhr.status);
			}
		}
	}
}