function prefSave(level){
	return Math.floor((level+4)/2)
}
function otherSave(level){
	return Math.floor(level/3)
}

function rpgClass(name,abprog,prefSav,skillBasis,attribuites,classSkills){
	this.classname=name
	this.attackBonusprog=abprog
	this.prefferedSave=prefSav
	this.baseSkills=skillBasis
	this.abilities=attribuites
	this.skills=classSkills
	get name(){
		return this.name
	}
	this.getAttackBonus=function(level){
		return Math.floor(attackBonusprog*level)
	}
	this.getSave=function(type, level){
		if(type==this.prefferedSave){
			return prefSave(level)
		} else {
			return otherSave(level)
		}
	}
	this.getNewAbilities=function(level){
		return this.abilities[level];
	}
	this.getAllAbilities=function(level){
		res=this.abilities[0]
		for (var i=1;i<this.abilities.length;i++):
			for k in abilities[i]:
				res.push(k)
		return res
	this.firstLevelSkills=function(int){
		return 4*(this.baseSkills+int)
	}
	this.otherLevel=function(int){
		return this.baseSkills+int
	}
}
