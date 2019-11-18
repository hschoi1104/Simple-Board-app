const Postwrite = require('../models/postwrite');

module.exports = function(app) {
    // GET ALL BOOKS
    app.get('/api/post', function(req, res) {
        Postwrite.find(function(err, postboard) {
            if (err) return res.status(500).send({ error: 'database failure' });
            res.json(postboard);
        })
    });


    //CREATE BOOK
    app.post('/api/post', function(req, res) {
        var book = new Postwrite();
        book.title = req.body.title;
        book.author = req.body.author;
        book.contents = req.body.contents;
        // book.posted_date = new Date(req.body.posted_date);

        book.save(function(err) {
            if (err) {
                console.error(err);
                res.json({ result: 0 });
                return;
            }
            res.json({ result: 1 });
        });
    });

    //GET SINGLE BOOK
    app.get('/api/post/:post_id', function(req, res) {
        Postwrite.findOne({ _id: req.params.post_id }, function(err, pp) {
            if (err) return res.status(500).json({ error: err });
            if (!pp) return res.status(404).json({ error: 'post not found' });
            res.json(pp);
        })
    });

    //UPDATE THE BOOK
    app.put('/api/post/:post_id', function(req, res) {
        Postwrite.findById(req.params.post_id, function(err, pp) {
            if (err) return res.status(500).json({ error: 'database failure' });
            if (!pp) return res.status(404).json({ error: 'post not found' });

            if (req.body.title) pp.title = req.body.title;
            if (req.body.author) pp.author = req.body.author;
            if (req.body.contents) pp.contents = req.body.contents;

            pp.save(function(err) {
                if (err) res.status(500).json({ error: 'failed to update' });
                res.json({ message: 'book updated' });
            });
        });
    });

    //DELETE BOOK
    app.delete('/api/post/:post_id', function(req, res) {
        Postwrite.remove({ _id: req.params.post_id }, function(err, output) {
            if (err) return res.status(500).json({ error: "database failure" });
            if (!output.result) return res.status(404).json({ error: "post not found" });
            res.json({ message: "post deleted" });

            res.status(204).end();
        })
    });
}

// //GET BOOK BY AUTHOR
// app.get('/api/author/:author', function(req, res) {
//     res.end();
// });

// app.get('/api/portboard/contents/:contents', function(req, res) {
//     res.end();
// });