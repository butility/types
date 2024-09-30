
declare namespace CSS {
    export { addStyles };
    export { removeStylesByProps };
    export { resetStyles };
    export { load };
    export { loadAsync };
    export { getAllStyles };
}

interface StyleResult {
    cssText: string;
    styleObject: { [selector: string]: { [property: string]: string } };
    inlineCss: { [selector: string]: string };
    camelCaseObject: { [selector: string]: { [property: string]: string } };
    hyphenatedObject: { [selector: string]: { [property: string]: string } };
}

export function addStyles(elements: HTMLElement | HTMLElement[], styles: CSSStyleDeclaration): void;
export function getAllStyles(element: HTMLElement): CSSStyleDeclaration;
export function load(url: string): StyleResult;
export function loadAsync(url: string): Promise<StyleResult>;
export function removeStylesByProps(element: HTMLElement, ...properties: string[]): void;
export function resetStyles(element: HTMLElement, styles: CSSStyleDeclaration): void;

export { CSS as default };
