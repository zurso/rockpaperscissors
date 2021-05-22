package com.rps.rockpaperscissors.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import com.rps.rockpaperscissors.domain.Pick;

import org.springframework.stereotype.Repository;

@Repository
public class PickRepository {
    //fake DB
    private List<Pick> picks = new ArrayList<>();
    private AtomicInteger idCounter = new AtomicInteger(1);

    //just for the fake DB
    public void initPicks(){
        Pick rock = new Pick(idCounter.getAndIncrement(), "rock");
        Pick paper = new Pick(idCounter.getAndIncrement(), "paper");
        Pick scissors = new Pick(idCounter.getAndIncrement(), "scissors");
        rock.setBeats(scissors.getId());
        paper.setBeats(rock.getId());
        scissors.setBeats(paper.getId());
        picks.add(rock);
        picks.add(paper);
        picks.add(scissors);
    }

    public List<Pick> getPicks(){
        if(picks.size()==0){
            initPicks();
        }
        return picks;
    }

    public Pick save(Pick p){
        p.setId(idCounter.getAndIncrement());
        picks.add(p);
        return p;
    }
    
}
