import React, {FC} from 'react';

import './Layout.css'
import {Route, Routes} from "react-router-dom";
import Stories from "./pages/stories";
import SingleStoryWithComments from "./pages/single-story-with-comments";
import Header from "./components/header/header";

const Layout: FC = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route element={<Stories />} index />
                <Route element={<SingleStoryWithComments />} path='story/:id' />
            </Routes>
        </div>
    );
};

export default Layout;