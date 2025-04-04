package com.study.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

//@RestController : @Controller + @ResponseBody
@RestController
//@Controller
//@ResponseBody  // 클래스의 모든 응답이 문자열(JSON)으로 선언됨.
@RequestMapping("/api/v1")  //모든 경로가 /api/v1 부터 시작됨.
public class ApiController {
    //http://localhost:8080/api/v1/hello
    @RequestMapping("/hello")
    public String hello() {
        return "API 서버입니다.";
    }

    // 클라 ---> 서버
    //      JSON ->    DTO 클래스 매핑
    //    <- JSON
    @PostMapping("/login")
    public ResDto login(@RequestBody ReqDto reqDto) {
        System.out.println("username = " + reqDto.getUsername());
        System.out.println("password = " + reqDto.getPassword());

        return null;
    }

}