package com.rps.rockpaperscissors.repository;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import com.rps.rockpaperscissors.domain.Winstreak;

import org.springframework.stereotype.Repository;

@Repository
public class WinstreakRepository {

    //fake DB
    private List<Winstreak> winstreaks = new ArrayList<>();
    private AtomicInteger idCounter = new AtomicInteger(0);
    
    public List<Winstreak> getWinstreaks(){
        return winstreaks;
    }

    public Winstreak save(Winstreak w){
        w.setTimestamp(new Timestamp(System.currentTimeMillis()));
        w.setId(idCounter.getAndIncrement());
        winstreaks.add(w);
        return w;
    }
}
