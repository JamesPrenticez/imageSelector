exports.seed = (knex, Promise) => {
  return knex('houses').insert([
    { id: 0,
      name: 'Alexandra',
      gfa: '170.69m2',
      cost: '$396,600.00',
      description: '',
      image_cover: './img/houses/alexandra/alexandra.png',
      image_plan: './img/houses/alexandra/alexandra_floor.png',
      image_3d: './img/houses/alexandra/alexandra_3d.png',
      image_elevations: './img/houses/alexandra/alexandra_elevation.png'
    },
    { id: 1,
      name: 'Andrew',
      gfa: '148.56m2',
      cost: '$347,690.00',
      description: '',
      image_cover: './img/houses/andrew/andrew.png',
      image_plan: './img/houses/andrew/andrew_plan.png',
      image_3d: './img/houses/andrew/andrew_3d.png',
      image_elevations: './img/houses/andrew/andrew_elevation.png'
    }
  ])
}
