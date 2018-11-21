import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import MailChimpAPI from 'mailchimp-api/mailchimp';
const apiKey = '5379acc788e0f3320f88dba60327ad23-us13';
let mc = new MailChimpAPI.Mailchimp(apiKey);

Meteor.methods({
  mcSubscribe (email) {
    let mc = new MailChimpAPI.Mailchimp(apiKey);
    let listId = 'f79b3d7a31';
    let mcReq = {
        id: listId,
        email: { email: email},
        double_optin: false,
        merge_vars: {
            EMAIL: email
        }
    };

    mc.lists.subscribe(mcReq, function(data) {
        console.log('Success:', data);
        return data;
    }, function(error) {
        console.log('Error:', error);
        return error;
    });
  },
});
