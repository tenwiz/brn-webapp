var fs = require('fs');
var MailChimpAPI = require('mailchimp').MailChimpAPI;

Meteor.methods({
  'getMarkdown': (filename) => {
    console.log('FILENAME', filename);
    let parts = filename.split('/');
    let name = parts[parts.length-1];
    check(filename, String);
    let file;
    if (process.env.NODE_ENV == 'development'){
      let path = process.cwd().split('.')[0];
      console.log('PATH', path);
      file = fs.readFileSync(`${path}private/${filename}`, 'utf8');
    } else {
      file = fs.readFileSync(`/home/tom/build-react-native/${name}`, 'utf8');
    }
    return file;
  },
  'chargeCard': (options) => {
    console.log('OPTIONS', options);
    check(options, {
      token : String,
      metadata: Object,
      user : Object,
    });
    var Stripe = StripeAPI(Meteor.settings.STRIPE_SECRET_KEY);
    var res = Stripe.charges.create({
      amount: 2500,
      receipt_email: options.user.emails[0].address,
      currency: 'usd',
      source: options.token,
      description: "Pre-ordered Access to Build React Native",
      metadata: options.metadata
    })
    return res;
  },
  'updateAccount': (userId) => {
    check(userId, String);
    console.log('UPDATE USER ACCT', userId);
    Meteor.users.update({_id: userId}, {$set: { subscribed: true }})
    Roles.addUsersToRoles(userId, ['subscribed'])
  },
  listSubscribe(listId, email) {
    try {
        var api = new MailChimpAPI(Meteor.settings.MAILCHIMP_KEY, { version : '2.0' });
    } catch (error) {
        console.log(error.message);
    }

    var mcReq = {
        id: listId,
        email: { email: email },
        merge_vars: {
            EMAIL: email
        },
        double_optin: false
    };

    api.call('lists', 'subscribe', mcReq, function (error, data) {
        if (error)
            console.log(error.message);
        else
            console.log('Successfully subscribed to MailChimp list!');
            console.log(JSON.stringify(data)); // Do something with your data!
    });

  }
})
