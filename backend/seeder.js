const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Load Models
const Blogpost = require('./models/Blogpost');

//Connect to the MongoDB database
connectDB();

// Read JSON files
const blogposts = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/blogposts.json`, 'utf-8')
);

// Import Blogpots into DB
const importData = async () => {
  try {
    await Blogpost.create(blogposts);
    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (error) {}
  console.error(error);
};

// Delete Blogpost Data from the DB
const deleteData = async () => {
  try {
    await Blogpost.deleteMany();
    console.log('Data Deleted...'.red.inverse);
    process.exit();
  } catch (error) {}
  console.error(error);
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}