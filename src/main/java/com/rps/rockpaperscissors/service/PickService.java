package com.rps.rockpaperscissors.service;

import java.util.List;
import java.util.Random;

import com.rps.rockpaperscissors.domain.Pick;
import com.rps.rockpaperscissors.repository.PickRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PickService {

    @Autowired
    private PickRepository pickRepo;

    private Random r = new Random();
    
    public Pick getCPUPick(){
        List<Pick> picks = pickRepo.getPicks();
        return picks.get(r.nextInt(picks.size()));
    }

    public List<Pick> getPicks() {
        return pickRepo.getPicks();
	}
}
