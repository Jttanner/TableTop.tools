class SessionDao{
    db;
    openConnection() {
        var sqlite3 = require('sqlite3').verbose()
        this.db = new sqlite3.Database(':memory:')
    }
    closeConnection() {
        this.db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
        });
    }



}