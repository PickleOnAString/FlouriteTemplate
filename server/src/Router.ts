import path from 'path';
import fs from 'fs';
import express from 'express';

const loadRoutes = (app: express.Express, basePath: string = '') => {
    const routesDir = path.join(path.resolve(), 'src/routes', basePath);

    fs.readdirSync(routesDir).forEach((file) => {
        const fullPath = path.join(routesDir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Recursively load routes from subdirectories
            loadRoutes(app, path.join(basePath, file));
        } else if (file.endsWith('.ts')) {
            const routePath = path.join(routesDir, file);
            import(routePath).then((route) => {
                const routeName = path.join(basePath, file.replace('.ts', ''));
                app.use(routeName === '' ? '/' : `/${routeName}`, route.default);
            });
        }
    });
};

export default loadRoutes;