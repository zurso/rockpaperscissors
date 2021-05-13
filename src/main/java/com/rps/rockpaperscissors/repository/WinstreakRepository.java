package com.rps.rockpaperscissors.repository;

import java.util.ArrayList;
import java.util.List;

import com.rps.rockpaperscissors.domain.Winstreak;

import org.springframework.stereotype.Repository;

@Repository
public class WinstreakRepository {

    //fake DB
    private List<Winstreak> winstreaks = new ArrayList<>();
    
    public List<Winstreak> getWinstreaks(){
        return winstreaks;
    }
}
