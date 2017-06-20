// MIT © 2017 azu
export function canUseWebView(): boolean {
    return !!(document.createElement('webview') as any).src;
}