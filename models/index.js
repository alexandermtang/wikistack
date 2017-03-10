var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', { logging: false });

var Page = db.define('page', {
    title: {type: Sequelize.TEXT, validate: { notNull: true }},
    urlTitle: Sequelize.TEXT,
    content: Sequelize.TEXT,
    status: Sequelize.ENUM('open', 'closed')

})

var User = db.define('user', {
    name: Sequelize.TEXT,
    email: {type: Sequelize.TEXT, unique: true}
})

module.exports = {
    Page: Page,
    User: User
};

