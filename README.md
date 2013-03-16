# trak.io

trak.io is a software management tool built as an exercise in learning [rails-api](https://github.com/rails-api) with [ember-js](https://github.com/emberjs).

## Setup

    $ git clone ssh://git@bitbucket.org/benburton/trakio.git
    $ cd trakio
    $ bundle
    $ rake db:create db:schema:load
    $ rails s

## Testing

The Rails API portion of the application has its tests written using [RSpec](https://github.com/rspec/rspec). Run them using the following:

    $ rspec spec


Tests for the Javascript client portion of the application are written using [Jasmine](https://github.com/pivotal/jasmine), and are run using the extremely useful [jasminerice](https://github.com/bradphelan/jasminerice) gem.

You can run the Jasmine tests in-browser by starting up the application and navigating to [http://localhost:3000/jasmine](http://localhost:3000/jasmine). Tests can also be run headlessly using the [guard-jasmine](https://github.com/netzpirat/guard-jasmine) gem from the command line.
First, install [phantom-js](https://github.com/ariya/phantomjs). On OS X, assuming you have [homebrew](https://github.com/mxcl/homebrew), this is as easy as:

    $ brew install phantomjs

After phantomjs is installed, run the tests by simply executing guard-jasmine:

    $ guard-jasmine
    14:27:49 - INFO - Guard::Jasmine starts webrick spec server on port 55703 in test environment (coverage off).
    14:27:52 - INFO - Waiting for Jasmine test runner at http://localhost:55703/jasmine
    14:27:52 - INFO - Run all Jasmine suites
    14:27:52 - INFO - Run Jasmine suite at http://localhost:55703/jasmine
    14:27:54 - INFO - Finished in 0.005 seconds
    14:27:54 - INFO - Trakio.Comment
    14:27:54 - INFO -   #createdAtString
    14:27:54 - INFO -     ✔ should be a tautology
    14:27:54 - INFO - 1 spec, 0 failures
    14:27:54 - INFO - Done.
    14:27:54 - INFO - Guard::Jasmine stops server.