package com.rps.rockpaperscissors.service;

import java.sql.Timestamp;
import java.util.List;

import com.rps.rockpaperscissors.domain.Winstreak;
import com.rps.rockpaperscissors.repository.WinstreakRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WinstreakService {
    
    @Autowired
    private WinstreakRepository wstreakRepo;

    //returns the Winstreak with the highest streak value.
    public Winstreak getTopWinstreak(){
        List<Winstreak> winstreaks = wstreakRepo.getWinstreaks();
        if(winstreaks.isEmpty()){
            return new Winstreak(-1, new Timestamp(System.currentTimeMillis()), 0, 0);
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

	public Winstreak createWinstreak(Winstreak w) {
        return wstreakRepo.save(w);
	}
}
