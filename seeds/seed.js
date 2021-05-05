exports.seed = function (knex) {
  // Deletes ALL existing entries first
  return knex("data")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("data").insert([
        { firstName: "John", lastName: "Smith", email: "john.smith@gmail.com" },
        { firstName: "Brenda", lastName: "Jones", email: "brenda.jones@hotmail.com" },
        { firstName: "Harry", lastName: "Reynolds", email: "harry1969.jones@hotmail.com" },
        { firstName: "Bazza", lastName: "Greyson", email: "big_bazza@hotmail.com" },
        { firstName: "Laura", lastName: "Reddy", email: "notreddy@outlook.com" },
        { firstName: "Jarrod", lastName: "Bright", email: "bjarrod@gmail.com" }
      ]);
    });
};