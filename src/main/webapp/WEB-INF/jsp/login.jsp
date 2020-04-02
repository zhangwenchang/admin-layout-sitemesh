<%@ page language="java" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>后台管理系统</title>
  <!-- Tell the browser to be responsive to screen width -->
  <link href="${ctx}/images/favicon.png" rel="shortcut icon"> 
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link rel="stylesheet" href="${ctx}/bootstrap/css/bootstrap.min.css">

  <!-- Theme style -->
  <link rel="stylesheet" href="${ctx}/dist/css/AdminLTE.min.css">
  <!-- iCheck -->
  <link rel="stylesheet" href="${ctx}/plugins/iCheck/square/blue.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>
<body class="hold-transition login-page">
<div class="login-box">

  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">帐号登录</p>
    <form>
      <div class="form-group has-feedback">
        <input type="text" class="form-control" placeholder="账号"  id="userName" name="userName"  maxlength="30" autocomplete = "off">     
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" placeholder="密码"  id="pwd" name="pwd"  maxlength="30" autocomplete = "off">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="text" class="form-control" value="" placeholder="验证码" id="code" name="code" maxlength="30"
               style="width: 200px;display: inline-block">
        <img id="code_yan" onclick="refreshCode(this)">
      </div>
      <div class="row">
        <div class="col-xs-8">
        	<input type="hidden" value="${timestamp}" id="timestamp">
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="button" class="btn btn-primary btn-block btn-flat">登 录</button>
        </div>
        <div style="color:red;text-align:center;" id="tips">
        </div>
        <!-- /.col -->
      </div>
    </form>

  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

<!-- jQuery 2.2.0 -->
<script src="${ctx}/plugins/jQuery/jQuery-2.2.0.min.js"></script>
<!-- Bootstrap 3.3.6 -->
<script src="${ctx}/bootstrap/js/bootstrap.min.js"></script>
<!-- ajax -->
<script src="${ctx}/commons/js/ajax.submit.js"></script>
<script>
  $(function () {
    $('#code').hide();
    $('#code_yan').attr('src', '');
    $('#code_yan').hide();
    $(".btn-flat").click(function () {
    	var _username = $("#userName").val();
    	var _password = $("#pwd").val();
      var _code = $("#code").val();
      var _timestamp  = $("#timestamp").val();
		if(!_username || !_password){
			return;
		}    	
		var url="Login/auth";
		$("#tips").html("");
		if(chk()){
          //doPost(url,{userName:$("#userName").val(),pwd:$.md5(_password)},succHd,errorHd);
          $.ajax({
            type: "post",
            url: url,
            dataType: "json",
            data: {userName: $("#userName").val(), pwd: $.md5(_password), code: _code, timestamp:_timestamp},
            success: function (data) {
              if (data.success) {
                location.replace("${ctx}/index");
              } else {
                $('#code_yan').attr('src', "Login/imgCode" + '?' + Math.random())
                $("#tips").html(data.msg);
                $('#code').show();
                $('#code_yan').show();
              }
            },
            error: function (xreq) {
              $("#tips").html(xreq.statusText + "[" + xreq.status + "]");
            }
          });
		}		
    });
  });
  function chk(){
	  if($("#userName").val().trim()==""){		  
		  $("#tips").html("请正确输入登录账号");
		  $("#userName").val("");
		  $("#userName").focus();
		  return false;
	  }
	  
	  if($("#pwd").val().trim()==""){		  
		  $("#tips").html("请正确输入登录密码");
		  $("#pwd").val("");
		  $("#pwd").focus();
		  return false;
	  }
	  
	return true;
  }
  function succHd(data){
	  if(data.success){
		  location.replace("welcome.html");
	  }else{
		  $("#tips").html(data.msg);
	  }
	  
  }
  function errorHd(xreq){	 
	  $("#tips").html(xreq.statusText+"["+xreq.status+"]");
  }

  function refreshCode(obj) {
    obj.src = obj.src + '?' + Math.random();
  }
</script>
<script src="${ctx}/dist/js/md5.js"></script>
</body>
</html>
