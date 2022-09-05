/**
 * Individual selectors for crossover and mutation operations
 */
 export const individualSelectors = {
	tournament3: (population, optimizer) => {
		const n = population.length;
		const a = population[Math.floor(Math.random() * n)];
		const b = population[Math.floor(Math.random() * n)];
		const c = population[Math.floor(Math.random() * n)];
		let best = optimizer(a.fitness, b.fitness) ? a : b;
		best = optimizer(best.fitness, c.fitness) ? best : c;
		return best.genome;
	},
	fittest: (population, optimizer) => population[0].genome
};

/**
 * Parents selector for crossover operation
 */
export const parentsSelectors = {
	tournament3: (population, optimizer) => [
		individualSelectors.tournament3(population, optimizer),
		individualSelectors.tournament3(population, optimizer)
	],
	fittestRandom: population => [
		individualSelectors.fittest(population),
		individualSelectors.random(population)
	]
};
