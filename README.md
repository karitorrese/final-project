
### Genetic configuration parameters

| Name            | Default | Range/Type  | Description                                              |
| --------------- | ------- | ----------- | -------------------------------------------------------- |
| Population Size | 100     | Real Number | Size of the population                                   |
| Crossover Rate  | 0.6     | [0.0, 1.0]  | Probability of crossover operation (multi point)         |
| Mutation Rate   | 0.1     | [0.0, 1.0]  | Probability of mutation operation (safe random bit flip) |

### Selection operators

| Individual Selectors            | Description                                 |
| ------------------------------- | ------------------------------------------- |
| IndividualSelectors.Tournament3 | Select fittest of three random individuals  |
| IndividualSelectors.Fittest     | Select fittest individual of the population |

| Pair-wise (parents) Selectors  | Description                                                         |
| ------------------------------ | ------------------------------------------------------------------- |
| ParentsSelectors.Tournament3   | Select a pair of individual using `IndividualSelectors.Tournament3` |
| ParentsSelectors.FittestRandom | Select a pair of the fittest and a random individual                |
