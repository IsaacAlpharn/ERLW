var iFileName = "pub_20191119_ERftLW.js";
RequiredSheetVersion(13);
// This file adds the content from Eberron: Rising from the Last War to MPMB's Character Record Sheet

// Define the sources
SourceList.ERLW = {
	name : "Eberron: Rising from the Last War",
	abbreviation : "ERLW",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/eberron",
	date : "2019/11/19" 
};

// The changeling
RaceList["changeling-erlw"] = {
	regExpSearch : /changeling/i,
	name : "Changeling",
	source : [["ERLW", 17], ["WGtE", 61]],
	plural : "Changelings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Deception, Intimidation, Insight, and Persuasion",
	languageProfs : ["Common", 2],
	age : " reach adulthood in their early teens and live around 80 years",
	height : " stand between 5 and 6 feet tall (5'1\" + 2d4\")", // Taken from 3e Eberron Campaign Setting
	weight : " weigh around 140 lb (115 + 2d4 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
	heightMetric : " stand between 1,5 to over 1,8 metres tall (155 + 5d4 cm)",
	weightMetric : " weigh around 65 kg (52 + 5d4 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Charisma, and +1 to one other ability score of my choice",
	scores : [0, 0, 0, 0, 0, 2],
	trait : "Changeling (+2 Charisma, and +1 to one other ability score of my choice)\nChange Appearance: As an action, I can polymorph to or from a humanoid form of my size I have seen, not changing my equipment. I revert back if I die.",
	action : ["action", "Change Appearance"],
	
};

// The kalashtar
RaceList["kalashtar"] = {
	regExpSearch : /kalashtar/i,
	name : "Kalashtar",
	source : [["ERLW", 29], ["WGtE", 63]],
	plural : "Kalashtar",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Quori", 1],
	savetxt : { immune : ["effects that require me to dream"] },
	dmgres : ["Psychic"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from 5 and a half to well over 6 feet tall (5'4\" + 2d6\")", // Taken from 3e Eberron Campaign Setting
	weight : " weigh around 145 lb (110 + 2d6 \xD7 1d6 lb)", // Taken from 3e Eberron Campaign Setting
	heightMetric : " range from 1,7 to 1,9 metres tall (160 + 5d6 cm)",
	weightMetric : " weigh around 65 kg (55 + 5d6 \xD7 2d6 / 10 kg)",
	scorestxt : "+2 Wisdom, and +1 Charisma",
	scores : [0, 0, 0, 0, 2, 1],
	trait : "Kalashtar (+2 Wisdom, and +1 Charisma)\nDual Mind: I have advantage on Wisdom saving throws\nMind Link: I can speak telepathically to any creature I can see within 10 times my level in ft, as long as it can speak at least one language. As an action, I can give that creature the ability to speak telepathically back to me for 1 hour.\nSevered from Dreams: I don't dream and thus immune to spells that affect dreams.",
	action : ["action", "Mind Link"],
};

// The four subraces of the shifter
RaceList["beasthide shifter"] = {
	regExpSearch : /^(?=.*shifter)(?=.*beast)(?=.*hide).*$/i,
	name : "Beasthide shifter",
	sortname : "Shifter, Beasthide",
	source : [["ERLW", 33], ["WGtE", 66]],
	plural : "Beasthide shifters",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	skills : ["Athletics"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")", // Taken from 3e Eberron Campaign Setting
	weight : " weigh around 140 lb (95 + 2d8 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (43 + 5d8 \xD7 4d4 / kg)",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Beasthide Shifter: (+1 Strength, +2 Constitution)\n\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to 1d6 + my level + my Constitution modifier (minimum 1 temporary hit point).\nWhile transformed like this, I have a +1 bonus to AC",
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"]
		}
	}
};
RaceList["longtooth shifter"] = {
	regExpSearch : /^(?=.*shifter)(?=.*long)(?=.*(tooth|teeth)).*$/i,
	name : "Longtooth shifter",
	sortname : "Shifter, Longtooth",
	source : [["ERLW", 33], ["WGtE", 66]],
	plural : "Longtooth shifters",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*fangs?)(?=.*long)(?=.*(tooth|teeth)).*$/i,
		name : "Longtooth Fangs",
		source : [["WGtE", 66], ["UA:RoE", 6]],
		damage : [1, 6, "piercing"],
		description : "Only while shifted; One attack as bonus action"
	},
	weaponsAdd : ["Longtooth Fangs"],
	vision : [["Darkvision", 60]],
	skills : ["Intimidation"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")", // Taken from 3e Eberron Campaign Setting
	weight : " weigh around 140 lb (95 + 2d8 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (43 + 5d8 \xD7 4d4 / kg)",
	scores : [2, 1, 0, 0, 0, 0],
	trait : "Longtooth Shifter: (+2 Strength, +1 Dexterity)\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Constitution modifier (minimum 1 temporary hit point).\nWhile transformed like this, I use my elongated fangs to make unarmed strikes, dealing 1d6 piercing damage. As a bonus action, I can maken one attack with my fangs.",
	action : ['bonus action', 'Attack with Longtooth Fangs'],
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"]
		}
	}
};
RaceList["swiftstride shifter"] = {
	regExpSearch : /^(?=.*shifter)(?=.*swift)(?=.*stride).*$/i,
	name : "Swiftstride shifter",
	sortname : "Shifter, Swiftstride",
	source : [["ERLW", 33], ["WGtE", 66]],
	plural : "Swiftstride shifters",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	skills : ["Acrobatics"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")", // Taken from 3e Eberron Campaign Setting
	weight : " weigh around 140 lb (95 + 2d8 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (43 + 5d8 \xD7 4d4 / kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Swiftstride Shifter: (+2 Dexterity, +1 Charisma)\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Con" + (typePF ? "stitution modifier (minimum 1 temporary hit point" : " mod (minimum 1 temp HP") + ").\nWhile transformed like this, my walking speed increases with 10 ft.\nAs a reaction when an enemy ends its turn within 5 ft of me while I'm shifted, I can move 10 ft without provoking opportunity attacks.",
	action : ['reaction', 'Stride (while shifted)'],
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"]
		}
	}
};
RaceList["wildhunt shifter"] = {
	regExpSearch : /^(?=.*shifter)(?=.*wild)(?=.*hunt).*$/i,
	name : "Wildhunt shifter",
	sortname : "Shifter, Wildhunt",
	source : [["ERLW", 33], ["WGtE", 66]],
	plural : "Wildhunt shifters",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	skills : ["Survival"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")", // Taken from 3e Eberron Campaign Setting
	weight : " weigh around 140 lb (95 + 2d8 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (43 + 5d8 \xD7 4d4 / kg)",
	scores : [0, 1, 0, 0, 2, 0],
	trait : "Wildhunt Shifter: (+1 Dexterity, +2 Wisdom)\nShifting: As a bonus action once per short rest, I can transform and get adv. on Wis checks, and no creature within 30 feet of me can make an attack roll with advantage against me, unless I'm incapacitated.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Constitution modifier (minimum 1 temporary hit point.",
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"]
		},
	}
};

// The warforged
RaceList["warforged"] = {
	regExpSearch : /warforged/i,
	name : "Warforged",
	source : [["ERLW", 35], ["WGtE", 67]],
	plural : "Warforged",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	skillstxt : "Choose any one skill, and any one tool",
	savetxt : {
		text : ["Magic can't put me to sleep"],
		immune : ["disease", "exhaustion from lack of rest"],
		adv_vs : ["poison"]
	},
	dmgres : ["Poison"],
	age : " are created as adults and will only start to show signs of physical deterioration after 150 years, but have no further aging effects",
	height : " stand between 6 and 7 feet tall (5'10\" + 2d6\")",
	weight : " weigh around 300 lb (270 + 2d6 \xD7 4 lb)",
	heightMetric : " stand between 1,8 and 2,1 metres tall (178 + 5d6 cm)",
	weightMetric : " weigh around 135 kg (125 + 5d6 \xD7 8 / kg)",
	scorestxt : "+2 Constitution and +1 to one other ability score of my choice",
	scores : [0, 0, 2, 0, 0, 0],
	trait : "Warforged (+2 Constitution and +1 to one other ability score of my choice)\nWarforged Resilience: I do not need to sleep, eat, drink, or breathe.\nSentry's Rest: To benefit from a long rest, I need to enter an inactive state for 6 hours, during which I am not rendered unconscious and can see and hear as normal.",
	extraAC : {
		name : "Integrated Protection",
		mod : 1,
		text : "I gain a +1 bonus to AC."
	}
};

//The Eberron orc
RaceList["orc"] = {
	regExpSearch : /^(?!.*half)(?=.*\bor(c|k)).*$/i,
	name : "Orc",
	source : ["ERLW", 31],
	plural : "Orcs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Animal Handling, Insight, Intimidation, Medicine, Nature, Perception, and Survival",
	languageProfs : ["Common", "Orc"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood at age 12 and live up to 50 years",
	height : " are usually over 6 feet tall (5'4\" + 2d8\")",
	weight : " weigh between 230 and 280 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " are usually over 1,8 metres tall (160 + 5d8 cm)",
	weightMetric : " weigh between 100 and 125 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	scores : [2, 0, 1, 0, 0, 0],
	features : {
		"aggressive" : {
			name : "Aggressive",
			minlevel : 1,
			action : ["bonus action", " (dash to enemy)"]
		}
	},
	trait : "Orc (+2 Strength, +1 Constitution)\n\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\n\nAggressive: As a bonus action, I can move up to my speed toward an enemy that I can see or hear. I must end my move closer to this enemy than I started.",
	carryingCapacity : 2
};

//The goblinoids
RaceList["bugbear"] = {
	regExpSearch : /bugbear/i,
	name : "Bugbear",
	source : [["V", 119], ["ERLW", 24]],
	plural : "Bugbears",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	skills : ["Stealth"],
	age : " rearch adulthood at age 16 and live up to 80 years",
	height : " are between 6 and 8 feet tall (6'0\" + 2d12\")",
	weight : " weigh between 250 and 350 lb (200 + 2d12 \xD7 2d6 lb)",
	heightMetric : " are between 1,9 and 2,4 metres tall (185 + 5d12 cm)",
	weightMetric : " weigh between 115 and 160 kg (90 + 5d12 \xD7 4d6 / 10 kg)",
	scores : [2, 1, 0, 0, 0, 0],
	features : {
		"surprise attack" : {
			name : "Surprise Attack",
			minlevel : 1,
			usages : 1,
			recovery : "Combat",
			additional : "2d6"
		}
	},
	trait : "Bugbear (+2 Strength, +1 Dexterity)\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\nLong-Limbed: I have an additional 5 feet reach with melee attacks that I make on my turn.\nSurprise Attack: If I hit a surprised creature on my first turn in combat, that attack deals an extra 2d6 damage. I can do this only once per combat.",
	carryingCapacity : 2
};
RaceList["goblin"] = {
	regExpSearch : /^(?=.*\bgoblins?\b)(?!.*hobgoblin|bugbear).*$/i,
	name : "Goblin",
	source : [["V", 119], ["G", 17], ["ERLW", 24]],
	plural : "Goblins",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " rearch adulthood at age 8 and live up to 60 years",
	height : " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	scores : [0, 2, 1, 0, 0, 0],
	features : {
		"fury of the small" : {
			name : "Fury of the Small",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			additional : levels.map(function (n) { return "+" + n + " damage"; })
		},
		"nimble escape" : {
			name : "Nimble Escape",
			minlevel : 1,
			action : ["bonus action", " (disengage/hide)"]
		}
	},
	trait : "Goblin (+2 Dexterity, +1 Constitution)\n\nFury of the Small: Once per short rest, when I hit a creature of a size category larger than mine, I deal extra damage equal to my level.\n\nNimble Escape: As a bonus action, I can take the Disengage or Hide action."
};
RaceList["hobgoblin"] = {
	regExpSearch : /hobgoblin/i,
	name : "Hobgoblin",
	source : [["V", 119], ["ERLW", 24]],
	plural : "Hobgoblins",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	armorProfs : [true, false, false, false],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh between 150 and 200 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh between 70 and 90 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 2, 1, 0, 0],
	features : {
		"saving face" : {
			name : "Saving Face",
			minlevel : 1,
			usages : 1,
			recovery : "short rest"
		}
	},
	trait : "Hobgoblin (+2 Constitution, +1 Intelligence)\n\nMartial Training: I am proficient with two martial weapons of my choice and light armor.\n\nSaving Face: Once per short rest, when I miss an attack roll or fail an ability check or a saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 feet of me (max +5)."
};
// Double bladed scimitar
WeaponsList["double-bladed scimitar"] = {
	regExpSearch : /^(?=.*double)(?=.*scimitar).*$/i,
	name : "Double-bladed scimitar",
	source : [["ERLW", 21], ["WGtE", 74]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	abilitytodamage : true
};


// Revenant blade feat
FeatsList["revenant blade"] = {
	name : "Revenant Blade",
	source : [["ERLW", 22], ["WGtE", 74]],
	prerequisite : "Being an Elf",
	prereqeval : function(v) { return (/^(?!.*half)(?=.*(elf|eladrin|avariel|grugach|shadar-kai)).*$/i).test(CurrentRace.known); },
	descriptionFull : "You are descended from a master of the double blade and their skills have passed on to you. You gain the following benefits:\n \u2022 While wielding a double-bladed weapon with two hands, the weapon has the finesse trait for your attacks with it, and you gain +1 AC.",
	description : "I treat double-bladed weapons as having the finesse trait. +1 AC while wielding a double-bladed weapon with two hands. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	action : ["bonus action", " (with Attack action)"],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'double-bladed scimitar' && fields.Proficiency) {
					fields.Description = fields.Description.replace('Two-handed; With Attack action, one attack as bonus action for 1d4', 'Finesse, two-handed; With Attack action, one attack as bonus action');
					fields.Mod = v.StrDex;
				}
			},
			"Double-bladed weapons count as having finesse for me and I can make an extra attack with them as a bonus action when taking the Attack action."
		]
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm wielding a double-bladed weapon in two hands.",
		stopeval : function (v) { return v.usingShield && !(/animated/i).test(What("AC Shield Bonus Description")); }
	}
};

// Creature
CreatureList["clawfoot raptor"] = {
	name : "Clawfoot Raptor",
	source : [["ERLW", 289], ["WGtE", 81]],
	size : 3,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 16,
	hd : [3, 8],
	speed : "40 ft",
	scores : [12, 16, 14, 4, 12, 6],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	senses : "",
	passivePerception : 13,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Claw",
		ability : 2,
		damage : [1, 8, "slashing"],
		range : "Melee (5 ft)",
		description : "If used after moving 30 ft straight in the same round, see Pounce trait"
	}, {
		name : "Bite",
		ability : 2,
		damage : [1, 8, "piercing"],
		range : "Melee (5 ft)",
		description : "Can be used in combination with claw while pouncing (see Pounce trait)"
	}],
	traits : [{
			name : "Multiattack",
			description : " The clawfoot makes two attacks: one with its bite and one with its claws."
		}, {
			name : "Pack Tactics",
			description : "The clawfoot has advantage on an attack roll against a creature if at least one of the clawfoot's allies is with in 5 feet of the creature and the ally isn't incapacitated."
		}, {
			name : "Pounce",
			description : "If the clawfoot moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 11 Strength saving throw or be knocked prone. If the target is prone, the clawfoot can make one bite attack against it as a bonus action."
		}]
};

