// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCdCLUg56N4BIaNyRRMlOB-r3xWW9c-fEg',
    authDomain: 'baterrysocial.firebaseapp.com',
    databaseURL: 'https://baterrysocial.firebaseio.com',
    projectId: 'baterrysocial',
    storageBucket: 'baterrysocial.appspot.com',
    messagingSenderId: '775021721955'
  },
  news : [
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d',
      // tslint:disable-next-line:max-line-length
      new: 'La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d',
      // tslint:disable-next-line:max-line-length
      new: 'La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d',
      // tslint:disable-next-line:max-line-length
      new: 'La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d',
      // tslint:disable-next-line:max-line-length
      new: 'La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d',
      // tslint:disable-next-line:max-line-length
      new: 'La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d',
      // tslint:disable-next-line:max-line-length
      new: 'La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que',
    },
  ],
  eventSource : [{
    id: 10,
    title: 'Concierto Carismos',
    startTime: new Date('2019-01-17T17:00:00'),
    endTime: new Date('2019-01-17T18:00:00'),
    photo: 'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    allDay: false,
  },
  {
    id: 2,
    title: 'Concierto Luises',
    startTime: new Date('2019-01-20T17:00:00'),
    endTime: new Date('2019-01-20T18:00:00'),
    photo: 'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    allDay: false,
  },
  {
    id: 3,
    title: 'HandMakers',
    startTime: new Date('2019-01-21T17:00:00'),
    endTime: new Date('2019-01-21T18:00:00'),
    photo: 'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    allDay: false,
  },
  {
    id: 4,
    title: 'CopinCopon',
    startTime: new Date('2019-01-30T17:00:00'),
    endTime: new Date('2019-01-30T18:00:00'),
    photo: 'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    allDay: false,
  },
  {
    id: 5,
    title: 'Orquesta hooler',
    startTime: new Date('2019-01-12T17:00:00'),
    endTime: new Date('2019-01-12T18:00:00'),
    photo: 'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    allDay: false,
  },
],
books : [
  {
    id: 1,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'El prometeo moderno',
    // tslint:disable-next-line:max-line-length
    description: 'descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta',
    comments: [
      {nombre: 'Maria' , comment: 'una maravilla', photo: 'https://www.w3schools.com/howto/img_avatar.png'},
      {nombre: 'Luisa' , comment: 'Gran libro', photo: 'https://www.w3schools.com/howto/img_avatar2.png' },
      {nombre: 'Fernando' , comment: 'no me termino de convencer', photo: 'https://www.w3schools.com/w3images/avatar2.png' },
      {nombre: 'Raul' , comment: 'Muy Siniestro', photo: 'https://www.w3schools.com/w3images/avatar6.png' },
    ]
  },
  {
    id: 2,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: '1984',
    // tslint:disable-next-line:max-line-length
    description: 'descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta',
    comments: [
      {nombre: 'Maria' , comment: 'una maravilla', photo: 'https://www.w3schools.com/howto/img_avatar.png'},
      {nombre: 'Luisa' , comment: 'Gran libro', photo: 'https://www.w3schools.com/howto/img_avatar2.png' },
      {nombre: 'Fernando' , comment: 'no me termino de convencer', photo: 'https://www.w3schools.com/w3images/avatar2.png' },
      {nombre: 'Raul' , comment: 'Muy doblepiensa', photo: 'https://www.w3schools.com/w3images/avatar6.png' },
    ]
  },
  {
    id: 3,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'un mundo feliz',
    // tslint:disable-next-line:max-line-length
    description: 'descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta',
    comments: [
      {nombre: 'Maria' , comment: 'una maravilla', photo: 'https://www.w3schools.com/howto/img_avatar.png'},
      {nombre: 'Luisa' , comment: 'Gran libro', photo: 'https://www.w3schools.com/howto/img_avatar2.png' },
      {nombre: 'Fernando' , comment: 'no me termino de convencer', photo: 'https://www.w3schools.com/w3images/avatar2.png' },
      {nombre: 'Raul' , comment: 'Muy divertido', photo: 'https://www.w3schools.com/w3images/avatar6.png' },
    ]
  },
  {
    id: 4,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'manolito gafotas',
    // tslint:disable-next-line:max-line-length
    description: 'descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta',
    comments: [
      {nombre: 'Maria' , comment: 'una maravilla', photo: 'https://www.w3schools.com/howto/img_avatar.png'},
      {nombre: 'Luisa' , comment: 'Gran libro', photo: 'https://www.w3schools.com/howto/img_avatar2.png' },
      {nombre: 'Fernando' , comment: 'no me termino de convencer', photo: 'https://www.w3schools.com/w3images/avatar2.png' },
      {nombre: 'Raul' , comment: 'Muy divertido', photo: 'https://www.w3schools.com/w3images/avatar6.png' },
    ]
  },
  {
    id: 5,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'El señor de los anillos: La comunidad del anillo',
    // tslint:disable-next-line:max-line-length
    description: 'descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta',
    comments: [
      {nombre: 'Maria' , comment: 'misterioso y magico', photo: 'https://www.w3schools.com/howto/img_avatar.png'},
      {nombre: 'Luisa' , comment: 'Gran libro', photo: 'https://www.w3schools.com/howto/img_avatar2.png' },
      {nombre: 'Fernando' , comment: 'me convencio maravillosamente', photo: 'https://www.w3schools.com/w3images/avatar2.png' },
      {nombre: 'Raul' , comment: 'viva los hobbits', photo: 'https://www.w3schools.com/w3images/avatar6.png' },
    ]
  },
  {
    id: 6,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'hackertown',
    // tslint:disable-next-line:max-line-length
    description: 'descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta',
    comments: [
      {nombre: 'Maria' , comment: 'una maravilla', photo: 'https://www.w3schools.com/howto/img_avatar.png'},
      {nombre: 'Luisa' , comment: 'Gran libro', photo: 'https://www.w3schools.com/howto/img_avatar2.png' },
      {nombre: 'Fernando' , comment: 'no me termino de convencer', photo: 'https://www.w3schools.com/w3images/avatar2.png' },
      {nombre: 'Raul' , comment: 'Muy divertido', photo: 'https://www.w3schools.com/w3images/avatar6.png' },
    ]
  },
  {
    id: 7,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'abelino y la rosa',
    // tslint:disable-next-line:max-line-length
    description: 'descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta',
    comments: [
      {nombre: 'Maria' , comment: 'una maravilla', photo: 'https://www.w3schools.com/howto/img_avatar.png'},
      {nombre: 'Luisa' , comment: 'Gran libro', photo: 'https://www.w3schools.com/howto/img_avatar2.png' },
      {nombre: 'Fernando' , comment: 'no me termino de convencer', photo: 'https://www.w3schools.com/w3images/avatar2.png' },
      {nombre: 'Raul' , comment: 'Muy divertido', photo: 'https://www.w3schools.com/w3images/avatar6.png' },
    ]
  },
  {
    id: 8,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'lo que le viento dejo',
    // tslint:disable-next-line:max-line-length
    description: 'descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta',
    comments: [
      {nombre: 'Maria' , comment: 'una maravilla', photo: 'https://www.w3schools.com/howto/img_avatar.png'},
      {nombre: 'Luisa' , comment: 'Gran libro', photo: 'https://www.w3schools.com/howto/img_avatar2.png' },
      {nombre: 'Fernando' , comment: 'no me termino de convencer', photo: 'https://www.w3schools.com/w3images/avatar2.png' },
      {nombre: 'Raul' , comment: 'Muy divertido', photo: 'https://www.w3schools.com/w3images/avatar6.png' },
    ]
  },
],
classes : [
  {
    id: 1,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'actividad 1',
    description: 'descripcion de la actividad',
    hours: 'L-X-V (19:00:20:00)'
  },
  {
    id: 1,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'actividad 1',
    description: 'descripcion de la actividad',
    hours: 'L-X-V (19:00:20:00)'
  },
  {
    id: 1,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'actividad 1',
    description: 'descripcion de la actividad',
    hours: 'L-X-V (19:00:20:00)'
  },
  {
    id: 1,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'actividad 1',
    description: 'descripcion de la actividad',
    hours: 'L-X-V (19:00:20:00)'
  },
  {
    id: 1,
    thumb:
      'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    name: 'actividad 1',
    description: 'descripcion de la actividad',
    hours: 'L-X-V (19:00:20:00)'
  },
],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
