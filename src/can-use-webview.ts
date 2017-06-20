// MIT © 2017 azu
export function canUseWebView(): boolean {
    const webview = document.createElement('webview') as any;
    return typeof webview.src !== "undefined" && typeof webview.webpreferences !== "undefined";
}