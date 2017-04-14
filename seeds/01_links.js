
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {
          votes: 35,
          url: 'http://www.google.com',
          title: 'Yo, its google'
        },
        {
          votes: 14,
          url: 'http://www.yahoo.com',
          title: 'Yo, its yahoo'
        },
        {
          votes: -34,
          url: 'http://www.aj.com',
          title: 'Yo, its ask jeeves'
        }
      ]);
    });
};
