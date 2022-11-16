import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.sass']
})
export class CardComponent {
	@Input() poster!: string;
	@Input() title!: string;
	@Input() releaseDate!: Date;
	@Input() overview!: string;

	placeholderPoster = 'https://via.placeholder.com/600x900.webp';
}
