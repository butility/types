export { ThemeManager as default };

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
