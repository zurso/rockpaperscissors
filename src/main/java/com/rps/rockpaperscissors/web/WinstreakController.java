package com.rps.rockpaperscissors.web;

import com.rps.rockpaperscissors.domain.Winstreak;
import com.rps.rockpaperscissors.service.WinstreakService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WinstreakController {
    
    @Autowired
    private WinstreakService wstreakService;

    @GetMapping("/topWinstreak")
    public ResponseEntity<?> getTopWinstreak(){
        Winstreak top = wstreakService.getTopWinstreak();
        return ResponseEntity.ok(top);
    }
}
