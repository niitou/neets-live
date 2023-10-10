import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './Pages/MainPage';
import AboutUsPage from './Pages/AboutUsPage';
import ErrorPage from './Pages/ErrorPage';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/about/",
		element: <AboutUsPage />,
		errorElement : <ErrorPage/>
	}
])

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