// House Agent backgrounds
BackgroundList["house agent"] = { // the default is House Cannith
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*(noble|cannith)).*$/i,
	name : "Agent of House Cannith",
	source : [["WGtE", 94], ["ERLW", 53]],
	skills : ["Investigation", "Persuasion"],
	gold : 20,
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring of house Cannith", "", ""],
		["ID papers", "", ""],
		["Purse (with coins)", "", 1]
	],
	feature : "House Connections",
	trait : [
		"I'm always looking to improve efficiency.",
		"I love to share trivia about my house's business.",
		"I never forget an insult made against me or my house.",
		"I'm enthusiastic about everything my house does.",
		"I represent my house and take pride in my looks.",
		"I'm critical of monarchies and limits on the houses."
	],
	ideal : [
		["Common Good",
			"Common Good: My house serves a vital function, and its properity will help everyone. (Good)"
		],
		["Tradition",
			"Tradition: I uphold traditions of my house and bring honor to my family. (Lawful)"
		],
		["Innovation",
			"Innovation: Abandon old traditions and find better ways to do things. (Chaotic)"
		],
		["Power",
			"Power: I want to ensure the prosperity of my house and wield its power myself. (Evil)"
		],
		["Discovery",
			"Discovery: I want to learn all I can, both for my house and for my own curiosity. (Any)"
		],
		["Comfort",
			"Comfort: I want to ensure that me and friends of mine enjoy the best things in life. (Any)"
		]
	],
	bond : [
		"My house is my family. I would do anything for it.",
		"I love someone from another house, but the relationship is forbidden.",
		"Someone I love was killed by a rival faction within my house, and I will have revenge.",
		"I don't care about the house as a whole, but I would do anything for my old mentor.",
		"My house must evolve, and I'll lead the evolution.",
		"I am determined to impress the leaders of my house, and to become a leader myself."
	],
	flaw : [
		"I'm fixated on following official protocols.",
		"I'm obsessed with conspiracy theories and worried about secret societies and hidden demons.",
		"My house and bloodline make me the best!",
		"My secret could get me expelled from my house.",
		"My religious beliefs aren't widespread in my house.",
		"I'm working for a hidden faction in my house that gives me secret assignments."
	],
	extra : [
		"Select an House Agent Role",
		"Acquisition",
		"Investigation",
		"Research \u0026 Development",
		"Security",
		"Intimidation",
		"Exploration",
		"Negotiation",
		"Covert Operations"
	],
	toolProfs : ["Alchemist's supplies", "Tinker's tools"]
};
AddBackgroundVariant("house agent", "deneith", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*deneith).*$/i,
	name : "Agent of House Deneith",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"]
});
AddBackgroundVariant("house agent", "ghallanda", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*ghallanda).*$/i,
	name : "Agent of House Ghallanda",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : ["Brewer's supplies", "Cook's utensils"]
});
AddBackgroundVariant("house agent", "jorasco", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*jorasco).*$/i,
	name : "Agent of House Jorasco",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : ["Alchemist's supplies", "Herbalism kit"]
});
AddBackgroundVariant("house agent", "kundarak", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*kundarak).*$/i,
	name : "Agent of House Kundarak",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : [["Thieves' tools", "Dex"], "Tinker's tools"]
});
AddBackgroundVariant("house agent", "lyrandar", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*lyrandar).*$/i,
	name : "Agent of House Lyrandar",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : ["Navigator's tools", "Vehicles (sea/air)"]
});
AddBackgroundVariant("house agent", "medani", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*medani).*$/i,
	name : "Agent of House Medani",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : ["Disguise kit", ["Thieves' tools", "Dex"]]
});
AddBackgroundVariant("house agent", "orien", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*orien).*$/i,
	name : "Agent of House Orien",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"]
});
AddBackgroundVariant("house agent", "phiarlan", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*phiarlan).*$/i,
	name : "Agent of House Phiarlan",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : ["Disguise kit", ["Musical instrument", 1]]
});
AddBackgroundVariant("house agent", "sivis", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*sivis).*$/i,
	name : "Agent of House Sivis",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : ["Calligrapher's tools", "Forgery kit"]
});
AddBackgroundVariant("house agent", "tharashk", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*tharashk).*$/i,
	name : "Agent of House Tharashk",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : [["Gaming set", 1], ["Thieves' tools", "Dex"]]
});
AddBackgroundVariant("house agent", "thuranni", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*thuranni).*$/i,
	name : "Agent of House Thuranni",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : [["Musical instrument", 1], "Poisoner's kit"]
});
AddBackgroundVariant("house agent", "vadalis", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*vadalis).*$/i,
	name : "Agent of House Vadalis",
	source : [["WGtE", 94], ["ERLW", 53]],
	toolProfs : ["Herbalism kit", "Vehicles (land)"]
});
BackgroundFeatureList["house connections"] = {
	description : "As an agent of my house, I can always get food and lodging for my friends at a house enclave. My house usually provides me with necessary supplies and transportation if it assigns me a mission. I have many old friends, mentors, and rivals in my house that I might run into and be willing to help me depending on my current standing in the house.",
	source : ["WGtE", 95]
};

