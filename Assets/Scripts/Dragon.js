#pragma strict

var strength: int;

function Start () {

strength = Random.Range(5,10);
print("The Dragon's strength is " + strength + ". You need that many minions to defeat it. Spawn minions by pressing S, Attack by pressing A.");



}

function fightTheMinions (minionNum: int) {

	if(minionNum >= strength)
	{
		print("You killed the dragon!");
	}
	else 
	{
		print("Dragon is too powerful. You need " + (strength - minionNum) + " more minion(s).");
	}

}

