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
import {Navigate, Route, Routes} from "react-router-dom";
import {CatalogData} from "../utils";

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
        {path: "/partners", element: <PartnersPage/>},
        {path: "*", element: <Navigate to="/" replace/>}
    ]

    const catalogMenu = CatalogData.map((item, index) => {
        return <>
            <Route path={`/catalog/${item.nameURL}`} element={<CatalogPage/>} key={item.id}/>
            {item.subMenu && item.subMenu.map((el, i) => {
                return <Route path={`/catalog/${item.nameURL}/${el}`} element={<CatalogPage/>} key={i}/>
            })}
        </>
    })



    const routesComponents = routes.map(({path, element}, index) =>
        <Route path={path} element={element} key={index}/>
    )
    const allRoutes = [...routesComponents, ...catalogMenu]

    return (
        <>
            <Routes>
                {allRoutes}
            </Routes>

        </>
    )
}

export default RoutesPage