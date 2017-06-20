# can-use-webview

Detect if you can use electron's `<webview>

## Why is not [is-electron](https://github.com/cheton/is-electron "is-electron")?

- [is-electron](https://github.com/cheton/is-electron "is-electron") return false if `nodeIntegration:false`
- `can-use-webview` return true if `nodeIntegration:false` and `webviewTag:true`

## Install

Install with [npm](https://www.npmjs.com/):

    npm install can-use-webview

## Usage

```ts
import {canUseWebView} from "can-use-webview"
canUseWebView(); // true or false
```

## Changelog

See [Releases page](https://github.com/azu/can-use-webview/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/can-use-webview/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
