function event(arrayEle) {
    const prob = arrayEle.reduce((sum, outcome) => sum + Object.values(outcome)[0], 0);

    if (prob !== 100) {
        arrayEle = arrayEle.map(outcome => {
            const [key, probValue] = Object.entries(outcome)[0];
            return { [key]: (probValue / prob) * 100 };
        });
    }

    const freq = Object.fromEntries(arrayEle.map((outcome) => [Object.keys(outcome)[0], 0]));

    const totalSimulation = 1000;

    for (let i = 0; i < totalSimulation; i++) {
        const random = Math.random() * 100;
        let cumulative = 0;

        for (let j = 0; j < arrayEle.length; j++) {
            const outcome = arrayEle[j];
            const [key, value] = Object.entries(outcome)[0];
            cumulative += value;
            if (random <= cumulative) {
                freq[key]++;
                break;
            }
        }
    }
    return freq;
}

const biasedDice = [{ 1: 10 }, { 2: 30 }, { 3: 15 }, { 4: 15 }, { 5: 30 }, { 6: 0 }];
const result = event(biasedDice);
console.log(result);
