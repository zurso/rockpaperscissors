package com.rps.rockpaperscissors.service;

import java.util.Random;

import com.rps.rockpaperscissors.domain.Pick;

import org.springframework.stereotype.Service;

@Service
public class CPUMoveService {

    private Random r = new Random();
    private Pick[] choices = {new Pick("rock"), new Pick("paper"), new Pick("scissors")};
    
    public Pick getCPUMove(){
        return choices[r.nextInt(choices.length)];
    }
}