// Dragonmarks subraces
RaceList["dragonmark detection half-elf"] = {
	regExpSearch : /^((?=.*mark)(?=.*detection)|(?=.*house)(?=.*medani)).*$/i,
	name : "Half-elf (dragonmark)",
	sortname : "Dragonmark, Detection (Half-Elf)",
	source : [["WGtE", 96], ["ERLW", 40]],
	plural : "Half-elves (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish", 1],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	age : " reach adulthood around age 20 and often live over 180 years",
	height : " range from 5 to 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Wisdom, and +1 to any one other ability score of my choice",
	scores : [0, 0, 0, 0, 2, 0],
	trait : "Half-Elf, Dragonmark of Detection (+2 Wisdom, and +1 to any one other ability score of my choice)\n" + (typePF ? "\n" : "   ") + "Deductive Intuition: I can add 1d4 to my Intelligence (Investigation) and Wisdom (Insight) checks.\n" + (typePF ? "\n" : "   ") + "Magical Detection:\n   I can cast Detect Magic and Detect Poison and Disease.\n   At 3rd level, I can cast See Invisibility.\n   Once I cast any of these spells with this trait, I can't cast that spell with it again until I finish a long rest. Intelligence is my spellcasting ability for these spells, and I don't require material components for them.",
	spellcastingAbility : 4,
	features : {
		"magical detection (detect magic)" : {
			name : "Magical Detection (Detect Magic)",
			limfeaname : "Detect Magic",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Magical Detection",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : 'oncelr'
			}
		},
		"magical detection (detect poison and disease)" : {
			name : "Magical Detection (Detect Poison and Disease)",
			limfeaname : "Detect Poison and Disease",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Magical Detection",
				spells : ["detect poison and disease"],
				selection : ["detect poison and disease"],
				firstCol : 'oncelr'
			}
		},
		"magical detection (see invisibility)" : {
			name : "Magical Detection (See Invisibility)",
			limfeaname : "See Invisibility",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Magical Detection",
				spells : ["see invisibility"],
				selection : ["see invisibility"],
				firstCol : 'oncelr'
			}
		},
		calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["detect evil and good", "detect poison and disease", "detect thoughts", "find traps", "clairvoyance", "nondetection", "arcane eye", "divination", "legend lore"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Detect Evil and Good, Detect Poison and Disease, Detect Thoughts, Find Traps, Clairvoyance, Nondetection, Arcane Eye, Divination, and Legend Lore."
		]
	},
	}
};
RaceList["dragonmark finding half-orc"] = {
	regExpSearch : /^(?=.*half)(?=.*\bor(c|k))((?=.*mark)(?=.*finding)|(?=.*house)(?=.*tharashk)).*$/i,
	name : "Half-orc (dragonmark)",
	sortname : "Dragonmark, Finding (Half-Orc)",
	source : [["WGtE", 97], ["ERLW", 41]],
	plural : "Half-orcs (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood around age 14 and rarely live longer than 75 years",
	height : " range from 5 to well over 6 feet tall (4'10\" + 2d10\")",
	weight : " weigh around 215 lb (140 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (150 + 5d10 cm)",
	weightMetric : " weigh around 100 kg (65 + 5d10 \xD7 4d6 / 10 kg)",
	scorestxt : "+1 Constitution, and +2 Wisdom",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Half-Orc, Dragonmark of Finding (+1 Constitution, +2 Wisdom)\n  Hunter's Intuition: I add 1d4 to my Perception and Survival checks.\n   Finder's Magic: I can cast the Hunter's Mark spell with this trait. Starting at 3rd level, I can also cast the Locate Object spell with it. Once I cast either spell with this trait, I can't cast that spell with it again until I finish a long rest. Wisdom is my spellcasting ability for these spells.",
	spellcastingAbility : 5,
	features : {
		"finder's magic (hunter's mark)" : {
			name : "Finder's Magic (Hunter's Mark)",
			limfeaname : "Hunter's Mark",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Finder's Magic",
				spells : ["hunter's mark"],
				selection : ["hunter's mark"],
				firstCol : 'oncelr'
			}
		},
		"finder's magic (locate object)" : {
			name : "Finder's Magic (Locate Object)",
			limfeaname : "Locate Object",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Finder's Magic",
				spells : ["locate object"],
				selection : ["locate object"],
				firstCol : 'oncelr'
			}
		},
		calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["faerie fire", "longstrider", "locate animals or plants", "locate object", "clairvoyance", "speak with plants", "divination", "locate creature", "commune with nature"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Faerie Fire, Longstrider, Locate Animals or Plants, Locate Object, Clairvoyance, Speak with Plants, Divination, Locate Creature, and Commune with Nature."
		]
	},
	}
};
RaceList["dragonmark finding human"] = {
	regExpSearch : /^(?=.*human)((?=.*mark)(?=.*finding)|(?=.*house)(?=.*tharashk)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Finding (Human)",
	source : [["WGtE", 97], ["ERLW", 41]],
	plural : "Humans (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scorestxt : "+1 Constitution, and +2 Wisdom",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Human, Dragonmark of Finding (+1 Constitution, +2 Wisdom)\n   Hunter's Intuition: I add 1d4 to my Perception and Survival checks.\n   Finder's Magic: I can cast the Hunter's Mark spell with this trait. Starting at 3rd level, I can also cast the Locate Object spell with it. Once I cast either spell with this trait, I can't cast that spell with it again until I finish a long rest. Wisdom is my spellcasting ability for these spells.",
	spellcastingAbility : 5,
	features : {
		"finder's magic (hunter's mark)" : {
			name : "Finder's Magic (Hunter's Mark)",
			limfeaname : "Hunter's Mark",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Finder's Magic",
				spells : ["hunter's mark"],
				selection : ["hunter's mark"],
				firstCol : 'oncelr'
			}
		},
		"finder's magic (locate object)" : {
			name : "Finder's Magic (Locate Object)",
			limfeaname : "Locate Object",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Finder's Magic",
				spells : ["locate object"],
				selection : ["locate object"],
				firstCol : 'oncelr'
			}
		},
		calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["faerie fire", "longstrider", "locate animals or plants", "locate object", "clairvoyance", "speak with plants", "divination", "locate creature", "commune with nature"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Faerie Fire, Longstrider, Locate Animals or Plants, Locate Object, Clairvoyance, Speak with Plants, Divination, Locate Creature, and Commune with Nature."
		]
	},
	}
};
RaceList["dragonmark handling human"] = {
	regExpSearch : /^((?=.*mark)(?=.*handling)|(?=.*house)(?=.*vadalis)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Handling (Human)",
	source : [["WGtE", 98], ["ERLW", 42]],
	plural : "Humans (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Wisdom, and +1 to any one other ability score of my choice",
	scores : [0, 0, 0, 0, 2, 0],
	trait : "Human, Dragonmark of Handling (+2 Wis" + (typePF ? ", +1 to one other ability" : "dom, +1 to any one other ability score") + ")\n   Wild Intuition: I can add 1d4 to my Wisdom (Animal Handling) and Intelligence (Nature) checks.\n   Primal Connection: I can cast the Animal Friendship and Speak with Animals spells with this trait, requiring no material component. Once I cast either spell with this trait, I can't cast that spell with it again until I finish a short or long rest. Wisdom is my spellcasting ability for these spells.\n   The Bigger They Are: Starting at 3rd level, I can target a beast or monstrosity when I cast Animal Friendship or Speak with Animals, provided the creature's Intelligence score is 3 or lower.",
	spellcastingAbility : 5,
	features : {
		"primal connection (animal friendship)" : {
			name : "Primal Connection (Animal Friendship)",
			limfeaname : "Animal Friendship",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Primal Connection",
				spells : ["animal friendship"],
				selection : ["animal friendship"],
				firstCol : 'oncelr'
			}
		},
		"primal connection (speak with animals)" : {
			name : "Primal Connection (Speak with Animals)",
			limfeaname : "Speak with Animals",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Primal Connection",
				spells : ["speak with animals"],
				selection : ["speak with animals"],
				firstCol : 'oncelr'
			}
		},
	},
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName) {
				switch (spellKey) {
					case "animal friendship" :
						spellObj.description = spellObj.description.replace("beasts", "beasts/monstrosities");
						return true;
					case "speak with animals" :
						spellObj.description = "Communicate verbally with monstrosities Int<4 or beasts for duration; interactions limited by their Int";
						return true;
				}
			},
			"Animal Friendship or Speak with Animals I cast can also affect monstrosities with an Intelligence score of 3 or lower."
		],
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["animal friendship", "speak with animals", "beast sense", "calm emotions", "beacon of hope", "conjure animals", "aura of life", "dominate beast", "awaken"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Animal Friendship, Speak with Animals, Beast Sense, Calm Emotions, Beacon of Hope, Conjure Animals, Aura of Life, Dominate Beast, and Awaken."
		]
	}
};
RaceList["dragonmark healing halfling"] = {
	regExpSearch : /^((?=.*mark)(?=.*healing)|(?=.*house)(?=.*jorasco)).*$/i,
	name : "Halfling (dragonmark)",
	sortname : "Dragonmark, Healing (Halfling)",
	source : [["WGtE", 99], ["ERLW", 43]],
	plural : "Halflings (dragonmark)",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Halfling"],
	savetxt : { adv_vs : ["frightened"] },
	age : " reach adulthood at age 20 and live around 150 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " average about 90 cm tall (80 + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Halfling, Dragonmark of Healing (+2 Dexterity, +1 Wisdom)" + (typePF ? "\n  " : "") +
		" Lucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll." + desc([
		"Halfling Nimbleness: I can move through the space of Medium and larger creatures.",
		"Medical Intuition: I " + (typePF ? "" : "can") + " add 1d4 to " + (typePF ? "Medicine" : "my Wisdom (Medicine)") + " and herbalism kit checks.",
		"Healing Touch: I can cast the Cure Wounds spell with this trait. Starting at 3rd level, I can also cast Lesser Restoration with it. Once I cast either spell with this trait, I can't cast that spell with it again until I finish a long rest. Wisdom is my spellcasting ability for these spells.",
	]),
	spellcastingAbility : 5,
	features : {
		"healing touch (cure wounds)" : {
			name : "Healing Touch (Cure Wounds)",
			limfeaname : "Cure Wounds",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Healing Touch",
				spells : ["cure wounds"],
				selection : ["cure wounds"],
				firstCol : 'oncelr'
			}
		},
		"healing touch (lesser restoration)" : {
			name : "Healing Touch (Lesser Restoration)",
			limfeaname : "Lesser Restoration",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Healing Touch",
				spells : ["lesser restoration"],
				selection : ["lesser restoration"],
				firstCol : 'oncelr'
			}
		},
		calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["cure wounds", "healing word", "lesser restoration", "prayer of healing", "aura of vitality", "mass healing word", "aura of purity", "aura of life", "greater restoration"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Cure Wounds, Healing Word, Lesser Restoration, Prayer of Healing, Aura of Vitality, Mass Healing Word, Aura of Purity, Aura of Life, and Greater Restoration."
		]
	},
	}
		
};
RaceList["dragonmark hospitality halfling"] = {
	regExpSearch : /^((?=.*mark)(?=.*hospitality)|(?=.*house)(?=.*ghallanda)).*$/i,
	name : "Halfling (dragonmark)",
	sortname : "Dragonmark, Hospitality (Halfling)",
	source : [["WGtE", 100], ["ERLW", 44]],
	plural : "Halflings (dragonmark)",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Halfling"],
	savetxt : { adv_vs : ["frightened"] },
	age : " reach adulthood at age 20 and live around 150 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " average about 90 cm tall (80 + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Halfling, Dragonmark of Hospitality (+2 Dexterity, +1 Charisma)\nLucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll.\nHalfling Nimbleness: I can move through the space of Medium and larger creatures.\nEver Hospitable: I can add 1d4 to my Charisma (Persuasion) checks and ability checks involving brewer's supplies or cook's utensils.\nInnkeeper's Magic: I know the Prestidigitation cantrip. I can also cast the Purify Food and Drink and Unseen Servant spells with this trait. Once I cast either spell with this trait, I can't cast that spell with it again until I finish a long rest. Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Innkeeper's Magic",
		spells : ["prestidigitation"],
		selection : ["prestidigitation"],
		firstCol : 'atwill',
	},
	features : {
		"innkeeper's magic (purify food and drink)" : {
			name : "Innkeeper's Magic (Purify Food and Drink)",
			limfeaname : "Purify Food and Drink",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Innkeeper's Magic",
				spells : ["purify food and drink"],
				selection : ["purify food and drink"],
				firstCol : 'oncelr'
			}
		},
		"innkeeper's magic (unseen servant)" : {
			name : "Innkeeper's Magic (Unseen Servant)",
			limfeaname : "Unseen Servant",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Innkeeper's Magic",
				spells : ["unseen servant"],
				selection : ["unseen servant"],
				firstCol : 'oncelr'
			}
		},
		calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["goodberry", "sleep", "aid", "calm emotions", "create food and water", "leomund's tiny hut", "aura of purity", "mordenkainen's private sanctum", "hallow"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Goodberry, Sleep, Aid, Calm Emotions, Create Food and Water, Leomund's Tiny Hut, Aura of Purity, Mordenkainen's Private Sanctum, and Hallow."
		]
	},
	}
};
RaceList["dragonmark making human"] = {
	regExpSearch : /^((?=.*mark)(?=.*making)|(?=.*house)(?=.*cannith)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Making (Human)",
	source : [["WGtE", 101], ["ERLW", 45]],
	plural : "Humans (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	toolProfs : [["Artisan's tools", 1]],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Intelligence, and +1 to any one other ability score of my choice",
	scores : [0, 0, 0, 2, 0, 0],
	trait : "Human, Dragonmark of Making (+2 Int" + (typePF ? ", +1 to one other ability" : "elligence, +1 to any one other ability score") + ")\nArtisan's Intuition: I can add 1d4 to my Arcana checks and ability checks with artisan's tools.\nSpellsmith: I know the Mending cantrip. I can also cast the Magic Weapon spell with this trait. When I do so, the spell lasts for 1 hour and doesn't require concentration. Once I cast the spell with this trait, I can't do so again until I finish a long rest. Intelligence is my spellcasting ability for these spells. Maker's Gift: I have proficiency with one type of artisan's tools of my choice.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Spellsmith",
		spells : ["mending"],
		selection : ["mending"],
		firstCol : 'atwill',
	},
	features : {
		"Spellsmith" : {
			name : "Spellsmith",
			limfeaname : "Magic Weapon",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Spellsmith",
				spells : ["magic weapon"],
				selection : ["magic weapon"],
				firstCol : 'oncelr'
			}
		},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["identify", "tenser's floating disk", "continual flame", "magic weapon", "conjure barrage", "elemental weapon", "fabricate", "stone shape", "creation"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Identify, Tenser's Floating Disk, Continual Flame, Magic Weapon, Conjure Barrage, Elemental Weapon, Fabricate, Stone Shape, and Creation."
		]
	}
	},
};
RaceList["dragonmark passage human"] = {
	regExpSearch : /^((?=.*mark)(?=.*passage)|(?=.*house)(?=.*orien)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Passage (Human)",
	source : [["WGtE", 102], ["ERLW", 46]],
	plural : "Humans (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", 1],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Dexterity and +1 to another ability score of my choice",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Human, Dragonmark of Passage (+2 Dexterity and +1 to another ability score)\n   Intuitive Motion: I can add my 1d4 to my Dexterity (Acrobatics) checks and any ability checks involving operating or maintaining a land vehicle.\n   Magical Passage: I can cast the Misty Step spell once with this trait, and I regain the ability to cast it when I finish a long rest. Dexterity is my spellcasting ability for this spell.",
	spellcastingAbility : 2,
	features : {
		"Magical Passage" : {
			name : "Magical Passage",
			limfeaname : "Misty Step",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Magical Passage",
				spells : ["misty step"],
				selection : ["misty step"],
				firstCol : 'oncelr'
			}
		},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["expeditious retreat", "jump", "misty step", "pass without trace", "blink", "phantom steed", "dimension door", "freedom of movement", "teleportation circle"]);
				},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Expeditious Retreat, Jump, Misty Step, Pass without Trace, Blink, Phantom Steed, Dimension Door, Freedom of Movement, and Teleportation Circle."
			]
		}
	},
};
RaceList["dragonmark scribing gnome"] = {
	regExpSearch : /^((?=.*mark)(?=.*scribing)|(?=.*house)(?=.*sivis)).*$/i,
	name : "Gnome (dragonmark)",
	sortname : "Dragonmark, Scribing (Gnome)",
	source : [["WGtE", 103], ["ERLW", 47]],
	plural : "Gnomes (dragonmark)",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish"],
	vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " start adult life around age 40 and can live 350 to almost 500 years",
	height : " are 3 to 4 feet tall (2'11\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " are 90 to 120 cm tall (2'11\" + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 0, 0, 2, 0, 1],
	trait : "Gnome, Dragonmark of Scribing (+2 Intelligence, +1 Charisma)\n   Gifted Scribe: I can add 1d4 to my Intelligence (History) checks and ability checks involving calligrapher's supplies.\n   Scribe's Insight: I know the Message cantrip. I can also cast Comprehend Languages once with this trait, and I regain the ability to cast it when I finish a short or long rest. Starting at 3rd level, I can cast the Magic Mouth spell with this trait, and I regain the ability to cast it when I finish a long rest. Intelligence is my spellcasting ability for these spells.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Scribe's Insight",
		spells : ["message"],
		selection : ["message"],
		firstCol : 'atwill'
	},
	features : {
		"scribe's insight (comprehend languages)" : {
			name : "Scribe's Insight (Comprehend Languages)",
			limfeaname : "Comprehend Languages",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Scribe's Insight",
				spells : ["comprehend languages"],
				selection : ["comprehend languages"],
				firstCol : 'oncesr'
			}
		},
	"scribe's insight (magic mouth)" : {
			name : "Scribe's Insight (Magic Mouth)",
			limfeaname : "Magic Mouth",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Scribe's Insight",
				spells : ["magic mouth"],
				selection : ["magic mouth"],
				firstCol : 'oncelr'
			}
		},
		calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["comprehend languages", "illusory script", "animal messenger", "silence", "sending", "tongues", "arcane eye", "confusion", "dream"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Comprehend Languages, Illusory Script, Animal Messenger, Silence, Sending, Tongues, Arcane Eye, Confusion, and Dreams."
		]
	},
	}
};
RaceList["dragonmark sentinel human"] = {
	regExpSearch : /^((?=.*mark)(?=.*sentinel)|(?=.*house)(?=.*deneith)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Sentinel (Human)",
	source : [["WGtE", 104], ["ERLW", 48]],
	plural : "Humans (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Constitution, and +1 Wisdom",
	scores : [0, 0, 2, 0, 1, 0],
	trait : "Human, Dragonmark of Sentinel (+2 Con" + (typePF ? ", +1 Wis" : "stitution, +1 Wisdom") + ")\n   Sentinel's Intuition: I can add 1d4 to my Wisdom (Insight) and Wisdom (Perception) checks.\n   Guardian's Shield:  I can cast the Shield spell once with this trait, and I regain the ability to cast it after I finish a long rest. Wisdom is my spellcasting ability for this spell.\n   Vigilant Guardian: When a creature I can see within 5 feet of me is hit by an attack roll, I can use my reaction to swap places with that creature, and I am hit by the attack instead. Once I use this trait, I can't do so again until I finish a long rest.",
	action : ['reaction', 'Vigilant Guardian'],
	features : {
		"guardian's shield" : {
			name : "Guardian's Shield",
			limfeaname : "Shield",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Guardian's Shield",
				spells : ["shield"],
				selection : ["shield"],
				firstCol : 'oncelr'
			}
		},
		calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["compelled duel", "shield of faith", "warding bond", "zone of truth", "counterspell", "protection from energy", "death ward", "guardian of faith", "bigby's hand"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Compelled Duel, Shield of Faith, Warding Bond, Zone of Truth, Counterspell, Protection from Energy, Death Ward, Guardian of Faith, and Bigby's Hand."
		]
	},
	}
};
RaceList["dragonmark shadow elf"] = {
	regExpSearch : /^((?=.*mark)(?=.*shadow)|(?=.*house)(?=.*(phiarlan|thuranni))).*$/i,
	name : "Elf (dragonmark)",
	sortname : "Dragonmark, Shadow (Elf)",
	source : [["WGtE", 105], ["ERLW", 49]],
	plural : "Elves (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	skillstxt : "Perception and proficiency with either Performance or one musical instrument",
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Elf, Dragonmark of Shadow (+2 Dexterity, +1 Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nCunning Intuition: I can add 1d4 to Performance and Stealth checks.\nShape Shadows: I know the Minor Illusion cantrip. Starting at 3rd level, I can cast the Invisibility spell once with this trait, and I regain the ability to cast it when I finish a long rest. Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Shape Shadows",
		spells : ["minor illusion"],
		selection : ["minor illusion"],
		firstCol : 'atwill'
	},
	features : {
		"shape shadows" : {
			name : "Shape Shadows",
			limfeaname : "Invisibility",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Shape Shadows",
				spells : ["invisibility"],
				selection : ["invisibility"],
				firstCol : 'oncelr'
			}
		},
		calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["disguise self", "silent image", "darkness", "pass without trace", "clairvoyance", "major image", "greater invisibility", "hallucinatory terrain", "mislead"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Disguise Self, Silent Image, Darkness, Pass without Trace, Clairvoyance, Major Image, Greater Invisibility, Haullucinatory Terrain, and Mislead."
		]
	},
	}
};
RaceList["dragonmark storm half-elf"] = {
	regExpSearch : /^((?=.*mark)(?=.*storm)|(?=.*house)(?=.*lyrandar)).*$/i,
	name : "Half-elf (dragonmark)",
	sortname : "Dragonmark, Storm (Half-Elf)",
	source : [["WGtE", 106], ["ERLW", 50]],
	plural : "Half-elves (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish", 1],
	vision : [["Darkvision", 60]],
	dmgres : ["Lightning"],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	age : " reach adulthood around age 20 and often live over 180 years",
	height : " range from 5 to 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Charisma, and +1 Dexterity",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Half-Elf, Dragonmark of Storm (+2 Charisma, and +1 Dexterity)\n" + (typePF ? "\n" : "   ") + "Windwright's Intuition: I can add 1d4 to my Dexterity (Acrobatics) checks and any ability checks involving navigator's tools.\n" + (typePF ? "\n" : "   ") + "Headwinds: I know the Gust cantrip. Once I reach 3rd level, I can cast Gust of Wind once per long rest. Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6, // Not mentioned in WGtE, but essential!
	spellcastingBonus : {
		name : "Headwinds (level 1)",
		spells : ["gust"],
		selection : ["gust"],
		firstCol : 'atwill'
	},
	features : {
		"gust of wind" : {
			name : "Headwinds (level 3)",
			limfeaname : "Gust of Wind",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Headwinds (level 3)",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				firstCol : 'oncelr'
			}
		},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["feather fall", "fog cloud", "gust of wind", "levitate", "sleet storm", "wind wall", "conjure minor elementals", "control water", "conjure elemental"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Feather Fall, Fog Cloud, Gust of Wind, Levitate, Sleet Storm, Wind Wall, Conjure Minor Elementals, Control Water, and Conjure Elemental."
		]
	},
	}
};
RaceList["dragonmark warding dwarf"] = {
	regExpSearch : /^((?=.*mark)(?=.*warding)|(?=.*house)(?=.*kundarak)).*$/i,
	name : "Dwarf (dragonmark)",
	sortname : "Dragonmark, Warding (Dwarf)",
	source : [["WGtE", 108], ["ERLW", 51]],
	plural : "Dwarves (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	weaponProfs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (4' + 2d4\")",
	weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
	weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
	scores : [0, 0, 2, 1, 0, 0],
	trait : "Dwarf, Dragonmark of Warding (+2 Con" + (typePF ? ", +1 Int" : "stitution, +1 Intelligence") + ")\n   Stonecunning: When I make an Intelligence (History) check related to the origin of stonework, I am considered having expertise in the History skill.\n   Warder's Intuition: I can add 1d4 to my Intelligence (Investigation) checks, and ability checks with thieves' tools.\n   Wards and Seals: I can cast the Alarm and Mage Armor spells with this trait. Starting at 3rd level, I can also cast the Arcane Lock spell with it. Once I cast any of these spells with this trait, I can't cast that spell with it again until I finish a long rest. Intelligence is my spellcasting ability for these spells, and I don't need material components for them when I cast them with this trait.",
	spellcastingAbility : 4,
	features : {
		"wards and seals (alarm)" : {
			name : "Wards and Seals (Alarm)",
			limfeaname : "Alarm",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Wards and Seals",
				spells : ["alarm"],
				selection : ["alarm"],
				firstCol : 'oncelr'
			}
		},
		"wards and seals (mage armor)" : {
			name : "Wards and Seals (Mage Armor)",
			limfeaname : "Mage Armor",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Wards and Seals",
				spells : ["mage armor"],
				selection : ["mage armor"],
				firstCol : 'oncelr'
			}
		},
		"wards and seals (arcane lock)" : {
			name : "Wards and Seals (Arcane Lock)",
			limfeaname : "Arcane Lock",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Wards and Seals",
				spells : ["arcane lock"],
				selection : ["arcane lock"],
				firstCol : 'oncelr'
			}
		},
		calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["alarm", "armor of agathys", "arcane lock", "knock", "glyph of warding", "magical circle", "leomund's secret chest", "mordenkainen's faithful hound", "antilife shell"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Alarm, Armor of Agathys, Arcane Lock, Knock, Glyph of Warding, Magical Circle, Leomund's Secret Chest, Mordenkainen's Faithful Hound, and Antilife Shell."
		]
	},
	}
};

