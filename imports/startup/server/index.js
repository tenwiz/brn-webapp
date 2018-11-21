import React from 'react';
import marked from 'marked';

Meteor.startup( () => {
  let users = Meteor.users.find({
    'profile.subscribed': true
  }).fetch();
  console.log('LOGGED SUBSCRIBERS', users.map(function(user){ return user.emails[0].address }))
  users.forEach(function(user){
    Meteor.users.update({ _id: user._id }, {
      $set: {
        roles: [ 'subscribed', 'subscriber' ]
      }
    })
  })
});
