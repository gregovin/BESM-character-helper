function prefSave(level){
	return Math.floor((level+4)/2)
}
function otherSave(level){
	return Math.floor(level/3)
}

function rpgClassHandler(){

	this.getName=function(rpgClass){
		return rpgClass.className
	}
	this.getAttackBonus=function(level,rpgClass){
		return Math.floor(rpgClass.attackBonusprog*level)
	}
	this.getSave=function(type, level,rpgClass){
		saves=rpgClass.prefSave.split("|")
		if(type==saves[0] || type==saves[1]){
			return prefSave(level)
		} else {
			return otherSave(level)
		}
	}
	this.getNewAbilities=function(level,rpgClass){
		return rpgClass.abilities[level-1];
	}
	this.getAllAbilities=function(level,rpgClass){
		res=rpgClass.abilities[0]
		for (var i=1;i<min(level-1,rpgClass.abilities.length);i++):
			for k in abilities[i]:
				res.push(k)
		return res
	this.firstLevelSkills=function(int,rpgClass){
		return 4*(rpgClass.skillBasis+int)
	}
	this.otherLevel=function(int,rpgClass){
		return this.skillBasis+int
	}
}
