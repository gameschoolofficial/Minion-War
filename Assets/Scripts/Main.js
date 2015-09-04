#pragma strict

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