const db = require('../../config/db');

const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

module.exports = () => {
	return new Promise((resolve, reject) => {
		db.query(createUsersTable, (error, result) => {
			if (error) return reject(error);

			console.log('users table created');
			
			resolve();
		});
	});
};
