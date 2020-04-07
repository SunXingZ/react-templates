import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { PagesConfigs, Layout } from 'pages';

const AppRoutes = ({ location }) => {
	const { pathname } = location;
	const user = localStorage.getItem('user');
	return (
		<Layout>
			<Switch>
				{PagesConfigs.map((page) => {
					// 需要鉴权的页面如果未登录则跳转首页
					if (page.auth && !user) {
						return <Redirect key={page.path} from={page.path} to="/login" />;
					}
					// 默认重定向到首页
					if (pathname === '/') {
						return <Redirect key={page.path} to="/home" />;
					}
					return <Route exact key={page.path} path={page.path} component={page.component} />;
				})}
			</Switch>
		</Layout>
	);
};

export default withRouter(AppRoutes);