// Gust cantrip reprint
if (!SpellsList["gust"]) {
	SpellsList["gust"] = {
		name : "Gust",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["WGtE", 107], ["X", 157], ["E", 19], ["UA:D", 6], ["ERLW", 50]],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Str",
		description : "Med. or smaller crea save or push 5 ft; or push unattended 5 lb obj 10 ft; or harmless sensory effect",
		descriptionFull : "You seize the air and compel it to create one of the following effects at a point you can see within range." + "\n " + "\u2022 One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you." + "\n " + "\u2022 You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage." + "\n " + "\u2022 You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze."
	};
}



// Aberrant Dragonmark feat
FeatsList["aberrant dragonmark"] = {
	name : "Aberrant Dragonmark",
	source : [["WGtE", 112], ["ERLW", 52]],
	prerequisite : "Not having a dragonmark",
	prereqeval : function(v) { return !(/dragonmark/i).test(CurrentRace.known); },
	descriptionFull : "You have manifested an aberrant dragonmark. Determine its appearance and the flaw associated with it (see the table below for examples). You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 You learn a cantrip of your choice from the sorcerer spell list. In addition, choose a 1st-level spell from the sorcerer spell list. You learn that spell and can cast it through your mark. Once you cast it, you must finish a short or long rest before you can cast it again through the mark. Constitution is your spellcasting ability for these spells.\n \u2022 When you cast the 1st-level spell through your mark, you can expend one of your Hit Dice and roll it. If you roll an even number, you gain a number of temporary hit points equal to the number rolled. If you roll an odd number, one random creature within 30 feet of you (not including you) takes force damage equal to the number rolled. If no other creatures are in range, you take the damage.\n\n" + toUni("1d8") + "\t" + toUni("Aberrant Mark Flaw") + "\n1\tYour mark is a source of constant physical pain.\n2\tYour mark whispers to you. Its meaning can be unclear.\n3\tWhen you're stressed, the mark hisses audibly.\n4\tThe skin around the mark is burned, scaly, or withered.\n5\tAnimals are uneasy around you.\n6\tYou have a mood swing any time you use your mark.\n7\tYour looks change slightly whenever you use the mark.\n8\tYou have horrific nightmares after you use your mark.",
	description : "I learn a sorcerer cantrip and a 1st-level sorcerer spell, using Con as my spellcasting ability. I can cast the spell once per long rest without a spell slot. I can use a Hit Die when casting the spell, causing a random effect. [+1 Con]",
	scores : [0, 0, 1, 0, 0, 0],
	spellcastingAbility : 3,
	spellcastingBonus : [{
		name : "Sorcerer cantrip",
		'class' : 'sorcerer',
		level : [0, 0],
		firstCol : 'atwill'
	}, {
		name : "Sorcerer 1st-level spell",
		'class' : 'sorcerer',
		level : [1, 1],
		firstCol : 'oncelr'
	}]
};

