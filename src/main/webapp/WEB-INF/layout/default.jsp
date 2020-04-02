<%@ page language="java" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="sitemesh" uri="http://www.opensymphony.com/sitemesh/decorator"%>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>后台管理系统</title>
    <!-- Tell the browser to be responsive to screen width  -->
    <link href="${ctx}/images/favicon.png" rel="shortcut icon">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="${ctx}/static/bootstrap/css/bootstrap.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="${ctx}/static/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="${ctx}/static/dist/css/skins/_all-skins.min.css">
    <!-- Date Picker -->
    <link rel="stylesheet" href="${ctx}/static/plugins/datepicker/datepicker3.css">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="${ctx}/static/plugins/daterangepicker/daterangepicker-bs3.css">
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">

    <header class="main-header">
        <!-- Logo -->
        <a href="welcome.html" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>G</b></span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>TEST</b> 管理</span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">

            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown user user-menu" id="headAccountInfo">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="${ctx}/static/dist/img/male.png" class="user-image" alt="User Image">
                            <span class="hidden-xs"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-right">
                                    <a href="javascript:location.replace('Account/loginOut')"
                                       class="btn btn-default btn-flat">退出</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <aside class="main-sidebar">
        <section class="sidebar">
			<ul class="sidebar-menu">
	   		<li class="header">导航菜单</li>
			
				<li class="treeview">
					<a href="#">
            			<i class="fa fa&#45;cog"></i> <span>系统设置</span> <i class="fa fa-angle-left pull-right"></i>
          			</a>
          			
          				<ul class="treeview-menu">
	          				
	          					<li><a href="${ctx}/test1" class="mode-lis" data-type="100004771"><i class="fa fa-circle-o"></i>用户管理</a></li>
	          				
	          					<li><a href="${ctx}/test2" class="mode-lis" data-type="100004772"><i class="fa fa-circle-o"></i>小组管理</a></li>
	          				
          				</ul>
          			
				</li>
			
				<li class="treeview ">
					<a href="#">
            			<i class="fa fa&#45;commenting&#45;o"></i> <span>官方消息管理</span> <i class="fa fa-angle-left pull-right"></i>
          			</a>
          			
          				<ul class="treeview-menu ">
	          				
	          					<li><a href="${ctx}/test3" class="mode-lis" data-type="43663249"><i class="fa fa-circle-o"></i>官方账户管理</a></li>
	          				
	          					<li><a href="${ctx}/test4" class="mode-lis" data-type="17826781"><i class="fa fa-circle-o"></i>发布置顶动态</a></li>
	          				
          				</ul>
          			
				</li>
			
		</ul>
        </section>
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper" style="min-width: 800px" id="App">
		<sitemesh:body />
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
        <div class="pull-right hidden-xs">
            <!-- <b>Version</b> 2.3.3 -->
        </div>
        <strong>Copyright &copy; 2016-2019 <a href="#">TEST Co</a>.</strong> All rights
        reserved.
    </footer>

    <!-- Control Sidebar -->
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
</div>
<!-- ./wrapper -->

<!-- jQuery 2.2.0 -->
<script src="${ctx}/static/plugins/jQuery/jQuery-2.2.0.min.js"></script>
<!-- Bootstrap 3.3.6 -->
<script src="${ctx}/static/bootstrap/js/bootstrap.min.js"></script>

<!--时间区间插件js-->
<script src="${ctx}/static/plugins/daterangepicker/daterangepicker.js"></script>
<!-- datepicker -->
<script src="${ctx}/static/plugins/datepicker/bootstrap-datepicker.js"></script>
<script src="${ctx}/static/plugins/datepicker/locales/bootstrap-datepicker.zh-CN.js"></script>
<!-- layer -->
<script src="${ctx}/static/plugins/layer/layer.js"></script>
<script src="${ctx}/static/plugins/layer/laydate.js"></script>

<!-- AdminLTE App -->
<script src="${ctx}/static/dist/js/app.min.js"></script>
<script src="${ctx}/static/dist/js/common.js"></script>

</body>

</html>