import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
    layout('routes/admin/admin-layout.tsx', [
        route('dashboard','routes/admin/dashboard.tsx'), // تظهر عند الدخول لمسار الـ layout مباشرة
        route('all-users','routes/admin/all-users.tsx'), // تظهر عند الدخول لمسار الـ layout مباشرة

    ]),
] satisfies RouteConfig;