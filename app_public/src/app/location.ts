export class Location {
	_id: string;
	name: string;
	distance: number;
	address: string;
	rating: number;
	facilities: string[];
	openingTimes: OpeningTime[];
	reviews: Review[];
	coords: number[];
}

class OpeningTime {
	days: string;
	opening: string;
	closing: string;
	closed: boolean;
}

export class Review {
	author: string;
	rating: number;
	reviewText: string;
}