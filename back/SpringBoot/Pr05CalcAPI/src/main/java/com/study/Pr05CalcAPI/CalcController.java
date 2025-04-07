package com.study.Pr05CalcAPI;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calc")
@CrossOrigin(origins = "*")
public class CalcController {

    @PostMapping("/{op}")
    public CalcResponse calculate(@PathVariable String op, @RequestBody CalcRequest request) {
        double num1 = request.getNum1();
        double num2 = request.getNum2();
        double result;

        switch (op) {
            case "add":
                result = num1 + num2;
                break;
            case "sub":
                result = num1 - num2;
                break;
            case "mul":
                result = num1 * num2;
                break;
            case "div":
                result = num2 != 0 ? num1 / num2 : 0;
                break;
            default:
                throw new IllegalArgumentException("Invalid operation");
        }

        return new CalcResponse("ok", result);
    }
}