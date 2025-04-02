package com.study.springboot;

import org.springframework.stereotype.Component;

@Component("member")  //빈의 이름을 직접 지정 가능
public class Member {
    private String name;
    private ICard iCard;

    public Member() {
    }

    public Member(String name, ICard iCard) {
        this.name = name;
        this.iCard = iCard;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ICard getiCard() {
        return iCard;
    }

    public void setiCard(ICard iCard) {
        this.iCard = iCard;
    }


}