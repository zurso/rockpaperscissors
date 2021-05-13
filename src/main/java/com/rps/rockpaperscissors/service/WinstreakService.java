package com.rps.rockpaperscissors.service;

import java.util.List;

import com.rps.rockpaperscissors.domain.Winstreak;
import com.rps.rockpaperscissors.repository.WinstreakRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WinstreakService {
    
    @Autowired
    private WinstreakRepository wstreakRepo;

    public Winstreak getTopWinstreak(){
        List<Winstreak> winstreaks = wstreakRepo.getWinstreaks();
        if(winstreaks.isEmpty()){
            return null;
        }
        else{
            Winstreak top = winstreaks.get(0);
            for(Winstreak w : winstreaks){
                if(w.getStreak()>top.getStreak()){
                    top = w;
                }
            }
            return top;
        }
    }
}
