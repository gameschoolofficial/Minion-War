#pragma strict

/* Your task - write the following features:


Press S to summon minion. 
function - summonMinion().
When minion summoned, he says "I do your bidding, my lord!"
the number of minions you have (a variable you must declare) increases by 1). 

Press A to attack with minions you have. 
Game says "Ataaaaaaaaaaack!"
run function attackDragon. 


*/

public var dragon: Dragon;
public var minion: Minion;

function Start () 
{
	
}

function Update () 
{
	
}

function summonMinion()
{
	Instantiate(minion); 
}

function attackDragon(numMinions: int)
{
	dragon.fightTheMinions(numMinions);
}