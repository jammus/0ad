var WeightedList = function()
{
    this._elements = [ ];
    this._totalWeight = 0;
};

WeightedList.prototype.length = function()
{
	return this._elements.length;
};

WeightedList.prototype.add = function(item, weight)
{
	if (weight === undefined)
		weight = 1;
	this._totalWeight += weight;
	this._elements.push({ "item": item, "weight": weight });
};

WeightedList.prototype.removeAt = function(index)
{
	var element = this._elements.splice(index, 1);
	if (element.length)
		this._totalWeight -= element[0].weight;
};

WeightedList.prototype.itemAt = function(index)
{
	var element = this._elements[index];
	return element ? element.item : null;
};

WeightedList.prototype.randomIndex = function() {
	var element,
	targetWeight = Math.random() * this._totalWeight,
	cumulativeWeight = 0;
	for (var index = 0; index < this._elements.length; index++)
	{
		element = this._elements[index];
		cumulativeWeight += element.weight;
		if (cumulativeWeight >= targetWeight)
			return index;
	}
	return -1;
};

Engine.RegisterGlobal("WeightedList", WeightedList);
