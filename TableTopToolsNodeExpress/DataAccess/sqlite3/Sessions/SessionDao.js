var SessionDao = /** @class */ (function () {
    function SessionDao() {
    }
    SessionDao.prototype.openConnection = function () {
        var sqlite3 = require('sqlite3').verbose();
        this.db = new sqlite3.Database(':memory:');
    };
    SessionDao.prototype.closeConnection = function () {
        this.db.close(function (err) {
            if (err) {
                return console.error(err.message);
            }
        });
    };
    return SessionDao;
}());
//# sourceMappingURL=SessionDao.js.map