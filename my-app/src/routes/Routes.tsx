import React from "react";
import {
    AuthorizationPage,
    BlogPage,
    BonusesPage,
    BrandsPage,
    CatalogPage,
    ClubPage,
    ContactsPage, DeliveryPage,
    HomePage, PartnersPage
} from "../pages";
import {Route, Routes} from "react-router-dom";

const RoutesPage = () => {

    const routes = [
        {path: "/", element: <HomePage/>},
        {path: "/auth", element: <AuthorizationPage/>},
        {path: "/blog", element: <BlogPage/>},
        {path: "/bonuses", element: <BonusesPage/>},
        {path: "/brands", element: <BrandsPage/>},
        {path: "/catalog", element: <CatalogPage/>},
        {path: "/club", element: <ClubPage/>},
        {path: "/contacts", element: <ContactsPage/>},
        {path: "/delivery", element: <DeliveryPage/>},
        {path: "/partners", element: <PartnersPage/>}
    ]

    const routesComponents = routes.map(({path, element}, index) =>
        <Route path={path} element={element} key={index}/>
    )

    return (
        <>
            <Routes>
                {routesComponents}
            </Routes>
        </>
    )
}

export default RoutesPage