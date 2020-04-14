
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 'JH4DB2380NS000339', make: 'Acura', model: 'Integra', model_year: 1992, mileage: 200154},
        {VIN: 'WBSPM9C52BE202514', make: 'BMW', model: 'M3', model_year: 2011, mileage: 89123, transmission_type: 'automatic', title_status: 'clear'},
        {VIN: '1C4BJWCG8DL501255', make: 'Jeep', model: 'Wrangler', model_year: 2013, mileage: 35002},
      ]);
    });
};
