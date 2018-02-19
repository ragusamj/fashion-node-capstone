exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://admin:admin@ds241578.mlab.com:41578/fashion-node-capstone';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
    'mongodb://admin:admin@ds241578.mlab.com:41578/fashion-node-capstone';
exports.PORT = process.env.PORT || 8080;
