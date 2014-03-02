# Domain Switcher

A simple Chrome extension for easily switching the domain name of the current tab. This extension is handy when you need to review content hosted under the same path, across several domains. Example: reviewing localized or QA versions of a page.

## Prerequisites

This Chrome extension was created with [Yeoman](https://github.com/yeoman/yeoman) and the [generator-chrome-extension](https://github.com/yeoman/generator-chrome-extension) generator. 

You should have the following installed:

- [Node.js](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)
- [Ruby](http://ruby-lang.org/)
- [Compass](http://compass-style.org/install)

## Using and Contributing

To get started:

**1\.** Clone the repository:

```bash
git clone --recursive git@github.com:kdwolski/domain-switcher.git
cd domain-switcher
```

**2\.** Install all modules and needed tools

```bash
npm install
bower install
```
**3\.** Build Process:
```bash
grunt build
```
**4\.** Install the extension in Chrome:
- Open Chrome extensions panel, chrome://extensions/
- Make sure 'Developer mode' option is checked
- Using the 'Load unpacked extension' button, select the newly generated 'dist' directory. 

## Notes
- Define the available domains in the extension's option page. Right click on extension icon and select 'Options'.
- If you want to modify the current version, you should use the `/app` directory when installing the extension in Development mode, otherwise you will have to build each time to see your changes.

## Credits
- [Batch](http://adamwhitcroft.com/batch/) icon set 

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
