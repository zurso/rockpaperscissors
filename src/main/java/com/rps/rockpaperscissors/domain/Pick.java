package com.rps.rockpaperscissors.domain;

public class Pick {

    private int id;
    private String name;
    private int beats;

    public Pick() {
    }
    
    public Pick(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Pick(int id, String name, int beats) {
        this.id = id;
        this.name = name;
        this.beats = beats;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBeats() {
        return beats;
    }

    public void setBeats(int beats) {
        this.beats = beats;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
    
}
