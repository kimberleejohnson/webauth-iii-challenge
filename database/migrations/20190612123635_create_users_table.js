// Defining what my table will contain 
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', users => {
      // user id 
      users.increments(); 

      // Other values 
      users
      .string('username', 128)
      .notNullable()
      .unique(); 

      // password 
      users
      .string('password', 128).notNullable(); 

      // department 
      users.string('department', 128).notNullable(); 

  })
};

// Defining how we empty the table if we need to 
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users'); 
};
