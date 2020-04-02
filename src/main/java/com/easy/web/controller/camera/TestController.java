package com.easy.web.controller.camera;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class TestController {
	
//	@Autowired
//	private CameraService cameraService;
	
	@RequestMapping(value = "/test1")
	public String test1() {
		return "test1";
	}
	
	@RequestMapping(value = "/test2")
	public String test2() {
		return "test2";
	}
	@RequestMapping(value = "/test3")
	public String test3() {
		return "welcome";
	}
	@RequestMapping(value = "/test4")
	public String test4() {
		return "welcome";
	}
}
