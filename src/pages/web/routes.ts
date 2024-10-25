import React from "react";
const Home = React.lazy(() => import('./home'));

const routes = [
    {
        auth: false,
        component: Home,
        path: '/',
    },
]

export default routes