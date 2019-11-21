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
