## DragonFight Music - By Stanimaties
scoreboard objectives add P_Music dummy

## restart music if:
## The Player died, relogged or exits the end
scoreboard objectives add I_rejoin custom:leave_game
scoreboard objectives add I_died deathCount

schedule function drag:dragon_loop 1s replace