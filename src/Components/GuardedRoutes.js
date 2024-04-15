import { Navigate, Outlet } from 'react-router-dom';


const GuardedRoute = ({
	isRouteAccessible,
	redirectRoute = '/',
    route
}) =>
	isRouteAccessible ? route: <Navigate to={redirectRoute} replace />;

export default GuardedRoute;