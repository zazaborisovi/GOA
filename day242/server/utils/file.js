const fs = require('fs');
const path = require('path');

const URL_POSTS = path.join(__dirname, '../posts.json');

const readPosts = () => {
    return JSON.parse(fs.readFileSync(URL_POSTS, 'utf8'));
};

const writePosts = (items) => {
    fs.writeFileSync(URL_POSTS, JSON.stringify(items, null, 2));
};

module.exports = {
    readPosts,
    writePosts
}