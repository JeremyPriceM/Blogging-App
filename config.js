"use strict";
// Blogging App
exports.DATABASE_URL =
    process.env.DATABASE_URL || "mongodb://my-new-user:Coolguy32@my-first-mlab-db-shard-00-00-vmc3g.mongodb.net:27017,my-first-mlab-db-shard-00-01-vmc3g.mongodb.net:27017,my-first-mlab-db-shard-00-02-vmc3g.mongodb.net:27017/test?ssl=true&replicaSet=my-first-mlab-db-shard-0&authSource=admin&retryWrites=true";
exports.PORT = process.env.PORT || 8080;