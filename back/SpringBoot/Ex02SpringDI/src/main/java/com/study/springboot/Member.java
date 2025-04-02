package com.study.springboot;

import org.springframework.stereotype.Component;

//@Component : Spring F/W이 클래스를 자바 빈으로 생성해서 관리해줌
//POJO : 순수 자바 클래스
@Component
public class Member {

    private String name = "홍길동";

    public Member() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