// Magic Items
MagicItemsList["arcane propulsion arm"] = {
	name : "Arcane Propulsion Arm",
	source : ["ERLW", 276],
	type : "wondrous item",
	rarity : "very rare",
	description : "As an armless person, I can attach this prosthetic to my wrist, elbow, or shoulder by attuning to it. While attached, it can't be disarmed or removed against my will. I can spend one action to end the attunement and remove the prosthetic. I can attack with it, dealing 1d8 force damage, and it can be thrown.",
	descriptionFull : "This prosthetic appendage was developed by artificers of House Cannith. To attune to this item, you must attach it to your arm at the wrist, elbow, or shoulder, at which point the prosthetic magically forms a copy of the appendage it's replacing.\n	While attached, the prosthetic provides these benefits:\n	The prosthetic is a fully capable part of your body.\n	You can take an action to remove the prosthetic, and it removes itself if your attunement to it ends. It can't be removed against your will.\n	The prosthetic is a magic melee weapon with which you're proficient. It deals 1d8 force damage on a hit and has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When thrown, the prosthetic detaches and flies at the target of the attack, then immediately returns to you and reattaches.",
	attunement : true,
	prerequisite : "Requires Attunement by a creature missing a hand or an arm",
	allowDuplicates : true
};
MagicItemsList["armblade"] = {
	name : "Armblade",
	source : [["WGtE", 120], ["ERLW", 276]],
	type : "weapon (any one-handed melee weapon)",
	rarity : "common",
	description : "As a warforged, I can integrate this weapon in my forearm by attuning to it. While attached, it can't be disarmed or removed against my will, but I can't use that hand for other actions once I extend it as a bonus action. I can also retract it as a bonus action",
	descriptionFull : "An armblade is a magic weapon that attaches to your arm, becoming inseparable from you as long as you're attuned to it. To attune to this item, you must hold it against your forearm for the entire attunement period. As a bonus action, you can retract the armblade into your forearm or extend it from there. While it is extended, you can use the weapon as if you were holding it, and you can't use that hand for other purposes.",
	attunement : true,
	prerequisite : "Requires attunement by a warforged",
	prereqeval : function (v) { return (/warforged/i).test(CurrentRace.known); },
	allowDuplicates : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return (!inObj.description || (/two.{0,3}handed/i).test(inObj.description)) || (!inObj.range || !(/melee/i).test(inObj.range));
		}
	}
};
MagicItemsList["cleansing stone"] = {
	name : "Cleansing Stone",
	source : [["WGtE", 115], ["ERLW", 276]],
	type : "wondrous item",
	rarity : "common",
	description : "This stone sphere is 1 ft in diameter and engraved with mystic sigils. As an action while touching it, I can activate it to remove dirt and grime from my garments and my person.",
	descriptionFull : "A cleansing stone is a stone sphere one foot in diameter, engraved with mystic sigils. When touching the stone, you can use an action to activate it and remove dirt and grime from your garments and your person. Such stones are often embedded into pedestals in public squares in Aundair or found in high-end Ghallanda inns.",
	action : [["action", ""]]
};
var docentFullDescription = [
	"A docent is a small metal sphere, approximately 2 inches across, studded with dragonshards. To attune to a docent, you must embed the item somewhere on your body, such as your chest or your eye socket.",
	">>Sentience<<. A docent is a sentient item of any alignment with an Intelligence of 16, a Wisdom of 14, and a Charisma of 14. It perceives the world through your senses. It communicates telepathically with you and can speak, read, and understand any language it knows (see Random Properties below).",
	">>Life Support<<. Whenever you end your turn with 0 hit points, the docent can make a Wisdom (Medicine) check with a +6 bonus. If this check succeeds, the docent stabilizes you.",
	">>Random Properties<<. A docent has the following properties:",
	">>Languages<<. The docent knows Common, Giant, and 1d4 additional languages chosen by the DM. If a docent knows fewer than six languages, it can learn a new language after it hears or reads the language through your senses.",
	">>Skills<<. The docent has a +7 bonus to one of the following skills (roll a d4): (1) Arcana, (2) History, (3) Investigation, or (4) Nature.",
	">>Spells<<. The docent knows one of the following spells and can cast it at will, requiring no components (roll a d6): (1–2) detect evil and good or (3–6) detect magic. The docent decides when to cast the spell.",
	">>Personality<<. A docent is designed to advise and assist the warforged it's attached to. One of the simple functions of a docent is to serve as a translator. The docent's properties are under its control, and if you have a bad relationship with your docent, it might refuse to assist you."
];
MagicItemsList["docent"] = {
	name : "Docent",
	source : [["WGtE", 121], ["ERLW", 276]],
	type : "wondrous item",
	rarity : "rare",
	description : "I can embed this sentient small metal sphere studded with dragonshards into my chest. I can communicate telepathically with it. It can serve me as an advisor and a translator, as it knows up to 6 languages. It also knows spells and/or skills. See Notes page.",
	descriptionFull : docentFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : true,
	prerequisite : "Requires attunement by a warforged",
	prereqeval : function (v) { return (/warforged/i).test(CurrentRace.known); },
	action : [["bonus action", ""]],
	toNotesPage : [{
		name : "Features",
		popupName : "Features of Docent",
		note : desc(docentFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(of|on|assist) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}]
};
MagicItemsList["everbright lantern"] = {
	name : "Everbright Lantern",
	source : [["WGtE", 115], ["ERLW", 277]],
	type : "wondrous item",
	rarity : "common",
	description : "This bullseye lantern is powered by a dragonshard imbued with the effect of a Continual Flame spell. The light never goes out, but it can be shuttered off. It casts bright light in a 60-ft cone and dim light for an additional 60 ft.",
	descriptionFull : "This bullseye lantern contains an Eberron dragonshard that sheds light comparable to that produced by a continual flame spell. An everbright lantern sheds light in a 120-foot cone; the closest 60 feet is bright light, and the farthest 60 feet is dim light."
};
MagicItemsList["feather token"] = {
	name : "Feather Token",
	source : [["WGtE", 115], ["ERLW", 277]],
	type : "wondrous item",
	rarity : "common",
	description : "Once if you fall 20 feet while the token is in my possession, you fall 60 feet per round and take no damage. This small metal disk is inscribed with the image of a feather and only holds sufficient charge for a single use, after which it loses its power.",
	descriptionFull : "This small metal disk is inscribed with the image of a feather. When you fall at least 20 feet while the token is on your person, you descend 60 feet per round and take no damage from falling. The token's magic is expended after you land, whereupon the disk becomes nonmagical."
};
MagicItemsList["finder's goggles"] = {
	name : "Finder's Goggles",
	source : [["WGtE", 115], ["ERLW", 277]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "I can add 1d4 to my Wis (Insight) checks. When I examine an object, I can make a Wis (Insight) check to sense the aura of the last living creature to touch it (DC is 13 + days since last contact). On a success, I learn the creature's type and I can immediately cast Locate Creature to target it.",
	descriptionLong : "The lenses of these garish goggles are carved from Siberys dragonshards. It allows me to can add 1d4 to my Wisdom (Insight) checks. When I examine an object, I can use it to make a Wisdom (Insight) check to identify the aura of the last living creature to touch the object.The DC is 13 + the number of days since the last contact occurred. If the check is successful, I learn the type of the creature and I can immediately cast Locate Creature to target this creature.",
	descriptionFull : "The lenses of these garish goggles are carved from Siberys dragonshards. While wearing these lenses, you gain the following benefits:\n \u2022 When you make a Wisdom (Insight) check, you can roll a d4 and add the number rolled to the check.\n \u2022 As an action, you can use the goggles to examine an object to identify the aura of the last creature that touched it. Make a Wisdom (Insight) check against a DC of 13 + the number of days since the last contact occurred. On a success, you learn the creature's type and can immediately use the goggles to cast locate creature to find that creature. This property can't be used again until the next dawn.",
	attunement : true,
	prerequisite : "Requires attunement by someone with a Dragonmark of Finding",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*finding).*$/i).test(CurrentRace.known);
	}
};
MagicItemsList["common glamerweave"] = {
	name : "Glamerweave, Common",
	source : [["WGtE", 115], ["ERLW", 277]],
	type : "wondrous item",
	rarity : "common",
	description : "Glamerweave clothing is imbued with cosmetic illusions that have no impact on combat. These patterns are contained within the cloth.",
	descriptionFull : "Glamerweave is clothing imbued with harmless illusory magic. While wearing the common version of these clothes, you can use a bonus action to create a moving illusory pattern within the cloth."
};
MagicItemsList["uncommon glamerweave"] = {
	name : "Glamerweave, Uncommon",
	source : [["WGtE", 115], ["ERLW", 277]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "Glamerweave clothing is imbued with cosmetic illusions that have no impact on combat. These patterns have more dramatic effects. A gown could appear to be wreathed in flames, or a hat orbited by illusory butterflies.",
	descriptionFull : "Glamerweave is clothing imbued with harmless illusory magic. While wearing these clothes, you can use a bonus action to create a moving illusory pattern within the cloth. Alternatively, you can have the pattern rise from the cloth. For example, a glamerweave gown might be wreathed in harmless, illusory flames, while a glamerweave hat might have illusory butterflies fluttering around it. When you make a Charisma (Performance) or Charisma (Persuasion) check while wearing the glamerweave, you can roll a d4 and add the number rolled to the check. Once you use this property, it can't be used again until the next dawn." 
};
MagicItemsList["imbued wood"] = {
	name : "Imbued Wood",
	source : [["WGtE", 114], ["ERLW", 277]],
	type : "wondrous item",
	rarity : "common",
	description : "While holding a rod, wand, or staff made of imbued wood, spells I cast that deal the associated damage type add a +1 bonus to one of their damage rolls.",
	descriptionFull : "An imbued wood focus is a rod, staff, or wand cut from a tree infused with extraplanar energy. If you're a spellcaster, you can use this orb as a spellcasting focus. When you cast a damage-dealing spell using this item as your spellcasting focus, you gain a +1 bonus to one damage roll of the spell, provided the damage is of the type associated with the item's wood. The materials and their associated damage types are listed here.\n \u2022 Fernian ash: Fire damage.\n \u2022 Irian rosewood: Radiant damage.\n \u2022 Kythrian manchineel: Acid or poison damage.\n \u2022 Lamannian oak: Lightning or thunder damage.\n \u2022 Mabaran ebony: Necrotic damage.\n \u2022 Xorian wenge: Psychic damage.\n \u2022 Risian pine: Cold damage.\n \u2022 Shavarran birch: Force damage.",
	attunement : true,
	allowDuplicates : true,
	choices : ["Fernian Ash (fire)", "Irian Rosewood (radiant)", "Kythrian Manchineel (acid and poison)", "Lamannian Oak (lightning and thunder)", "Mabaran Ebony (necrotic)", "Xorian Wenge (psychic)", "Risian Pine (cold)", "Shavarran Birch (force)", "Xorian Wenge (psychic)"],
	"fernian ash (fire)" : {
		name : "Fernian Ash Arcane Focus",
		description : "While holding a rod, wand, or staff made of Fernian ash, spells I cast that deal fire damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire", 1, true, true);
			},
			"Cantrips and spells that deal fire damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"irian rosewood (radiant)" : {
		name : "Irian Rosewood Arcane Focus",
		description : "While holding a rod, wand, or staff made of Irian rosewood, spells I cast that deal radiant damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "radiant", 1, true, true);
			},
			"Cantrips and spells that deal radiant damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"kythrian manchineel (acid and poison)" : {
		name : "Kythrian Manchineel Arcane Focus",
		description : "While holding a rod, wand, or staff made of Kythrian manchineel, spells I cast that deal acid or poison damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "acid|poison", 1, true, true);
			},
			"Cantrips and spells that deal acid or poison damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"lamannian oak (lightning and thunder)" : {
		name : "Lamannian Oak Arcane Focus",
		description : "While holding a rod, wand, or staff made of Lamannian oak, spells I cast that deal lightning or thunder damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "lightning|thunder", 1, true, true);
			},
			"Cantrips and spells that deal lightning or thunder damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"mabaran ebony (necrotic)" : {
		name : "Mabaran Ebony Arcane Focus",
		description : "While holding a rod, wand, or staff made of Mabaran ebony, spells I cast that deal necrotic damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "necrotic", 1, true, true);
			},
			"Cantrips and spells that deal necrotic damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"risian pine (cold)" : {
		name : "Risian Pine Arcane Focus",
		description : "While holding a rod, wand, or staff made of Risian pine, spells I cast that deal cold damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "cold", 1, true, true);
			},
			"Cantrips and spells that deal cold damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"shavarran birch (force)" : {
		name : "Shavarran Birch Arcane Focus",
		description : "While holding a rod, wand, or staff made of Shavarran birch, spells I cast that deal force damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "force", 1, true, true);
			},
			"Cantrips and spells that deal force damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"xorian wenge (psychic)" : {
		name : "Xorian Wenge Arcane Focus",
		description : "While holding a rod, wand, or staff made of Xorian wenge, spells I cast that deal psychic damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "psychic", 1, true, true);
			},
			"Cantrips and spells that deal psychic damage get a +1 bonus added to one of their damage rolls."
		]
	}
};
MagicItemsList["keycharm"] = {
	name : "Keycharm",
	source : [["WGtE", 115], ["ERLW", 277]],
	type : "wondrous item",
	rarity : "common",
	description : "When I cast Alarm, Arcane Lock, or Glyph of Warding, I can tie it to the keycharm. Whoever holds the keycharm is considered to be the owner of this effect. For example, they receive the notification from Alarm, can safely avoid a Glyph of Warding, or can circumvent the Arcane Lock.",
	descriptionFull : "This small stylized key plays a vital role in the work of House Kundarak. If you cast the alarm, arcane lock, or glyph of warding spell, you can tie the effect to the keycharm so that whoever holds it receives the notification from the alarm spell, bypasses the lock of the arcane lock spell, or avoids triggering the glyph placed by the glyph of warding spell. In addition, the holder (who needn't be attuned to the item) can take an action to end any one spell tied to it, provided the holder knows the command word you set for ending the tied spells. The keycharm can have up to three tied spells at one time.",
	prerequisite : "Can only be used by someone with a Dragonmark of Warding",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*warding).*$/i).test(CurrentRace.known);
	}
};
MagicItemsList["orb of shielding"] = {
	name : "Orb of Shielding",
	source : [["WGtE", 114], ["ERLW", 278]],
	type : "wondrous item",
	rarity : "common",
	description : "An orb of shielding is made from crystal or stone aligned to one of the planes. While I am holding the orb and take damage of the type associated with the material the orb is made from, I can use my reaction to reduce the damage by 1d4.",
	descriptionFull : "An orb of shielding is a polished, spherical chunk of crystal or stone aligned to one of the planes of existence. If you're a spellcaster, you can use this orb as a spellcasting focus. If you're holding the orb when you take damage of the type associated with the orb's material, you can use your reaction to reduce the damage by ld4 (to a minimum of 0).  The materials and their associated damage types are listed below.\n" +
	"\n \u2022 Fernian basalt: Fire damage" +
	"\n \u2022 Irian quartz: Radiant damage" +
	"\n \u2022 Kythrian skarn: Acid or poison damage" +
	"\n \u2022 Lamannian flint: Lightning or thunder damage" +
	"\n \u2022 Mabaran obsidian: Necrotic damage" +
	"\n \u2022 Xorian marble: Psychic damage" +
	"\n \u2022 Risian shale: Cold damage" +
	"\n \u2022 Shavaran chert: Force damage",
	attunement : true,
	weight : 3,
	action : [["reaction", ""]],
	choices : ["Fernian Basalt (fire)", "Irian Quartz (radiant)", "Kythrian Skarn (acid or poison)", "Lamannian Flint (lightning or thunder)", "Mabaran Obsidian (necrotic)", "Risian Shale (cold)", "Shavaran Chert (force)", "Xorian Marble (psychic)"],
	"fernian basalt (fire)" : {
		name : "Orb of Shielding [Fernian Basalt]",
		description : "This stone orb is made from fernian basalt. As a reaction while I am holding the orb and take fire damage, I can reduce the damage by 1d4."
	},
	"irian quartz (radiant)" : {
		name : "Orb of Shielding [Irian Quartz]",
		description : "This crystal orb is made from irian quartz. As a reaction while I am holding the orb and take radiant damage, I can reduce the damage by 1d4."
	},
	"kythrian skarn (acid or poison)" : {
		name : "Orb of Shielding [Kythrian Skarn]",
		description : "This stone orb is made from kythrian skarn. As a reaction while I am holding the orb and take acid or poison damage, I can reduce the damage by 1d4."
	},
	"lamannian flint (lightning or thunder)" : {
		name : "Orb of Shielding [Lamannian Flint]",
		description : "This stone orb is made from lamannian flint. As a reaction while I am holding the orb and take lightning or thunder damage, I can reduce the damage by 1d4."
	},
	"mabaran obsidian (necrotic)" : {
		name : "Orb of Shielding [Mabaran Obsidian]",
		description : "This crystal orb is made from mabaran obsidian. As a reaction while I am holding the orb and take necrotic damage, I can reduce the damage by 1d4."
	},
	"risian shale (cold)" : {
		name : "Orb of Shielding [Risian Shale]",
		description : "This stone orb is made from risian shale. As a reaction while I am holding the orb and take cold damage, I can reduce the damage by 1d4."
	},
	"shavaran chert (force)" : {
		name : "Orb of Shielding [Shavaran Chert]",
		description : "This stone orb is made from shavaran chert. As a reaction while I am holding the orb and take force damage, I can reduce the damage by 1d4."
	},
	"xorian marble (psychic)" : {
		name : "Orb of Shielding [Xorian Marble]",
		description : "This stone orb is made from xorian marble. As a reaction while I am holding the orb and take psychic damage, I can reduce the damage by 1d4."
	}
};
MagicItemsList["prosthetic limb"] = {
	name : "Prosthetic Limb",
	source : ["ERLW", 278],
	type : "wondrous item",
	rarity : "common",
	description : "As an limbless person, I can attach this prosthetic to the stump by attuning to it. While attached, it can't be disarmed or removed against my will. I can spend one action to remove and reattach the prosthetic.",
	descriptionFull : "This artificial limb replaces a hand, arm, foot, leg, or similar appendage that was lost or removed. While the prosthetic is attached and attuned to you, it functions identically to the body part it is replacing. You can detach or reattach it as an action, and it can't be removed by anyone else. If you have multiple prosthetic limbs, they count as a single magic item with regard to the number of magic items you can attune to.",
	attunement : true,
	prerequisite : "Requires Attunement by a creature missing some or all of a limb",
	
};
MagicItemsList["scribe's pen"] = {
	name : "Scribe's Pen",
	source : [["WGtE", 115], ["ERLW", 278]],
	type : "wondrous item",
	rarity : "common",
	description : "I can use this quill to write on any surface. This can be visible or invisible to any creature without the Mark of Scribing. As an action, I or others with the Mark of Scribing can make it (in)visible. Marks on living creatures fade within a week.",
	descriptionFull : "You can use this pen to write on any surface. You decide whether the writing is visible or invisible, but the writing is always visible to a person with the Mark of Scribing. Any creature with the Mark of Scribing can use an action to touch the invisible writing, making it visible to all. If you use the pen to write on a creature that isn't a construct, the writing fades after 7 days.",
	prerequisite : "Can only be used by someone with a Dragonmark of Scribing",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*scribing).*$/i).test(CurrentRace.known);
	}
};
MagicItemsList["shiftweave"] = {
	name : "Shiftweave",
	source : [["WGtE", 115], ["ERLW", 279]],
	type : "wondrous item",
	rarity : "common",
	description : "Up to five different outfits are embedded into these clothes that have transmutation magic woven into their fabric. As a bonus action, I can speak a command word to transform the outfit into one of the other designs contained within.",
	descriptionFull : "When a suit of shiftweave is created, up to five different outfits can be embedded into the cloth. While wearing the clothing, you can speak its command word as a bonus action to transform your outfit into your choice of one of the other designs contained within it. Regardless of its appearance, the outfit can't be anything but clothing. Although it can duplicate the look of other magical clothing, it doesn't gain their magical properties.",
	action : [["bonus action", ""]]
};
MagicItemsList["speaking stone"] = {
	name : "Speaking Stone",
	source : ["ERLW", 279],
	type : "wondrous item",
	rarity : "very rare",
	description : "Magitech telegraph/radio tower.",
	descriptionFull : "The key to long-distance, virtually instantaneous communication across Khorvaire is House Sivis's network of message stations. Each station contains at least one speaking stone, which is carved from a Siberys dragonshard and inscribed with arcane symbols that uniquely identify it. If you're a gnome with the Mark of Scribing, you can touch the stone and use an action to cast the sending spell from it. The target is any other speaking stone whose location or unique sequence of symbols you know. A creature within 5 feet of the stone hears the message as if they were the target. In a Sivis message station, a gnome is always on duty by the speaking stone, listening for messages that might come in and transcribing them for delivery to their intended recipients.",
};
MagicItemsList["spellshard"] = {
	name : "Spellshard",
	source : [["WGtE", 115], ["ERLW", 279]],
	type : "wondrous item",
	description : "This dragonshard is imbued with a text. By concentrating while holding it, I can see its pages in my mind's eye and it will draw me to the right section if I think of a topic. I can add content to it with a simple ritual and can use it as a wizard's spellbook, costing 1 gp per \"page\" I add to the shard.",
	descriptionFull : "This polished Eberron dragonshard fits in the hand and stores information similar to a book. The shard can hold the equivalent of one book that's no more than 320 pages long. A shard can be created blank or already filled with information. When the shard is created, the creator can set a passphrase that must be spoken to access the information stored within. While holding the shard, you can use an action to open your mind to the shard, seeing its content in your mind. On subsequent rounds, reading the text or scribing new text on blank pages in the shard requires concentration (as if concentrating on a spell) and takes the same amount of time it takes you to read and write normally. Thinking of a particular phrase or topic draws you to the first section in the shard that addresses it. A wizard can use a spellshard as a spellbook, with the usual cost in gold and time to scribe a spell into the shard.",
	allowDuplicates : true,
};
MagicItemsList["ventilating lung"] = {
	name : "Ventilating Lung",
	source : ["ERLW", 279],
	type : "wondrous item",
	description : "Artificial magic lungs.",
	descriptionFull : "These metallic nodules were created in response to the poisonous gases used on the battlefields of the Last War. When you attune to these lungs, they replace the lungs in your chest, which disappear. The lungs allow you to breathe normally, even in an antimagic field, and their breathing function can't be suppressed by magic. Outside an antimagic field or any other effect that suppresses magic, these lungs allow you to breathe normally in any environment (including a vacuum), and you have advantage on saving throws against harmful gases such as those created by a cloudkill spell, a stinking cloud spell, inhaled poisons, and gaseous breath weapons. As an action, you can use these lungs to exhale a gust of wind, as if you had cast the gust of wind spell (spell save DC 15) with no components. This property of the lungs can't be used again until the next dawn. If your attunement to the lungs ends, your original lungs reappear.",
	attunement: true,
};
MagicItemsList["wand sheath"] = {
	name : "Wand Sheath",
	source : [["WGtE", 115], ["ERLW", 279]],
	type : "wondrous item",
	rarity : "common",
	description : "As a warforged, I can integrate this sheath in my forearm by attuning to it. It can only be removed if I end the attunement. As an action, I can insert a wand in it. The wand doesn't count to the number of items I can attune to. As a bonus action, I can then retract/extend it while keeping my hand free.",
	descriptionLong : "As a warforged, I can integrate this sheath in my forearm by attuning to it. It can only be removed if I spend a minute to end the attunement. As an action, I can insert a wand in it. I still need to attune to this wand if it requires me to do so, but the wand wand then doesn't count towards the number of items I can attune to. When I take the wand out of the sheath, I lose attunement with it. As a bonus action, I can retract or extend a wand in the sheath. While retracted, the wand can't be damaged. While extended, I can use the wand as if holding it, but my hand remains free for other actions.",
	descriptionFull : "A wand sheath clamps onto your arm and imparts the following benefits:\n \u2022 The wand sheath can't be removed from you while you're attuned to it.\n \u2022 You can insert a wand into the sheath as an action. The sheath can hold only one wand at a time.\n \u2022 You can retract or extend a wand from the sheath as a bonus action. While the wand is extended, you can use it as if you were holding it, but your hand remains free.\n If a sheathed wand requires attunement, you must attune to the wand before you can use it. However, the wand sheath and the attached wand count as a single magic item with regard to the number of magic items you can attune to. If you remove the wand from the sheath, your attunement to the wand ends.",
	attunement : true,
	prerequisite : "Requires attunement by a warforged",
	prereqeval : function (v) {
		return (/warforged/i).test(CurrentRace.known);
	},
	action : [["action", " (insert)"], ["bonus action", " (extend/retract)"]]
};
MagicItemsList["wheel of wind and water"] = {
	name : "Wheel of Wind and Water",
	source : [["WGtE", 115],["ERLW", 280]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "I can telepathically control the elemental bound into the elemental galleon or airship that has this wheel mounted at its helm. If a wheel of wind and water is mounted on a mundane sailing ship, I can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour.",
	descriptionFull : "When mounted at the helm of an elemental galleon or airship, this wheel allows a creature that possesses the Mark of Storm to telepathically control the elemental bound inside the vessel.\n   If a wheel of wind and water is mounted on a mundane sailing ship, a creature with the Mark of Storm who is using the wheel can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour.",
	prerequisite : "Can only be used by someone with a Dragonmark of Storm",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*storm).*$/i).test(CurrentRace.known);
	}
};
// Adds a new class, the Artificer, with 3 subclasses
ClassList['artificer'] = {
	regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
	name : "Artificer",
	source : ["ERLW", 54],
	primaryAbility : "Intelligence",
	abilitySave : 4,
	prereqs : "Intelligence 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skillstxt : {
		primary : "Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand"
	},
	toolProfs : {
		primary : [["Thieves' tools", "Dex"], "Tinker's tools", ["Any artisan's tool", 1]],
		secondary : [["Thieves' tools", "Dex"], "Tinker's tools"]
	},
	armorProfs : {
		primary : [true, true, false, true],
		secondary : [true, true, false, true]
	},
	weaponProfs : {
		primary : [true, false,]
	},
	equipment : "Artificer starting equipment:" +
		"\n \u2022 any two simple weapons;" +
		"\n \u2022 A light crossbow and 20 bolts;" +
		"\n \u2022 Studded leather armor -or- scale mail;" +
		"\n \u2022 Thieves' tools and a dungeoneer's pack;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Artificer Specialist", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 2,
	spellcastingFactorRoundupMulti : true, 
	spellcastingTable : [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(levels.map(function (n) {
		return defaultSpellTable[Math.ceil(n / 2)];
	})),
	spellcastingKnown : {
		cantrips : [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
		spells : "list",
		prepared : true
	},
	features : {
		"magical tinkering" : {
			name : "Magical Tinkering",
			source : ["ERLW", 55],
			minlevel : 1,
			description : desc([
				"As an action, I use thieves' or an artisan's tools to give max 1 property to a tiny object:",
				" \u2022 Emit light (5-ft radius bright light, equal dim light), an odor, or a nonverbal sound",
				" \u2022 Static visual effect on one of its surfaces; picture, 25 words, shapes, or a mix of those",
				"If I instill a property in more objects than I can have active, the oldest loses its property"
			]),
			additional : "Intelligence modifier of active objects",
			action : [["action", " (add/remove)"]],
			extraname : "Artificer",
			"infuse item" : {
				name : "Infuse Item",
				source : ["ERLW", 57],
				description : desc([
					"When I finish a long rest, I can turn nonmagical objects into magic items using my infusions",
					"I can attune to it immediately; If I infuse too many items, the oldest loses its magic",
					"The infusion lasts until my death + my Int mod in days, but ends if I unlearn the infusion",
					"Each infusion can only be used in one item at a time and only in appropriate items",
					"I can use an infused item as a spellcasting focus"
				]),
				additional : levels.map(function (n) {
					return n < 2 ? "" : (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12) + " infusions known; max " + (n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : 18 ? 5 : 6) + " infused items";
				})
			},
			autoSelectExtrachoices : [{
				extrachoice : "infuse item",
				minlevel : 2
			}]
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["ERLW", 55],
			minlevel : 1,
			description : desc([
				"I can cast prepared artificer cantrips/spells, using Intelligence as my spellcasting ability",
				"To cast, I must use thieves' or artisan's tools I'm proficient with as a spellcasting focus",
				"I can cast my prepared artificer spells as rituals if they have the ritual tag",
				"Whenever I gain an artificer level, I can swap one artificer cantrip I know for another"
			]),
			additional : levels.map(function (n, idx) {
				return [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4][idx] + " cantrips known";
			}),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (!spellObj.psionic && spName == "artificer") {
							spellObj.compMaterial = (spellObj.compMaterial ? spellObj.compMaterial + "; " : "") + "My artificer spellcasting focus: thieves' tools, artisan's tools I'm proficient with, " + (classes.known["artificer"].subclass.indexOf("artillerist") !== -1 ? "rod, staff, wand, " : "") + "or an item infused by me.";
							if (GetFeatureChoice("classes", "artificer", "spellcasting", true).indexOf("don't change component column on spell sheet") != -1) {
								// do nothing if set to do so
							} else if (!spellObj.components) {
								spellObj.components = "M\u0192";
							} else if (spellObj.components.indexOf("M") == -1) {
								spellObj.components += ",M\u0192";
							} else if ((/M([^\u0192\u2020]|$)/).test(spellObj.components)) {
								spellObj.components = spellObj.components.replace("M", "M\u0192");
							}
							return true;
						}
					},
					"My artificer spells always require me to use a spellcasting focus: thieves' tools, artisan's tools I'm proficient with, or an item infused by me."
				]
			},
			extrachoices : ["Don't change component column on spell sheet"],
			extraname : "Artificer Spellcasting",
			"don't change component column on spell sheet" : {
				name : "[Meta] Don't alter spell sheets",
				source : ["ERLW", 55],
				description : "\n   The automation will not add M\u0192 to each artificer spell on the generated spell sheets"
			}
		},
		"infuse item" : {
			name : "Infuse Item",
			source : ["ERLW", 57],
			minlevel : 2,
			description : desc([
				"Use the \"Choose Feature\" button above to add Artificer Infusions to the third page",
				"Whenever I gain an artificer level, I can replace an infusion I know with another"
			]),
			additional : levels.map(function (n) {
				return n < 2 ? "" : (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12) + " infusions known; max " + (n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : 18 ? 5 : 6) + " infused items";
			}),
			extraname : "Artificer Infusion",
			extrachoices : ["Boots of the Winding Path (prereq: level 6 artificer)", "Enhanced Arcane Focus", "Enhanced Defense", "Enhanced Weapon", "Homunculus Servant (prereq: level 6 artificer)", "Radiant Weapon (prereq: level 6 artificer)", "Repeating Shot", "Repulsion Shield (prereq: level 6 artificer)", "Resistant Armor (prereq: level 6 artificer)", "Returning Weapon"],
			extraTimes : levels.map(function (n) {
				return n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12;
			}),
			"boots of the winding path (prereq: level 4 artificer)" : {
				name : "Boots of the Winding Path",
				source : ["ERLW", 62],
				description : desc([
					"The wearer can use a bonus action to teleport up to 15 ft to an unoccupied space it can see",
					"It must be a space that the wearer had occupied some time during the current turn"
				]),
				additional : "pair of boots; requires attunement",
				prereqeval : function(v) { return classes.known["artificer"].level >= 4; },
				eval : function (lvl, chc) { AddMagicItem("Boots of the Winding Path"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("boots of the winding path");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced arcane focus" : {
				name : "Enhanced Arcane Focus",
				source : ["ERLW", 62],
				description : "",
				additional : levels.map(function (n) {
					return "Wand of the War Mage +" + (n < 10 ? 1 : 2) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Wand of the War Mage +" + (classes.known["artificer"].level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("wand of the war mage, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced defense" : {
				name : "Enhanced Defense",
				source : ["ERLW", 62],
				description : "",
				additional : levels.map(function (n) {
					return "armor/shield; +" + (n < 10 ? 1 : 2) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Armor +" + (classes.known["artificer"].level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("armor, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced weapon" : {
				name : "Enhanced Weapon",
				source : ["ERLW", 62],
				description : "",
				additional : levels.map(function (n) {
					return "simple/martial weapon; +" + (n < 10 ? 1 : 2) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Weapon +" + (classes.known["artificer"].level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("weapon, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"homunculus servant (prereq: level 6 artificer)" : {
				name : "Homunculus Servant",
				source : ["ERLW", 62],
				description : desc([
					"I determine its appearance; I can have only 1 at a time, making a new one kills the older",
					"It obeys my commands, is friendly to my allies and I, and acts on my initiative, after me",
					"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
					"It can only do Force Strike, or take the Dash, Disengage, Help, Hide or Search action",
					"Its HP maximum is equal to my artificer level + my Intelligence modifier + its Constitution modifier",
					"If it dies, I can remake it with the core left behind"
				]),
				additional : " A gem worth at least 100 gp or a dragonshard",
				prereqeval : function(v) { return classes.known["artificer"].level >= 6; },
				eval : function () {
					var prefix = ClassList['artificer'].artificerCompFunc.add("Homunculus Servant");
					AddSkillProf("Perception", true, false, false, 2, prefix);
				},
				removeeval : function () {
				ClassList['artificer'].artificerCompFunc.remove("homunculus servant");
				},
				changeeval : function (lvlA) {
					var newProf = ProficiencyBonusList[classes.totallevel - 1];
					var newHP = Math.round(lvlA[1] * 1 + What("Int Mod"));
					ClassList['artificer'].artificerCompFunc.update("homunculus servant", newHP, newProf);
			}
			},
			"radiant weapon (prereq: level 6 artificer)" : {
				name : "Radiant Weapon",
				source : ["ERLW", 62],
				description : desc([
					"The weapon has a +1 bonus to attack and damage rolls made with it and it sheds light",
					"As a bonus action, its wielder can start/stop the light, 30-ft radius bright + 30 ft dim light",
					"As a reaction after being hit in melee, the wielder can blind its attacker, expending 1 of its 4 charges",
					"The attack must succeed on a Con save (spell save DC) or be blinded until its next turn ends",
					"The weapon regains 1d4 expended charges every dawn"
				]),
				additional : "simple/martial weapon; requires attunement",
				prereqeval : function(v) { return classes.known["artificer"].level >= 6; },
				eval : function (lvl, chc) { AddMagicItem("Radiant Weapon"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("radiant weapon");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"repeating shot" : {
				name : "Repeating Shot",
				source : ["ERLW", 62],
				description : desc([
					"The weapon requiring ammunition has a +1 bonus to attack and damage rolls made with it",
					"It magically produces one piece of ammunition whenever it is used to make a ranged attack",
					"Thus, it doesn't require ammunition and ignores the loading property if it has it"
				]),
				additional : "weapon with ammo; requires attunement",
				eval : function (lvl, chc) { AddMagicItem("Repeating Shot"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("repeating shot");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"repulsion shield (prereq: level 6 artificer)" : {
				name : "Repulsion Shield",
				source : ["ERLW", 63],
				description : desc([
					"The shield gives its wearer an additional +1 bonus to AC",
					"As a reaction when hit by a melee attack, the wearer can push their attacker up to 15 ft, expending 1 of its 4 charges",
					"The shield regains 1d4 expended charges every dawn"
				]),
				additional : "shield; requires attunement",
				prereqeval : function(v) { return classes.known["artificer"].level >= 6; },
				eval : function (lvl, chc) { AddMagicItem("Repulsion Shield"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("repulsion shield");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"resistant armor (prereq: level 6 artificer)" : {
				name : "Resistant Armor",
				source : ["ERLW", 63],
				description : desc([
					"The armor gives its wearer resistance to one type of damage, chosen at the time of infusion",
					"Choose from: acid,	 cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder"
				]),
				additional : "suit of armor; requires attunement",
				prereqeval : function(v) { return classes.known["artificer"].level >= 6; },
				eval : function (lvl, chc) { AddMagicItem("Armor of Resistance"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("armor of resistance");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"returning weapon" : {
				name : "Returning Weapon",
				source : ["ERLW", 63],
				description : "After being used for a ranged attack, the weapon returns immediately; +1 magical bonus",
				additional : "simple/martial weapon with the thrown property",
				eval : function (lvl, chc) { AddMagicItem("Returning Weapon"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("returning weapon");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			}
		},
		"subclassfeature3" : {
			name : "Artificer Specialist",
			source : ["ERLW", 57],
			minlevel : 3,
			description : desc([
				'Choose a specialism and put it in the "Class" field on the first page',
				"Choose either alchemist, artillerist, or battle smith"
			])
		},
		"the right tool for the job" : {
			name : "The Right Tool for the Job",
			source : ["ERLW", 57],
			minlevel : 3,
			description : "\n   " + "Whenever I take 1 hour of uninterrupted work, which can coincide with a short/long rest, I can create a set of artisan's tools in an unoccupied space within 5 feet of me. The tools last until I make another set"
		},
		"tool expertise" : {
			name : "Tool Expertise",
			source : ["ERLW", 57],
			minlevel : 6,
			description : " [expertise with all tools I am proficient with]",
			skillstxt : "expertise with all tools I am proficient with",
			eval : function () { Checkbox('Too Exp', true); },
			removeeval : function () { Checkbox('Too Exp', false); }
		},
		"flash of genius" : {
			name : "Flash of Genius",
			source : ["ERLW", 57],
			minlevel : 7,
			description : "I can add my Intelligence modifier to any ability check or saving throw of myself or any creature I can see within 30 feet, using my reaction",
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Intelligence Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"magic item adept" : {
			name : "Magic Item Adept",
			source : ["ERLW", 57],
			minlevel : 10,
			description : "\n I can attune to 4 magic items at once\n   I can craft common and uncommon magic items  for half the usual gold and in a quarter of the usual time",
			},
		"spell-storing item" : {
			name : "Spell-Storing Item",
			source : ["ERLW", 58],
			minlevel : 11,
			description : desc([
				"When I finish a long rest, I can infuse a 1st-/2nd-level artificer spell into an item I touch",
				"It must be a simple or martial weapon, or something I can use as a spellcasting focus",
				"The spell must have a casting time of 1 action, but I need not have it prepared",
				"A creature holding an infused item can use an action to cast the spell, using my abilities",
				"The item can produce the spell a number of times equal to twice my Int mod (min 2)"
			])
		},
		"magic item savant" : {
			name : "Magic Item Savant",
			source : ["ERLW", 58],
			minlevel : 14,
			description : "\n I can attune to 5 magic items at once\n I ignore all class, race, spell, and level requirements on attuning to or using a magic item", 
		},	
		"magic item master" : {
			name : "Magic Item Mastery",
			source : ["ERLW", 58],
			minlevel : 18,
			description : "\n I can attune to 6 magic items at once", 
		},	
		"soul of artifice" : {
			name : "Soul of Artifice",
			source : ["ERLW", 58],
			minlevel : 20,
			description : " [+1 on all saves per attuned magic item]\n If I'm reduced to 0 hit points but not killed outright, I can use my reaction to end one of my artificer infusions, causing me to drop to 1 hit point instead of 0.",
			savetxt : {
				text : ["+1 to all saves per attuned magic item"]
			}
		}
	},
	artificerCompFunc : {
		add : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefix = false;
			if (AScompA) {
				for (var a = 1; a < AScompA.length; a++) {
					if (!What(AScompA[a] + 'Comp.Race')) {
						prefix = AScompA[a];
						break;
					}
				}
			}
			if (!prefix) prefix = DoTemplate('AScomp', 'Add');
			Value(prefix + 'Comp.Race', compName);
			Value(prefix + 'Comp.Type', "Construct");
			var changeMsg = "The " + compName + " has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
			CurrentUpdates.types.push("notes");
			if (!CurrentUpdates.notesChanges) {
				CurrentUpdates.notesChanges = [changeMsg];
			} else {
				CurrentUpdates.notesChanges.push(changeMsg);
			}
			return prefix;
		},
		remove : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			if (!AScompA) return;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
					DoTemplate("AScomp", "Remove", AScompA[a], true);
				}
			}
		},
		update : function (compName, newHP, newProf) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefixes = [];
			if (!AScompA) return prefixes;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
					if (newHP !== undefined) Value(AScompA[a] + "Comp.Use.HP.Max", newHP);
					if (newProf !== undefined) Value(AScompA[a] + "Comp.Use.Proficiency Bonus", newProf);
					prefixes.push(AScompA[a]);
				}
			}
			return prefixes;
		}
	}
};

// Add the Alchemist specialism
AddSubClass("artificer", "alchemist", {
	regExpSearch : /^(?=.*alchemist)(?!.*wizard).*$/i,
	subname : "Alchemist",
	fullname : "Alchemist",
	source : ["ERLW", 58],
	features : {
		"subclassfeature3" : {
			name : "Tool Proficiency",
			source : ["ERLW", 58],
			minlevel : 3,
			description : "\n   I gain proficiency in alchemist's supplies and one other type, if already proficient in alchemist's supplies",
			additional : "alchemist's supplies proficiency",
			toolProfs : ["Alchemist's supplies"],
			spellcastingExtra : ["healing word", "ray of sickness", "flaming sphere", "melf's acid arrow", "gaseous form", "mass healing word", "blight", "death ward", "cloudkill", "raise dead"]
		},
		"subclassfeature3.1" : {
			name : "Experimental Elixir",
			source : ["ERLW", 58],
			minlevel : 3,
			description : desc([
				"When I end a long rest, I can produce an experimental elixir by touching an empty flask",
				"The effect is random, as determined by rolling on the Experimental Elixir table.",
				"A creature can drink or administer the elixir to another creature as an action",
				"At 6th and 15th level, I can produce 2 and 3 elixirs per long rest, rolling randomly for each one.",
				"I can create additional elixirs by spending a spell slot of 1st level or higher for each one",
				"I choose the effect from the Experimental Elixir table if I spend spell slots"]),
			toNotesPage : [{
				name : "Experimental Elixir Table",
				source : ["ERLW", 58],
				popupName : "Alchemist's Experimental Elixir Table",
				note : [	"d6\tEFFECT",
					" 1\tHealing. The drinker regains a number of hit points equal to 2d4 + your Intelligence modifier.",
					" 2\tSwiftness. The drinker's walking speed increases by 10 feet for 1 hour.",
					" 3\tResilience. The drinker gains a +1 bonus to AC for 10 minutes.",
					" 4\tBoldness. The drinker can roll a d4 and add the number rolled to every attack roll and saving throw they make for the next minute.",
					" 5\tFlight. The drinker gains a flying speed of 10 feet for 10 minutes.",
					" 6\tTransformation. The drinker's body is transformed as if by the alter self spell. The drinker determines the transformation caused by the spell, the effects of which last for 10 minutes."
			],
			}]
		},
		"subclassfeature5" : {
			name : "Alchemical Savant",
			source : ["ERLW", 58],
			minlevel : 5,
			description : desc([
				"I can enhance the spell I cast when I use alchemist's supplies as my spellcasting focus",
				"I then add my Int mod to one die roll for dealing acid, fire, necrotic or poison damage, or restoring HP"
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer") !== -1 && (/necrotic|fire|poison|acid/i).test(fields.Damage_Type)) {
							output.extraDmg += Math.max(Number(What("Int Mod")), 1);
						}
					},
					"Artificer spells that deal fire, necrotic, poison or acid damage which I cast while using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one damage die roll."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.psionic || spName !== "artificer" || (/color spray|sleep/).test(spellKey)) return;
						var startDescr = spellObj.description;
						var toAdd = Math.max(Number(What("Int Mod")), 1);
						switch (spellKey) {
							case "cloudkill" :
								spellObj.description = spellObj.description.replace("obscured, difficult terrain", "obsc., dif. ter.; 1\xD7 +" + toAdd + " dmg");
								break;
							case "hunger of hadar" :
								spellObj.description = spellObj.description.replace(/all /i, '') + " (1\xD7 +" + toAdd + ")";
								break;
							case "healing spirit" :
								spellObj.description += " (+" + toAdd + " once)";
								break;
							case "vitriolic sphere" :
								spellObj.description = spellObj.description.replace('now and', 'now, ');
								/* falls through */
							default :
								if (genericSpellDmgEdit(spellKey, spellObj, "acid|fire|necrotic|poison", "Int", true, true)) return true;
								var testRegex = /(.*?\d+d\d+)(\+\d+)?((\+\d+d?\d*\/\d?SL)?(\+spell(casting)? (ability )?mod(ifier)?|(\+|-)\d+ \(.{3}\))? hp.*)/i;
								var theMatch = spellObj.description.match(testRegex);
								if (!theMatch) return false;
								if (theMatch[2]) {
									var theMid = Number(theMatch[2]) + toAdd;
									if (theMid > -1) theMid = "+" + theMid;
								} else {
									var theMid = "+" + toAdd;
								}
								spellObj.description = spellObj.description.replace(testRegex, "$1" + theMid + "$3");
						}
						return startDescr !== spellObj.description;
					},
					"Artificer spells I cast using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one die rolled for healing, poison damage, or acid damage."
				]
			}
		},
		"subclassfeature9" : {
			name : "Restorative Reagents",
			source : ["ERLW", 59],
			minlevel : 9,
			description : "\n   I can cast Lesser Restoration without a spell slot if I use alchemist's supplies as a focus\n Whenever a creature drinks an experimental elixir I created, the creature gains 2d6 + my Intelligence modifier (minimum of 1 temporary hit point) temporary hit points.",
			usages : "Int mod per ",
			recovery : "long rest",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			spellcastingBonus : {
				name : "Alchemical Mastery",
				spells : ["lesser restoration"],
				selection : ["lesser restoration"],
				firstCol : "Sp"
			},
			spellChanges : {
				"lesser restoration" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					changes : "When using my Restorative Reagents class feature, I can cast Lesser Restoration a number of times per long rest equal to my Intelligence modifier. To do so, I have to use alchemist's supplies as my spellcasting focus"
				}
			}
		},
		"subclassfeature15" : {
			name : "Chemical Mastery",
			source : ["ERLW", 59],
			minlevel : 15,
			description : desc([
				"I always have resistance to acid and poison damage and immunity to being poisoned",
				"Once per long rest, I can cast Greater Restoration and Heal without a spell slot or material comp.",
				"To do so, I have to use alchemist's supplies as my spellcasting focus"
			]),
			dmgres : ["Acid", "Poison"],
			savetxt : { immune : ["poisoned condition"] },
			usages : 1,
			recovery : "long rest",
			additional : "Greater Restoration",
			spellcastingBonus : {
				name : "Chemical Savant",
				spells : ["greater restoration", "heal"],
				selection : ["greater restoration", "heal"],
				firstCol : "oncelr"
			},
			spellChanges : {
				"greater restoration" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					description : "Reduce exhaustion 1 lvl or end charm, petrify, curse, one ability score reduction, or max HP reduction",
					changes : "When using my Chemical Savant class feature and alchemist's supplies as my spellcasting focus, I can cast Greater Restoration once per long rest without using a spell slot or requiring material components."
				}
			},
			
				"heal" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					description : "1 living creature heals 70 HP and is cured of blindness, deafness, and all diseases",
					changes : "When using my Chemical Savant class feature and alchemist's supplies as my spellcasting focus, I can cast Heal once per long rest without using a spell slot or requiring material components."
				}
			}
		}
	}
);
// Add the Homunculus Servant
CreatureList["homunculus servant"] = {
	name : "Homunculus Servant",
	source : ["ERLW", 62],
	size : 5,
	type : "Construct",
	subtype : "",
	alignment : "Neutral",
	ac : 13,
	hp : 2,
	hd : [1, 4],
	speed : "20 ft,\nfly 30 ft",
	scores : [4, 15, 12, 10, 10, 7],
	saves : ["", "4", "", "", "", ""],
	skills : {
		"perception" : 4,
		"stealth" : 4
	},
	damage_immunities : "poison",
	condition_immunities : "exhaustion, poisoned",
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Force Strike",
		ability : 2,
		damage : [1, 4, "force"],
		range : "30 ft"
	}],
	features : [{
		name : "Creator",
		description : "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It only takes the Dodge action, unless its creator takes a bonus action to command to do otherwise, in which case it can only take the Force Strike, Dash, Disengage, Help, Hide or Search action."
	}, {
		name : "Healing",
		description : "The homunculus regains 2d6 HP whenever the Mending spell is cast on it."
	}],
};

// Add the Artillerist specialism
AddSubClass("artificer", "artillerist", {
	regExpSearch : /^(?=.*artillerist)(?!.*wizard).*$/i,
	subname : "Artillerist",
	fullname : "Artillerist",
	source : ["ERLW", 59],
	features : {
		"subclassfeature3" : {
			name : "Tool Proficiency",
			source : ["ERLW", 59],
			minlevel : 3,
			description : "\n   I gain proficiency in woodcarver's tools and one other type, if already proficient in woodcarver's tools",
			additional : "proficiency with woodcarver's tools",
			toolProfs : ["Woodcarver's tools"],
			spellcastingExtra : ["shield", "thunderwave", "scorching ray", "shatter", "fireball", "wind wall", "ice storm", "wall of fire", "cone of cold", "wall of force"]
		},
		"subclassfeature3.1" : {
			name : "Eldritch Cannon",
			source : ["ERLW", 59],
			minlevel : 3,
			description: desc([
				"As an action, I can use woodcarver's or smith's tools to summon a Small or Tiny cannon within 5 ft of me",
				"I can do so once per long rest for free, or by spending a spell slot",
				"I cannot create more than 1 cannon at a time",
				"When I summon one, I decide what type it is: flamethrower, force ballista, or protector",
				"It disappears after 1 hour, when reduced to 0 HP, or if I dismiss it as an action",
				"When within 60 ft of it, I can activate it as a bonus action",
				"See the companion page for how the different types of turrets operate"
			]),
			additional : levels.map(function(n) {
				return n < 3 ? "" : n < 15 ? "max 1 active turret"  : "max 2 active turrets";
			}),
			action: [["action", " (summon/detonate)"], ["bonus action", " (command)"]],
			eval : function () {
				ClassList['artificer'].artificerCompFunc.add("Arcane Turret");
			},
			removeeval : function () {
				ClassList['artificer'].artificerCompFunc.remove("arcane turret");
			},
			changeeval : function (lvlA) {
				ClassList['artificer'].artificerCompFunc.update("arcane turret", lvlA[1] * 5);
			}
		},
		"subclassfeature5" : {
			name : "Arcane Firearm",
			source : ["ERLW", 59],
			minlevel : 5,
			description: desc([
				"When I finish a long rest, I can use woodcarver's tools to turn a wand, staff or rod into an arcane firearm",
				"It lasts until I turn another wand, staff or rod into another arcane firearm, otherwise indefinitely",
				"I can use the arcane firearm as a spellcasting focus for artificer spells",
				"When an artificer spell is cast through the arcane firearm, an extra d8 is added to any one of the spell's damage rolls",
			]),
		},
		"subclassfeature9" : {
			name : "Explosive Cannon",
			source : ["ERLW", 60],
			minlevel : 9,
			description: "\n   Every eldritch cannon you create deals 1d8 extra damage\n You can detonate the cannon if you are within 60 feet of it, forcing every creature within 20 feet of it to make a Dexterity saving throw against your spell save DC, dealing 3d8 force damage on a failed save, or half as much on a successful one, as an action"
		},
		"subclassfeature15" : {
			name : "Fortified Position",
			source : ["ERLW", 60],
			minlevel : 15,
			description: "\n   My allies and I have half cover while within 10 ft of an arcane turret I created\n You also can have two cannons at the same time, and can create two with the same action (but not with the same spell slot)"
		}
	}
});
// Add the Artillerist's Eldritch Cannon
CreatureList["eldritch cannon"] = {
	name : "Eldritch Cannon",
	source : ["ERLW", 60],
	size : 4,
	type : "Construct",
	subtype : "",
	alignment : "Neutral",
	ac : 18,
	hp : 15,
	hd : [0, 0],
	speed : "15 ft, climb 15 ft",
	scores : [10, 10, 10, 10, 10, 10], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_immunities : "poison, psychic",
	condition_immunities : "all conditions",
	passivePerception : 10,
	senses : "",
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 0,
	attacksAction : 0,
	attacks : [{
		name : "Flamethrower",
		ability : 4,
		damage : [2, 8, "fire"],
		range : "15-ft cone",
		description : "Dex save, success - half damage; Unattended flammable objects ignite",
		modifiers : ["dc+oProf+oInt", "", false],
		tooltip : "The turret exhales fire in an adjacent 15-foot cone that the creator designate. Each creature in that area must make a Dexterity saving throw against the creator's spell save DC, taking 2d8 fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried."
	}, {
		name : "Force Ballista",
		ability : 4,
		damage : [2, 8, "force"],
		range : "120 ft",
		description : "Creatures hit are pushed 5 ft away",
		modifiers : ["oProf+oInt", "", false],
		tooltip : "Make a range spell attack, originating from the turret, at one creature or object within 120 feet of it. On a hit, the target takes 2d8 force damage, and if the target is a creature, it is pushed up to 5 feet away from the turret."
	}, {
		name : "Detonate",
		ability : 4,
		damage : [3, 8, "force"],
		range : "10-ft radius",
		description : "Dex save, success - half damage; Destroys turret",
		modifiers : ["dc+oProf+oInt", "", false],
		tooltip : "Detonate destroys the turret and forces each creature within 20 feet of it to make a Dexterity saving throw against your spell save DC, taking 3d8 force damage on a failed save or half as much damage on a successful one."
	}],
	features : [{
		name : "Healing",
		description : "The turret regains 2d6 HP whenever Mending is cast on it."
	}, {
		name : "Turret Type",
		description : "Upon creation, the creator decides what type of turret it is: Flamethrower, Force Ballista, or Protector. What feature/attack it can use depends on its type."
	}, {
		name : "Protector",
		description : "The turret emits a burst of positive energy that grants itself and each creature of the creator's choice within 10 feet of it a number of temporary hit points equal to 1d8 + the creator's Intelligence modifier (minimum of +1)."
	}],
	traits : [{
		name: "Creator",
		description: "The turret only does something when activated by its creator. It uses the spell attack and spell save DC of its creator, and has five times the creator's artificer level in HP."
	}, {
		name: "Activation",
		description: "The creator of the turret can activate it as a bonus action while within 60 ft of it. Once activated, the turret does as its creator wishes, move to an unoccupied space and use the action associated with its type:" +
		"\n  \u2022 Flamethrower: use the flamethrower attack." +
		"\n  \u2022 Force Ballista: use the force ballista attack." +
		"\n  \u2022 Protector: use the protector feature, see the features to the left."
	}, {
		name: "Detonate",
		description: "The creator of the turret can use an action to detonate the turret when within 60 ft of it, see the attack section."
	}]
};

// Add the Battle Smith specialism
AddSubClass("artificer", "battle smith", {
	regExpSearch : /^(?=.*battle)(?=.*smith)(?!.*wizard).*$/i,
	subname : "Battle Smith",
	fullname : "Battle Smith",
	source : ["ERL:W", 60],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Tool Proficiency \u0026 Battle Ready",
			source : ["ERL:W", 60],
			minlevel : 3,
			description : desc([
				"I gain proficiency with smith's tools, or one another type, if already proficient in smith's tools, and martial weapons",
				"I can use my Intelligence modifier instead of Strength or Dexterity for magic weapons"
			]),
			toolProfs : ["Smith's tools"],
			weaponProfs : [false, true],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && (v.theWea.isMagicWeapon || v.thisWeapon[1]) && fields.Mod > 0 && fields.Mod < 3 && What("Int") > What(fields.Mod == 1 ? "Str" : "Dex")) {
							fields.Mod = 4;
						}
					},
					'I can use my Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls of magic weapons.'
				]
			},
			spellcastingExtra : ["heroism", "shield", "branding smite", "warding bond", "aura of vitality", "conjure barrage", "aura of purity", "fire shield", "banishing smite", "mass cure wounds"]
		},
		"subclassfeature3.1" : {
			name : "Steel Defender",
			source : ["ERL:W", 61],
			minlevel : 3,
			description : desc([
				"When I end a long rest, I can use smith's tools to create an steel defender",
				"I determine its appearance; I can have only 1 at a time, making a new one kills the older",
				"It obeys my commands, is friendly to my allies and I, and acts on my initiative, after me",
				"Unless I use a bonus action to command it, it only takes reactions and the Dodge action",
				"If commanded to, it can only take an action to Force-Empowered Rend, Repair, Dash, Disengage, Help, Hide or Search",
				"Its HP maximum is equal to five times my artificer level + my Int Mod + its Con mod"
			]),
			action : [["action", " (restore)"], ["bonus action", " (command)"]],
			eval : function () {
				var prefix = ClassList['artificer'].artificerCompFunc.add("Steel Defender");
				AddSkillProf("Perception", true, false, false, 2, prefix);
			},
			removeeval : function () {
				ClassList['artificer'].artificerCompFunc.remove("steel defender");
			},
			changeeval : function (lvlA) {
				var newProf = ProficiencyBonusList[classes.totallevel - 1];
				var pres = ClassList['artificer'].artificerCompFunc.update("steel defender", undefined, newProf);
				if (!pres.length) return;
				var lvlH = Math.max(lvlA[0], lvlA[1]), lvlL = Math.min(lvlA[0], lvlA[1]);
				var newHP = Math.round(lvlA[1] * 5 + What("Int Mod"));
				for (var i = 0; i < pres.length; i++) {
					Value(pres[i] + "Comp.Use.HP.Max", newHP + What(pres[i] + "Comp.Use.Ability.Con.Mod"));
					if (lvlL < 9 && lvlH >= 9) { // Arcane Jolt
						Value(pres[i] + "Comp.Use.Attack.1.Description", lvlA[1] >= 9 ? "Counts as magical; Can channel energy (Arcane Jolt)" : "");
					}
					if (lvlL < 15 && lvlH >= 15) { // Improved Defender
						Value(pres[i] + "Comp.Use.Attack.2.Weapon Selection", lvlA[1]>= 15 ? "Deflect Attack" : "");
						if (lvlA[1] >= 14) {
							Value(pres[i] + "Comp.Use.Attack.2.Range", "Melee (5 ft)");
							Value(pres[i] + "Comp.Use.Attack.2.Description", "As reaction on target that attacks another; Automatically hits and target has disadv. on its attack");
							Value(pres[i] + "Comp.Use.Attack.2.Damage Type", "Force");
							PickDropdown(pres[i] + "Comp.Use.Attack.2.Mod", 5);
							Value(pres[i] + "BlueText.Comp.Use.Attack.2.Damage Die", "1d4");
							Value(pres[i] + "BlueText.Comp.Use.Attack.2.Damage Bonus", "oInt-Wis");
						}
					}
				}
			}
		},
		"subclassfeature9" : {
			name : "Arcane Jolt",
			source : ["ERLW", 61],
			minlevel : 9,
			description : desc([
				"I can channel energy through the defender's attack and my magic weapon attacks",
				"Once per turn when such an attack hits, I can have it do extra force damage or heal",
				"If I choose to heal, I restore HP to a creature that I can see within 30 ft of the target"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return n < 9 ? "" : (n < 15 ? 2 : 4) + "d6";
			})
		},
		"subclassfeature15" : {
			name : "Improved Defender",
			source : ["ERLW", 61],
			minlevel : 15,
			description : desc([
				"My steel defender's deflect attack now also deals 1d4 + my Int mod in force damage",
				"The damage and healing from arcane jolt increases from 2d6 to 4d6",
				"My steel defender gains a +2 bonus to AC"
			])
		}
	}
});
// Add the Battle Smith's Steel Defender
CreatureList["steel defender"] = {
	name : "Steel Defender",
	source : ["ERLW", 61],
	size : 3,
	type : "Construct",
	subtype : "",
	alignment : "Neutral",
	ac : 15,
	hp : 7,
	hd : [0, 0],
	speed : "40 ft",
	scores : [14, 12, 14, 4, 10, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "3", "4", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : { "perception" : 4 },
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, poisoned",
	passivePerception : 14,
	senses : "Darkvision 60 ft",
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Force-Empowered Rend",
		ability : 1,
		damage : [1, 8, "force"],
		range : "Melee (5 ft)",
		modifiers : ["", "Prof-2", ""]
	}],
	features : [{
		name : "Creator",
		description : "The steel defender obeys the commands of its creator and has the same proficiency bonus. It takes its turn after its creator, on the same initiative count. It only takes the Dodge action, unless its creator takes a bonus action to command to do otherwise, in which case it can only take the Bite, Repair, Dash, Disengage, or Help action. Within an hour of its death, its creator can expend a spell slot as an action while within 5 ft to have it return to full HP after 1 minute."
	}],
	actions : [{
		name : "Healing",
		description : "The steel defender regains 2d6 HP whenever the Mending spell is cast on it."
	}, {
		name : "Vigilant",
		description : "The steel defender can't be surprised."
	}, {
		name : "Repair (3/Day)",
		description : "As an action, the magical mechanisms inside the steel defender restore 2d8 + its proficiency bonus in hit points to itself or to one construct or object within 5 ft of it."
	}, {
		name : "Deflect Attack (reaction)",
		description : "As a reaction, the steel defender imposes disadvantage on the attack roll of one creature it can see that is within 5 ft of it, provided the attack roll is against a creature other than the steel defender."
	}]
};
// Add the new magic items
MagicItemsList["boots of the winding path"] = {
	name : "Boots of the Winding Path",
	source : ["ERLW", 62],
	type : "wondrous item",
	description : "While wearing these boots, I can teleport up to 15 ft as a bonus action to an unoccupied space I can see, as long as I occupied that space at some point during the current turn.",
	descriptionFull : "While wearing these boots, a creature can teleport up to 15 feet as a bonus action to an unoccupied space the creature can see. The creature must have occupied that space at some point during the current turn.",
	attunement : true,
	action : [["bonus action", ""]]
};
MagicItemsList["radiant weapon"] = {
	name : "Radiant Weapon",
	nameTest : "Radiant",
	source : ["ERLW", 13],
	type : "weapon (any)",
	description : "This magic weapon adds a +1 on its attacks and damage. As a bonus action, I can start or stop it shedding light, bright in 30 ft and dim for another 30 ft. Once per short rest as a reaction when hit by a melee attack, I can blind the attacker until the end of its next turn unless it makes a Con save (my spell DC).",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it. While holding it, the wielder can take a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet. The wielder can extinguish the light as a bonus action.\n   As a reaction immediately after being hit by a melee attack, the wielder can cause the attacker to be blinded until the end of the attacker's next turn, unless the attacker succeeds on a Constitution saving throw against your spell save DC. Once used, this reaction can't be used again until the wielder finishes a short or long rest.",
	attunement : true,
	usages : 1,
	recovery : "short rest",
	additional : "blind attacker",
	action : [["bonus action", " (shed light/stop)"], ["reaction", " (after melee hit)"]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/radiant/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Reaction to blind attacker';
				}
			},
			'If I include the word "Radiant" in the name of a weapon, it will be treated as the magic weapon Radiant Weapon. It has +1 to hit and damage and can be used to shed light or blind an attacker.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && !v.isSpell && (/radiant/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}
		]
	}
};
MagicItemsList["repeating shot"] = { // 2019v2
	name : "Repeating Shot",
	source : ["ERLW", 62],
	type : "weapon (any with ammunition)",
	description : "When I use this magic weapon to make a ranged attack, it magically produces one piece of ammunition and grants a +1 bonus to its attack and damage rolls. Thus, it doesn't require ammunition and ignores the loading property if it has it. The produced ammunition vanishes once it hits or misses a target.",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it when it's used to make a ranged attack, and it ignores the loading property if it has it.\n   The weapon requires no ammunition; it magically produces one piece of ammunition each time you make a ranged attack with it, unless you manually load it. The ammunition produced by the weapon vanishes the instant after the it hits or misses a target.",
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/ammunition/i).test(inObj.description);
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '').replace(/(;|,)? ?loading/i, '');
				}
			},
			'If I include the words "Repeating Shot" in the name of a weapon with the ammunition property, it will be treated as the magic weapon Repeating Shot. It has +1 to hit and damage and produces its own ammunition, thus its loading property is removed if it has it.'
		],
		atkCalc : [
			function (fields, v, output) {
				if ((/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText) && !v.isSpell) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["repulsion shield"] = { // 2019v2
	name : "Repulsion Shield",
	source : ["ERLW", 63],
	type : "shield",
	description : "I gain a +1 bonus to Armor Class while wielding this shield. As a reaction immediately after being hit by a melee attack, I can push the attacker up to 15 ft away. Once used, this reaction can't be used again until I finish a short or long rest.",
	descriptionFull : "A creature gains a +1 bonus to Armor Class while wielding this shield. While holding it, the wielder can use a reaction immediately after being hit by a melee attack to push the attacker up to 15 feet away. Once used, this reaction can't be used again until the wielder finishes a short or long rest.",
	weight : 6,
	attunement : true,
	usages : 1,
	recovery : "short rest",
	action : [["reaction", ""]],
	shieldAdd : ["Repulsion Shield", 3, 6],
};
MagicItemsList["returning weapon"] = {
	name : "Returning Weapon",
	nameTest : "Returning",
	source : ["ERLW", 63],
	type : "weapon (any thrown)",
	description : "This magic weapon grants a +1 bonus to attack and damage rolls I make with it. It returns to my hand immediately after I use it to make a ranged attack.",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it, and it returns to the wielder's hand immediately after it is used to make a ranged attack.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/melee/i).test(inObj.range) || !(/thrown/i).test(inObj.description);
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/^(?=.*returning)(?=.*thrown).*$/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Returns immediately after ranged attack';
				}
			},
			'If I include the word "Returning" in the name of a thrown weapon, it will be treated as the magic weapon Returning Weapon. It has +1 to hit and damage and returns to my hand immediately after I use it to make a ranged attack.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/^(?=.*returning)(?=.*thrown).*$/i).test(v.WeaponText)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};

// Set the Artificer class spell list
var SetArtificerSpells = function(){
	var artSp = [
		"acid splash",
		"create bonfire",
		"dancing lights",
		"fire bolt",
		"frostbite",
		"guidance",
		"light",
		"mage hand",
		"magic stone",
		"mending",
		"message",
		"poison spray",
		"prestidigitation",
		"ray of frost",
		"resistance",
		"shocking grasp",
		"spare the dying",
		"thorn whip",
		"thunderclap",
		// level 1
		"absorb elements",
		"alarm",
		"catapult",
		"cure wounds",
		"detect magic",
		"disguise self",
		"expeditious retreat",
		"faerie fire",
		"false life",
		"feather fall",
		"grease",
		"identify",
		"jump",
		"longstrider",
		"sanctuary",
		"snare-xgte",
		// level 2
		"aid",
		"alter self",
		"arcane lock",
		"blur",
		"continual flame",
		"darkvision",
		"enhance ability",
		"enlarge/reduce",
		"heat metal",
		"invisibility",
		"lesser restoration",
		"levitate",
		"magic mouth",
		"magic weapon",
		"protection from poison",
		"pyrotechnics",
		"rope trick",
		"see invisibility",
		"skywrite",
		"spider climb",
		"web",
		// level 3
		"blink",
		"catnap",
		"create food and water",
		"dispel magic",
		"elemental weapon",
		"flame arrows",
		"fly",
		"glyph of warding",
		"haste",
		"protection from energy",
		"revivify",
		"tiny servant",
		"water breathing",
		"water walk",
		// level 4
		"arcane eye",
		"elemental bane",
		"fabricate",
		"freedom of movement",
		"leomund's secret chest",
		"mordenkainen's faithful hound",
		"mordenkainen's private sanctum",
		"otiluke's resilient sphere",
		"stone shape",
		"stoneskin",
		// level 5
		"animate objects",
		"bigby's hand",
		"creation",
		"greater restoration",
		"skill empowerment",
		"transmute rock",
		"wall of stone"
	];
	for (var a = 0; a < artSp.length; a++) {
		var aArtSp = SpellsList[artSp[a]];
		if(aArtSp && aArtSp.classes && aArtSp.classes.indexOf("artificer") === -1) aArtSp.classes.push("artificer");
	}
	var artMi = [
		["alchemy jug"],
		["armblade"],
		["bag of holding"],
		["cap of water breathing"],
		["goggles of night"],
		["prosthetic limb"]
		["rope of climbing"],
		["sending stones"],
		["wand of magic detection"],
		["wand of secrets"],
		["boots of elvenkind", 6],
		["cloak of elvenkind", 6],
		["cloak of the manta ray", 6],
		["eyes of charming", 6],
		["gloves of thievery", 6],
		["lantern of revealing", 6],
		["pipes of haunting", 6],
		["ring of water walking", 6],
		["wand sheath", 6],
		["boots of striding and springing", 10],
		["boots of the winterlands", 10],
		["bracers of archery", 10],
		["brooch of shielding", 10],
		["cloak of protection", 10],
		["eyes of the eagle", 10],
		["gauntlets of ogre power", 10],
		["gloves of missile snaring", 10],
		["gloves of swimming and climbing", 10],
		["hat of disguise", 10],
		["headband of intellect", 10],
		["helm of telepathy", 10],
		["medallion of thoughts", 10],
		["periapt of wound closure", 10],
		["pipes of the sewers", 10],
		["quiver of ehlonna", 10],
		["ring of jumping", 10],
		["ring of mind shielding", 10],
		["slippers of spider climbing", 10],
		["ventilating lung", 10],
		["winged boots", 10],
		["amulet of health", 14],
		["arcane propulsion arm", 14],
		["belt of giant strength", 14, "hill (str 21, rare)"],
		["boots of levitation", 14],
		["boots of speed", 14],
		["bracers of defense", 14],
		["cloak of the bat", 14],
		["dimensional shackles", 14],
		["gem of seeing", 14],
		["horn of blasting", 14],
		["ring of free action", 14],
		["ring of protection", 14],
		["ring of the ram", 14]
	];
	var theObj 	= ClassList['artificer'].features["infuse item"];
	for (var a = 0; a < artMi.length; a++) {
		var MI0 = artMi[a][0];
		var MI1 = artMi[a][1];
		var MI2 = artMi[a][2];
		var MI3 = artMi[a][3];
		var anArtMi = MagicItemsList[MI0];
		if (!anArtMi) continue;
		if (MI3) {
			anArtMi = {
				name : MagicItemsList[MI0][MI3].name ? MagicItemsList[MI0][MI3].name : MagicItemsList[MI0].name + " [" + MI3.capitalize() + "]",
				source : MagicItemsList[MI0][MI3].source ? MagicItemsList[MI0][MI3].source : MagicItemsList[MI0].source,
				attunement : MagicItemsList[MI0][MI3].attunement ? MagicItemsList[MI0][MI3].attunement : MagicItemsList[MI0].attunement
			};
		}
		var theI = "Replicate: " + anArtMi.name + (MI1 ? " (prereq: level " + MI1 + " artificer)" : "");
		var theILC = theI.toLowerCase();
		theObj[theILC] = {
			name : anArtMi.name,
			description : "",
			source : anArtMi.source,
			eval : 'AddMagicItem("' + anArtMi.name + '");',
			removeeval : MI3 ? 'if (CurrentMagicItems.choices.indexOf("' + MI3 + '") != -1) { MagicItemClear(CurrentMagicItems.choices.indexOf("' + MI3 + '") + 1, true); };' : 'if (CurrentMagicItems.known.indexOf("' + MI0 + '") != -1) { MagicItemClear(CurrentMagicItems.known.indexOf("' + MI0 + '") + 1, true); };'
		};
		if (anArtMi.attunement) theObj[theILC].additional = "requires attunement";
		if (MI1) theObj[theILC].prereqeval = "classes.known['artificer'].level >= " + MI1;
		theObj.extrachoices.push(theI);
	}
}();
