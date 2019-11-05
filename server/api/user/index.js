module.exports = function(app,User)
{
  //Create User
  app.post('/api/users',function(req,res){
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.password = req.body.password;
    user.email = req.body.email;
    user.permissionLevel = req.body.permissionLevel;

    user.save(function(err){
      if(err){
        console.error(err);
        res.json({result: 0});
        return;
      }
      res.json({return: 1});
    });
  });


}