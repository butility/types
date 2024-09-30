export { Font, CSS, Color, Style };

declare namespace Style {
    export { calculateLuminance }
    export { colorBrightness }
    export { colorContrast }
    export { darkenColor }
    export { generateColorGradient }
    export { generateRandomColor }
    export { hexToRgb }
    export { hueToRgb }
    export { invertColor }
    export { lightenColor }
    export { mixColors }
    export { rgbToHex }
    export { rgbToHsl }
    export { hexToRgba }
    export { hslToRgb }
    export { rgbaToHex }
    export { ThemeManager }
    export { setStateBasedStyle }
    export { loadWebFont }
    export { loadWebFontAsync }
    export { addStyles }
    export { removeStylesByProps }
    export { resetStyles }
    export { load }
    export { loadAsync }
    export { getAllStyles }
}

interface ThemeConfig {
    [themeName: string]: {
        [key: string]: string;
    };
}

declare class ThemeManager {
    private themes: ThemeConfig;
    private currentTheme: string | null;
    
    constructor(initialThemes: ThemeConfig);
    
    createTheme(name: string, theme: string): void;
    setTheme(name: string): void;
    getCurrentTheme(): string | null;

    private loadThemeFromStorage(): void;
    private detectSystemTheme(): void;
    private watchSystemTheme(): void;
}

type State = 'hover' | 'active' | 'focus' | 'click' | 'custom'; // Add more states as needed
type StateStyleConfig = {
    [key in State]: CSSStyleDeclaration | CustomEvent;
};

declare function setStateBasedStyle(element: HTMLElement, config: StateStyleConfig): void;

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


declare namespace Color {
    export { calculateLuminance }
    export { colorBrightness }
    export { colorContrast }
    export { darkenColor }
    export { generateColorGradient }
    export { generateRandomColor }
    export { hexToRgb }
    export { hueToRgb }
    export { invertColor }
    export { lightenColor }
    export { mixColors }
    export { rgbToHex }
    export { rgbToHsl }
    export { hexToRgba }
    export { hslToRgb }
    export { rgbaToHex }
}

export function calculateLuminance(color: string): number;
export function colorBrightness(color: string): number;
export function colorContrast(color1: string, color2: string): number;
export function darkenColor(color: string, percentage: number): string;
export function generateColorGradient(startColor: string, endColor: string, steps: number): string[];
export function generateRandomColor(): string;
export function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
};
export function hexToRgba(hex: string, a: number): string | null;
export function hslToRgb(hue: number, saturation: number, lightness: number): {
    r: number;
    g: number;
    b: number;
};
export function hueToRgb(p: number, q: number, t: number): number;
export function invertColor(color: string): string;
export function lightenColor(color: string, percentage: number): string;
export function mixColors(color1: string, color2: string, weight: number): string;
export function rgbToHex(r: number, g: number, b: number): string;
export function rgbToHsl(red: number, green: number, blue: number): {
    h: number;
    s: number;
    l: number;
};
export function rgbaToHex(r: number, g: number, b: number, a: number): string;
