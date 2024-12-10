import {Router as BrowserRouter, Route, Routes} from 'react-router-dom'

const Router = () => {
    return (
        <>
       <BrowserRouter>
       <Routes>
        <Routes path='/'/>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;