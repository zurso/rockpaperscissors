package com.rps.rockpaperscissors.web;

import com.rps.rockpaperscissors.service.CPUMoveService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CPUMoveController {

    @Autowired
    private CPUMoveService cmoveService;
    
    @GetMapping("/cpuMove")
    public ResponseEntity<?> getCPUMove(){
        return ResponseEntity.ok(cmoveService.getCPUMove());
    }
}
