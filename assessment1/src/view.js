import React from 'react'
import {Routes, Route} from 'react-router-dom'
import routes from './routes'
import Profile from './Profile'
import Billing from './Billing'
import Confirm from './Confirm'
import Completed from './Completed'

const View = () => {
    return (
        <Routes>
            <Route path = {routes.Profile} element = {<Profile />} />
            <Route path = {routes.Billing} element = {<Billing />} />
            <Route path = {routes.Confirm} element = {<Confirm />} />
            <Route path = {routes.Completed} element = {<Completed />} />
        </Routes>
    )
}

export default View