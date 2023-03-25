# Statement

* You have to display a dashboard for a webthing. The webthing is `termometer.js`, which you can run using `node termometer.js` and check its address at `localhost:8080`.
* The dashboard should be able to read the first property of the webthing and display the name of the property and its value, which will be updated every second.
* Additionally, you should read the first action and display its name and allow the user to act on it.
* You do not need to check for the validity of the action input.
* Use the following libraries and versions (they are already included in the `package.json`):
    ```
    "@node-wot/binding-http": "^0.8.3",
    "@node-wot/browser-bundle": "^0.8.3",
    "@node-wot/core": "^0.8.3"
    ```
## Resources
* [WoT Scripting API](https://www.w3.org/TR/wot-scripting-api/)
* [thingweb/node-wot](https://github.com/eclipse/thingweb.node-wot)

## Solution
Check the [following demo](https://www.loom.com/share/e8246bdc5375472984a861aae7ca29c4). 