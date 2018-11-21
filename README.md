## Running App

-type the command `./meteor-run.sh` - this loads the environment variables for Stripe and runs Meteor with the `--settings` flag
- for the ENV vars to work, you should have a file `stripe_keys.sh` one level up from your root directory
- The `stripe_keys.sh` file should have these variables:
```
  export TEST_SECRET_KEY="YOUR_STRIPE_TEST_KEY"
  export TEST_PUBLIC_KEY="YOUR_STRIPE_PUBLIC_KEY"
  export LIVE_SECRET_KEY="YOUR_STRIPE_LIVE_SECRET"
  export LIVE_PUBLIC_KEY="YOUR_STRIPVE_LIVE_PUBLIC_KEY"
  
```
  
  
