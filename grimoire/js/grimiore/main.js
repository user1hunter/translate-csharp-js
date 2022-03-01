// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = getAllSpells();
const goodBook = makeGoodSpellBook(allSpells);
const evilBook = makeEvilSpellBook(allSpells);

displaySpellBook(goodBook);
console.log();
displaySpellBook(evilBook);

function SpellBook(title, spells) {
    this.title = title;
    this.spells = spells;
}

function Spell(name, isEvil, energyRequired) {
    this.name = name;
    this.isEvil = isEvil;
    this.energyRequired = energyRequired;
}

function getAllSpells() {
    const allSpells = [
        new Spell("Turn enemy into a newt", true, 5.1),
        new Spell("Conjure some gold for a local charity", false, 2.99),
        new Spell("Give a deaf person the ability to heal", false, 12.2),
        new Spell("Make yourself emperor of the universe", true, 100.0),
        new Spell(
            "Convince your relatives your political views are correct",
            false,
            2921.5
        ),
    ];

    return allSpells;
}

function makeGoodSpellBook(allSpells) {
    const goodBook = new SpellBook(
        "Good Book",
        allSpells.filter((spell) => !spell.isEvil)
    );

    return goodBook;
}

function makeEvilSpellBook(allSpells) {
    const evilBook = new SpellBook(
        "Evil Book",
        allSpells.filter((spell) => spell.isEvil)
    );

    return evilBook;
}

function displaySpellBook(book) {
    console.log(book.title);
    for (const aSpell of book.spells) {
        console.log(`  ${aSpell.name}`);
    }
}