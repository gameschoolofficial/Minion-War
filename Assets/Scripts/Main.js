#pragma strict

/* Your task - write the following features:


Press S to summon minion. When player presses 's' -> 
-function - summonMinion()
-the number of minions you have (a variable you must declare) increases by 1). 
-Game says "summoning minion..You now have x", with 'x' being the number you have. 

Press A to attack with minions you have. When player presses 'a' ->
-Game says "Ataaaaaaaaaaack!"
-run function attackDragon. 


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