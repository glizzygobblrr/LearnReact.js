//guitar array
const guitars = [
    { id: 1, brand: 'Fender', model: 'Stratocaster', year: 2021, creator: 'Leo Fender' },
    { id: 2, brand: 'Gibson', model: 'Les Paul', year: 2020, creator: 'Orville Gibson' },
    { id: 3, brand: 'Ibanez', model: 'RG550', year: 2019, creator: 'Hoshino Gakki' },
    { id: 4, brand: 'PRS', model: 'Custom 24', year: 2022, creator: 'Paul Reed Smith' }
  ];
  
//***map***
  //get array of brand
  const brands = guitars.map(guitar => guitar.brand
  )
  console.log(brands); //node {name of js file}

  //get array of model
  const models = guitars.map(guitar => guitar.model
  )
  console.log(models);
  
  //get array of objects with just model and year 
  const modelYear = guitars.map(guitar=>({
    model: guitar.model,
    year: guitar.year
  }))
  console.log(modelYear)

  //get array of all first names
  const firstName = guitars.map(guitar => ({
    firstName: guitar.creator.split(' ')[0]
  }))
  console.log(firstName)
