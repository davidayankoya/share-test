import React, { Suspense, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import AuthMiddleware from "middlewares/AuthMiddleware";
import GuestMiddleware from "middlewares/GuestMiddleware";
import AuthLayout from "layouts/AuthLayout/AuthLayout";
import FullScreenLayout from "layouts/FullScreenLayout";
import Loader from "common/Loader/Loader";
import ErrorPage from "common/Error/ErrorPage";
import LayoutUtilities from "layouts/LayoutUtilities";
const params = { locale: 'en' }


const AppRoutes = React.memo(() => {
    const renderRoutes = useMemo(() =>
        routes.map((route, index) =>
            route.auth ? (
                <Route key={index} path={route.path} element={
                    <AuthMiddleware redirectTo='/login' params={params}>
                        <AuthLayout params={params}>
                            <route.component/>
                        </AuthLayout>
                    </AuthMiddleware>
                    }
                />
            ) : (
                <Route key={index} path={route.path} element={
                    <GuestMiddleware redirectTo={route.redirect ?? ''} params={params}>
                        <FullScreenLayout params={params}>
                            <route.component/>
                        </FullScreenLayout>
                    </GuestMiddleware>
                    }
                />
            )
        )
    , [])

    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <LayoutUtilities />
                <Routes>
                    {renderRoutes}
                    <Route path='*' element={<ErrorPage/>} />        
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
})

export default AppRoutes