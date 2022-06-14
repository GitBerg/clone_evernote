import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesIndexScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'

import PrivateRouter from './components/auth/private_router'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/register" element={<RegisterScreen />} />
            <Route exact path="/login" element={<LoginScreen />} />
            <Route element={<PrivateRouter />}>
                <Route exact path="/notes" element={<NotesIndexScreen />} />
            </Route>
            <Route element={<PrivateRouter />}>
                <Route exact path="/users/edit" element={<UserEditScreen />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRoutes;