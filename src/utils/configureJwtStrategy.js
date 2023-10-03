const passport = require('passport');

let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;

const UserService = require('../services/UserService.js');

let opts = {
    
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret', //TODO: SUBSTITUTE
    //issuer: 'test.com',
    //audience: 'localhost.com'

}

passport.use(new JwtStrategy(opts, function(jwtPayload, done){

    console.log(jwtPayload);
    console.log("handling jwt");

    const user = UserService.findUser(jwtPayload.sub);

    if(user){
        return done(null, user);
    }

    return done(null, false);

}));

module.exports = { passport }