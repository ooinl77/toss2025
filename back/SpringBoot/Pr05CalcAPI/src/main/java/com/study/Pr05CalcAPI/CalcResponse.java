package com.study.Pr05CalcAPI;

public class CalcResponse {
    private String status;
    private double result;

    public CalcResponse(String status, double result) {
        this.status = status;
        this.result = result;
    }

    public String getStatus() {
        return status;
    }

    public double getResult() {
        return result;
    }
}