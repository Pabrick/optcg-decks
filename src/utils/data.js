const colours = new Map();
colours.set('1', 'red');
colours.set('4', 'purple');
colours.set('5', 'don');
colours.set('6', 'blue');
colours.set('7', 'green');
colours.set('10', 'red-green');
colours.set('11', 'blue-purple');
colours.set('12', 'black');
colours.set('14', 'red-black');
colours.set('15', 'green-blue');
export const getColor = (code) => colours.get(code);

const types = new Map();
types.set('0', 'Don');
types.set('1', 'Leader');
types.set('2', 'Character');
types.set('3', 'Effect');
types.set('4', 'Scenario');
types.set('5', 'Don');
export const getType = (code) => {
	return types.get(code);
}

export const getCardMapping = (rawData) => ({
	artist: rawData.ar,
	collectionId: rawData.cid,
	collectionName: rawData.srcN,
	color: getColor(rawData.col),
	cost: rawData.cs,
	counterPower: rawData.cp,
	date: rawData.srcD,
	effect: rawData.e,
	group: rawData.tr?.replaceAll('/ ', '/'),
	id: rawData.gid,
	image: rawData.iu,
	life: rawData.l,
	name: rawData.n,
	power: rawData.p,
	rarity: rawData.r,
	type: getType(rawData.t),
});
