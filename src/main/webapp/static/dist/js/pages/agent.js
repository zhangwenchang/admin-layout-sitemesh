/**
 * 大使 代理商 管理
 */

function checkRe(type,value){ 
	//console.log(value)
	if(!value)return true;
	var patt = /e/;
	switch(type)
	{
	case 'number':
		patt=/^[0-9]+$/;
	  break;
	case 'phone':
		patt=/^1[34578]\d{9}$/;
	  break;
	case 'decimal':
		patt=/^\d+\.\d+$/;
	  break;
	default:
	 
	}
	return patt.test(value);  
}
function checkForm(){
	var amName =$('#amName').val();
	var amCardNumber =$('#amCardNumber').val();
	var amCardBank =$('#amCardBank').val();
	var amCardBankBranch =$('#amCardBankBranch').val();
	var amCardProvince =$('#amCardProvince').val();
	var amCardCity =$('#amCardCity').val();
	var amUniversity =$('#amUniversity').val();
	var amPhone =$('#amPhone').val();
	var amPersonLimit =$('#amPersonLimit').val();
	var amCommission =$('#amCommission').val();
	if(!checkRe('phone',amPhone)){
		layer.msg("电话号码格式不正确！");return false;
	}
	if(!checkRe('number',amCardNumber)){
		layer.msg("银行卡号格式不正确！");return false;
	}
	if(!checkRe('number',amPersonLimit)){
		layer.msg("人员配额为正整数，格式不正确！");return false;
	}
	if(!checkRe('decimal',amCommission)){
		layer.msg("提成比例为小数，格式不正确！");return false;
	}else{
		if(amCommission&&amCommission>0.35){
			layer.msg("提成比例不能超过0.35！");return false;
		}
	}
	return true;
}
