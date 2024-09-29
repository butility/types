declare namespace Font {
    export { loadWebFont as load };
    export { loadWebFontAsync as loadAsync };
}

// Font
type FontDisplayType = 'swap' | 'block' | 'fallback' | 'optional';
interface FontOptions {
    family: string;
    weight?: string;
    style?: string;
    subsets?: string[];
    elements?: string[];
    fallbackFonts?: string[];
    display?: FontDisplayType;
    lazyLoad?: boolean;
    preload?: boolean;
    timeout?: number;
    onLoadSuccess?: () => void;
    onLoadError?: (error: Error) => void;
    observerOptions?: IntersectionObserverInit;
}

export function loadWebFont(options: FontOptions): void;
export function loadWebFontAsync(options: FontOptions): Promise<any>;
export { Font as default };
