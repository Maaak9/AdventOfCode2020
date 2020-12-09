import puzzleData from './puzzleData.js';

const bagRules = puzzleData.split('\n');

const parseBagRules = (bagRules) => {
  const bags = [];
  bagRules.forEach((bagRule) => {
    const bagColor = bagRule.substring(0, bagRule.indexOf(' bags'));
    const bagContains = bagRule.substring(bagRule.indexOf("contain") + 8, bagRule.length - 1)
      .split(',').map((bag) => {
        if (bag.includes('no other bags')) return 'no other bags';
        else if (bag.includes('bags')) {
          return bag.substring(0, bag.length - 4).replace(/[0-9]/g, '').trim();
        }
        return bag.substring(0, bag.length - 3).replace(/[0-9]/g, '').trim();
      });

    const bag = {
      color: bagColor,
      contain: bagContains
    }
    bags.push(bag);
  });
  return bags;
}


const getParentBagsContainingBag = (bagColor) => {
  return parsedBags.filter((b) => b.contain.includes(bagColor));
}

const parsedBags = parseBagRules(bagRules);
const bagsWithShineyBag = getParentBagsContainingBag('shiny gold');

const parentBags = new Set();

const getAllBagsContainingShinyBag = (bags) => {
  bags.forEach((bag) => {
    parentBags.add(bag);

    if (getParentBagsContainingBag(bag.color).length > 0) {
      getAllBagsContainingShinyBag(getParentBagsContainingBag(bag.color))
    }
  })
}

getAllBagsContainingShinyBag(bagsWithShineyBag);

console.warn('Bags that can potentially hold a shiny golden bag :', parentBags.size);




