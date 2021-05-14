package com.rps.rockpaperscissors.domain;

import java.sql.Timestamp;

public class Winstreak {

    private int id;
    private Timestamp timestamp;
    private int streak;
    private int score;

    public Winstreak() {
    }
    public Winstreak(int id, Timestamp timestamp, int streak, int score) {
        this.id = id;
        this.timestamp = timestamp;
        this.streak = streak;
        this.score = score;
    }
    
    public Timestamp getTimestamp() {
        return timestamp;
    }
    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getStreak() {
        return streak;
    }
    public void setStreak(int streak) {
        this.streak = streak;
    }
    public int getScore() {
        return score;
    }
    public void setScore(int score) {
        this.score = score;
    }
    
}
