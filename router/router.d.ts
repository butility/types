declare abstract class View {
    abstract render(params: Record<string, string>): void;
}

declare class Router {
    private routes;
    private defaultRoute;
    private metas;
    constructor(routes: Routes);
    set404(handler: RouteHandler): void;
    loadRoute(path: string): void;
    navigate(path: string): void;
    meta(route: string, meta: RouteMeta): void;
    private matchDynamicRoute;
    private extractParams;
    private pathToRegex;
    private render;
    private getAdjustedPath;
    private updateMeta;
}

type RouteHandler =
    | string
    | HTMLElement
    | ((params: Record<string, string>) => HTMLElement);
type Routes = Record<string, RouteHandler>;

type RouteMeta = {
    title?: string;
    description?: string;
    keywords: string[];
};

export { Router as default, View };
