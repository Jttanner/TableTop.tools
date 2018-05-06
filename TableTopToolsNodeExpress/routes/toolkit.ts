/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/toolkit', (req: express.Request, res: express.Response) => {
    res.render('toolkit.html', { title: 'toolkit' });
});

export default router;