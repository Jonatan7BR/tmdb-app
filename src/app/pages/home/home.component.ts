import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	searchQuery = '';

	fakeData = [
		{
			poster: 'https://via.placeholder.com/600x900.webp',
			title: 'Sample title',
			releaseDate: new Date(),
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nulla at enim mollis sollicitudin. Nunc mauris magna, feugiat in pharetra at, luctus sed eros. Integer pulvinar nunc dolor, non lobortis urna tempus non. Nunc sit amet mollis lorem. Aliquam ligula dui, laoreet nec sapien in, cursus convallis libero. Curabitur vel ligula ultricies, volutpat purus vitae, aliquet est. Praesent pharetra blandit urna, vel aliquet velit ultricies a. Curabitur purus massa, fringilla sollicitudin cursus et, vestibulum id ex. Maecenas leo nunc, fringilla ut est ut, placerat vulputate purus. Maecenas mattis quam nec pharetra hendrerit. Ut et tempor quam, quis accumsan mi. Nunc in ex non felis tempus cursus at ut turpis.'
		},
		{
			poster: 'https://via.placeholder.com/600x900.webp',
			title: 'Sample title',
			releaseDate: new Date(),
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nulla at enim mollis sollicitudin. Nunc mauris magna, feugiat in pharetra at, luctus sed eros. Integer pulvinar nunc dolor, non lobortis urna tempus non. Nunc sit amet mollis lorem. Aliquam ligula dui, laoreet nec sapien in, cursus convallis libero. Curabitur vel ligula ultricies, volutpat purus vitae, aliquet est. Praesent pharetra blandit urna, vel aliquet velit ultricies a. Curabitur purus massa, fringilla sollicitudin cursus et, vestibulum id ex. Maecenas leo nunc, fringilla ut est ut, placerat vulputate purus. Maecenas mattis quam nec pharetra hendrerit. Ut et tempor quam, quis accumsan mi. Nunc in ex non felis tempus cursus at ut turpis.'
		},
		{
			poster: 'https://via.placeholder.com/600x900.webp',
			title: 'Sample title',
			releaseDate: new Date(),
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nulla at enim mollis sollicitudin. Nunc mauris magna, feugiat in pharetra at, luctus sed eros. Integer pulvinar nunc dolor, non lobortis urna tempus non. Nunc sit amet mollis lorem. Aliquam ligula dui, laoreet nec sapien in, cursus convallis libero. Curabitur vel ligula ultricies, volutpat purus vitae, aliquet est. Praesent pharetra blandit urna, vel aliquet velit ultricies a. Curabitur purus massa, fringilla sollicitudin cursus et, vestibulum id ex. Maecenas leo nunc, fringilla ut est ut, placerat vulputate purus. Maecenas mattis quam nec pharetra hendrerit. Ut et tempor quam, quis accumsan mi. Nunc in ex non felis tempus cursus at ut turpis.'
		},
		{
			poster: 'https://via.placeholder.com/600x900.webp',
			title: 'Sample title',
			releaseDate: new Date(),
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nulla at enim mollis sollicitudin. Nunc mauris magna, feugiat in pharetra at, luctus sed eros. Integer pulvinar nunc dolor, non lobortis urna tempus non. Nunc sit amet mollis lorem. Aliquam ligula dui, laoreet nec sapien in, cursus convallis libero. Curabitur vel ligula ultricies, volutpat purus vitae, aliquet est. Praesent pharetra blandit urna, vel aliquet velit ultricies a. Curabitur purus massa, fringilla sollicitudin cursus et, vestibulum id ex. Maecenas leo nunc, fringilla ut est ut, placerat vulputate purus. Maecenas mattis quam nec pharetra hendrerit. Ut et tempor quam, quis accumsan mi. Nunc in ex non felis tempus cursus at ut turpis.'
		},
		{
			poster: 'https://via.placeholder.com/600x900.webp',
			title: 'Sample title',
			releaseDate: new Date(),
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nulla at enim mollis sollicitudin. Nunc mauris magna, feugiat in pharetra at, luctus sed eros. Integer pulvinar nunc dolor, non lobortis urna tempus non. Nunc sit amet mollis lorem. Aliquam ligula dui, laoreet nec sapien in, cursus convallis libero. Curabitur vel ligula ultricies, volutpat purus vitae, aliquet est. Praesent pharetra blandit urna, vel aliquet velit ultricies a. Curabitur purus massa, fringilla sollicitudin cursus et, vestibulum id ex. Maecenas leo nunc, fringilla ut est ut, placerat vulputate purus. Maecenas mattis quam nec pharetra hendrerit. Ut et tempor quam, quis accumsan mi. Nunc in ex non felis tempus cursus at ut turpis.'
		},
		{
			poster: 'https://via.placeholder.com/600x900.webp',
			title: 'Sample title',
			releaseDate: new Date(),
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nulla at enim mollis sollicitudin. Nunc mauris magna, feugiat in pharetra at, luctus sed eros. Integer pulvinar nunc dolor, non lobortis urna tempus non. Nunc sit amet mollis lorem. Aliquam ligula dui, laoreet nec sapien in, cursus convallis libero. Curabitur vel ligula ultricies, volutpat purus vitae, aliquet est. Praesent pharetra blandit urna, vel aliquet velit ultricies a. Curabitur purus massa, fringilla sollicitudin cursus et, vestibulum id ex. Maecenas leo nunc, fringilla ut est ut, placerat vulputate purus. Maecenas mattis quam nec pharetra hendrerit. Ut et tempor quam, quis accumsan mi. Nunc in ex non felis tempus cursus at ut turpis.'
		},
		{
			poster: 'https://via.placeholder.com/600x900.webp',
			title: 'Sample title',
			releaseDate: new Date(),
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nulla at enim mollis sollicitudin. Nunc mauris magna, feugiat in pharetra at, luctus sed eros. Integer pulvinar nunc dolor, non lobortis urna tempus non. Nunc sit amet mollis lorem. Aliquam ligula dui, laoreet nec sapien in, cursus convallis libero. Curabitur vel ligula ultricies, volutpat purus vitae, aliquet est. Praesent pharetra blandit urna, vel aliquet velit ultricies a. Curabitur purus massa, fringilla sollicitudin cursus et, vestibulum id ex. Maecenas leo nunc, fringilla ut est ut, placerat vulputate purus. Maecenas mattis quam nec pharetra hendrerit. Ut et tempor quam, quis accumsan mi. Nunc in ex non felis tempus cursus at ut turpis.'
		},
		{
			poster: 'https://via.placeholder.com/600x900.webp',
			title: 'Sample title',
			releaseDate: new Date(),
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nulla at enim mollis sollicitudin. Nunc mauris magna, feugiat in pharetra at, luctus sed eros. Integer pulvinar nunc dolor, non lobortis urna tempus non. Nunc sit amet mollis lorem. Aliquam ligula dui, laoreet nec sapien in, cursus convallis libero. Curabitur vel ligula ultricies, volutpat purus vitae, aliquet est. Praesent pharetra blandit urna, vel aliquet velit ultricies a. Curabitur purus massa, fringilla sollicitudin cursus et, vestibulum id ex. Maecenas leo nunc, fringilla ut est ut, placerat vulputate purus. Maecenas mattis quam nec pharetra hendrerit. Ut et tempor quam, quis accumsan mi. Nunc in ex non felis tempus cursus at ut turpis.'
		},
		{
			poster: 'https://via.placeholder.com/600x900.webp',
			title: 'Sample title',
			releaseDate: new Date(),
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nulla at enim mollis sollicitudin. Nunc mauris magna, feugiat in pharetra at, luctus sed eros. Integer pulvinar nunc dolor, non lobortis urna tempus non. Nunc sit amet mollis lorem. Aliquam ligula dui, laoreet nec sapien in, cursus convallis libero. Curabitur vel ligula ultricies, volutpat purus vitae, aliquet est. Praesent pharetra blandit urna, vel aliquet velit ultricies a. Curabitur purus massa, fringilla sollicitudin cursus et, vestibulum id ex. Maecenas leo nunc, fringilla ut est ut, placerat vulputate purus. Maecenas mattis quam nec pharetra hendrerit. Ut et tempor quam, quis accumsan mi. Nunc in ex non felis tempus cursus at ut turpis.'
		},
		{
			poster: 'https://via.placeholder.com/600x900.webp',
			title: 'Sample title',
			releaseDate: new Date(),
			overview:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis nulla at enim mollis sollicitudin. Nunc mauris magna, feugiat in pharetra at, luctus sed eros. Integer pulvinar nunc dolor, non lobortis urna tempus non. Nunc sit amet mollis lorem. Aliquam ligula dui, laoreet nec sapien in, cursus convallis libero. Curabitur vel ligula ultricies, volutpat purus vitae, aliquet est. Praesent pharetra blandit urna, vel aliquet velit ultricies a. Curabitur purus massa, fringilla sollicitudin cursus et, vestibulum id ex. Maecenas leo nunc, fringilla ut est ut, placerat vulputate purus. Maecenas mattis quam nec pharetra hendrerit. Ut et tempor quam, quis accumsan mi. Nunc in ex non felis tempus cursus at ut turpis.'
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
