module.exports = function(app,Post)
{
  // GET ALL Posts
  app.get('/api/posts', function(req,res){
    Post.find(function(err, posts){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(posts);
    })
});

  //Get Single Post
  app.get('/api/posts/:post_id', function(req, res){
    Post.findOne({_id: req.params.post_id}, function(err, post){
        if(err) return res.status(500).json({error: err});
        if(!post) return res.status(404).json({error: 'post not found'});
        res.json(post);
      })
  });

  //Create Post
  app.post('/api/posts',function(req,res){
    var post = new Post();
    post.title = req.body.title;
    post.author = req.body.author;
    post.posted_date = new Date(req.body.posted_date);
    post.content = req.body.content;

    post.save(function(err){
      if(err){
        console.error(err);
        res.json({result: 0});
        return;
      }
      res.json({return: 1});
    });
  });

  //Update Post
  app.put('/api/posts/:post_id',function(req,res){
    Post.update({_id:req.params.post_id},{$set: req.body},function(err,output){
      if(err) res.status(500).json({error: 'database failure'});
      console.log(output);
      if(!output.n) return res.status(404).json({error: 'post not found'});
      res.json({message: 'post updated'});
    })
  });

  //Delete Post
  app.delete('/api/posts/:post_id',function(req,res){
    Post.remove({_id:req.params.post_id},function(err,output){
      if(err) return res.status(500).json({error: "database failure"});
      res.status(204).end();
    })
  })
}