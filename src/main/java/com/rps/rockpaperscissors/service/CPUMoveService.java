package com.rps.rockpaperscissors.service;

import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class CPUMoveService {

    private Random r = new Random();
    private String choices = "RPS";
    
    public char getCPUMove(){
        return choices.charAt(r.nextInt(choices.length()));
    }
}
