# Clone git repo using command:
git clone *https://github.com/Unresistible/webdriver-io-test.git*

# Install Node.js version 16 or higher:
npm install node@latest

For Windows download and install separate installation file for npm or nvm from official site

# Install Node.js packages:
npm install

# Run all tests:
npm run wdio

# Run a single test:
npx wdio run ./*wdio.conf.js* --spec *myProfile.e2e.js*

# Modify configuration settings in the *wdio.conf.js* file as needed.