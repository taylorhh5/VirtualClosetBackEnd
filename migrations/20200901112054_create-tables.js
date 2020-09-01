
exports.up = function(knex) {
    return knex.schema.createTable("users", (tbl) => {
        tbl.increments();
        tbl.string("email", 128).notNullable().unique()
        tbl.string("password", 128).notNullable();
        tbl.string("image_url", 500)
        tbl.string("name", 500)

      })
      .createTable("category", (tbl) => {
        tbl.increments();
        tbl.string("name", 128).notNullable()
        tbl.text("description")
        tbl.string("image_url", 500)
  
        
        tbl.integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      })
      .createTable("clothing", (tbl) => {
        tbl.increments();
        tbl.string("name", 128).notNullable()
        tbl.text("description")
        tbl.string("image_url", 500)
        tbl.string("type", 500)
  
        
        tbl.integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")

        tbl.integer("category_id")
        .unsigned()
        .references("id")
        .inTable("category")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      })

      .createTable("category_clothing", (tbl) => {
        tbl.increments();
        tbl.unique(['category_id', 'clothing_id'])
 
        
        tbl.integer("category_id")
        .unsigned()
        .references("id")
        .inTable("category")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")

        
        tbl.integer("clothing_id")
        .unsigned()
        .references("id")
        .inTable("clothing")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("category_clothing")
    .dropTableIfExists("clothing")
    .dropTableIfExists("category")
    .dropTableIfExists("users");
};
