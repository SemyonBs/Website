Installation
Prerequisites
Node.js version 6, 7 or 8
A SendGrid account, sign up for free to send up to 40,000 emails for the first 30 days or check out our pricing.
Obtain an API Key
Grab your API Key from the SendGrid UI.

Setup Environment Variables
Do not hardcode your SendGrid API Key into your code. Instead, use an environment variable or some other secure means of protecting your SendGrid API Key. Following is an example of using an environment variable.

Update the development environment with your SENDGRID_API_KEY, for example:

echo "export SENDGRID_API_KEY='YOUR_API_KEY'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env



Troubleshooting
Please see our troubleshooting guide for common library issues.


Announcements
All updates to this library are documented in our CHANGELOG and releases. You may also subscribe to email release notifications for releases and breaking changes.


Roadmap
If you are interested in the future direction of this project, please take a look at our open issues and pull requests. We would love to hear your feedback!


How to Contribute
We encourage contribution to our libraries (you might even score some nifty swag), please see our CONTRIBUTING guide for details.

Feature Request
Bug Reports
Improvements to the Codebase

Troubleshooting
Please see our troubleshooting guide for common library issues.


About
@sendgrid/mail is guided and supported by the SendGrid Developer Experience Team.

@sendgrid/mail is maintained and funded by SendGrid, Inc. The names and logos for @sendgrid/mail are trademarks of SendGrid, Inc.

SendGrid Logo