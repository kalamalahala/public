export class Card {
	constructor(suit, rank) {
		this.suit = suit;
		this.rank = rank;
	}

	toString() {
		return `${this.rank}${this.suit}`;
	}

	static fromString(cardString) {
		return new Card(cardString[1], cardString[0]);
	}

	static fromObject(cardObject) {
		return new Card(cardObject.suit, cardObject.rank);
	}
}
