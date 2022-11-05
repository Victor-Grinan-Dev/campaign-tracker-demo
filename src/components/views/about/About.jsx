import React from 'react';

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <p>This app is suppoused to hep the boardgaming comunity to create more extensive campaigns and keep trak of them on line, this should be fun.</p>

        <br />

        <h2>Some initial ideas:</h2>
        <p>Campaign consists of two parts Fighting.- Battles can be fought at any time againstany opponent, even if theyare not part of the campaign. Only thing that matters is the armies that are playedwith. When fighting a battle, player can agree before the game with theiropponent where it occurs on the map, or just report the battle without a location,and then the winners faction will decide. the player or the faction warmaster.</p>

        <br />

        <h2>Old Rules to study and recreate:</h2>
        <br />
        <h3>Legendary Heroes</h3>
        - Player must inform their opponent that they have alegendary hero or heroes in their list. Two are allowed per game.
        -A player has to keep track of his Legendary heroes byhimself.
        -Each hero must play a game with each new skill beforetaking in a next one.
        - lvl 0 effects will only come into play when thelegendary hero has  experience of  35 or more.
        -LvL 0 Legendary heroes gets to choose their Warlordtrait and gains the objective secured special rule.nothing else.
        - For each level of a hero (levels added together)  playerhas over his opponent, the opponent will get to re 
        -roll one dice roll in the game.
        - For each wound or limitation the hero has suffered inthe previous game and that is in effect for the currentgame, the here is counted as being a one level less forcounts g how many re rolls the opponent gets.SlainEach time a character that has been collectingexperience in the game is slain in a game that is part ofthe campaign, roll on the table below. Add +1 to the rollfor each surviving medic, sorcerer or apothecary after each battle for one  slain character per medic etc. (no more that +3).
        -1 if slain in a challenge
        -1 if killed by instant kill , (does not stack withdestroyer weapons)
        -2 if killed by a destroyer weaponTable of Death roll d60 Out of Action. The hero is not available for the nextd6 game's as he Is treated for the grievous wounds. inaddition roll again on this table with +1 modifier. If youroll this result three times in a row the hero diespermanently and a new one can be chosen.1 roll thrice on the injury table,both apply to the nextd4 battles2 roll twice on the injury table, applies to the next d3battles3 roll on the injury table, applies to the next d3 battles4 roll on the injury table, takes effect on d6 roll of 1before each battle, lasts for d6 battles5 roll on injury table, effect is for next game only6 Lucky escape, no adverse effectsInjury table roll 2d6

        -On 5+ drops one random relic on the battlefield.

        <p>2 Mortal Wound festers, roll on the death table with -1</p>
        <p>3 Leg injured, Cannot run or turbo boost, and moves asin difficult terrain.</p>
        <p>4 Weapon arm injured -1WS</p>
        <p>5 Shield arm wounded, may not use additional weaponor shield. (reduce the cost of that weapon from hisprofile for the battles)</p>
        <p>6 Torn muscle -1S</p>
        <p>7 Injury prone -1T</p>
        
        <p>8 Shoulder injured -1A</p>
        
        <p>9 Slower reactions, I is halved, rounding up. If  2 or below, cannot fire overwatch </p>

        <p>10, Refused to be hospitalized, seriously battered and weakened.-1W</p>

        <p>11 Aiming eye damaged,-1BS</p>

        <p>12  Serious head wound or Psychological trauma, will is lessened, Faith in own success and purity of purpose isfaltering and trust in mental stability is on question Losses the adamantium will, shall know no fear, fearless and stubborn special rules. -1ld to all friendly unitsinside 6”, cannot act as a warlord anymore until healed.Between battles:Any skill gained may be changed, to change a skill thecharacter will lose 1/2 the xp required to acquire thatskill (the difference between the levels)</p>
        <br />
        <p>Experience can be earnedin a battle by completingfollowing categories .Each category can only be completed only once per unitper battle if not stated otherwise;</p>
        <p>- Survived the battle they fought in +40xp/50 if warlord</p>
        <p>- Did not survive the battle (ran off the board) + 30xp</p>
        <p>- Destroys enemy unit of total value over 150p(or severalsquads with total value over 200p)  +10xp</p>
        <p>- Killed enemy character in challenge +10xp</p>
        <p>- Killed enemy independent character in challenge +20xp</p>
        <p>- Killed enemy (tough guy) grandmaster/ Chaos lord /hero with more xp than yourself or named character in achallenge, heroic feat, +30xp</p>
        <p>- Killed a monstrous creature or dreadnought +20xp</p>
        <p>- Killed a super heavy +30xp</p>
        <p>- Any change in weapons, equipment, numbers from thelast battle participated in, -10 xp</p>
        <p>- Acting beyond the Call of duty; used some weapon,power or skill to effect the game significantly, (killed aenemy unit or helped in it or saved a friendly unit.+10xp (bot players must agree on the unit)</p>

    </div>
  )
}

export default About;