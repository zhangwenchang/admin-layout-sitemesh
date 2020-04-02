function doPost(url, data, succHd, errorHd){
	$.ajax({
		type : "post",
		url : url,
		dataType : "json",
		data :data,
		success : succHd,
		error:errorHd
	});
}
function doGet(url,succHd,errorHd){
	$.ajax({
		type : "get",
		url : url,
		success : succHd,
		error:errorHd
	});
}