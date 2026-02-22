import { healthIndicator } from '../pure-functions.js';

const dataHealthAll = [[{ name: 'class', health: 51 }, 'healthy'],
[{ name: 'class', health: 50 }, 'wounded'],
[{ name: 'class', health: 15 }, 'wounded'],
[{ name: 'class', health: 10 }, 'critical'],
];

test.each(dataHealthAll)('pure-functions', (dataHealth, expected) => {
    const result = healthIndicator(dataHealth);
    expect(result).toBe(expected);
});