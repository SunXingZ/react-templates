import React, { useEffect, useCallback, useRef } from 'react';
import { createForm } from 'rc-form';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { AppContainer } from 'components';

const Login = createForm()((props) => {
	const { form, history } = props;
	const { getFieldProps } = form;
	const inputRef = useRef(null);
	const autoFocusRef = useRef(null);

	useEffect(() => {
		autoFocusRef.current.focus();
	}, []);

	const handleClick = useCallback(
		(e) => {
			Toast.success(inputRef.current.state.value, 2);
			localStorage.setItem('user', '123');
			history.replace('/home');
		},
		[history]
	);

	return (
		<AppContainer>
			<List>
				<InputItem {...getFieldProps('account')} clear placeholder="请输入账户名" ref={autoFocusRef}>
					账户名
				</InputItem>
				<InputItem {...getFieldProps('password')} clear placeholder="请输入密码" ref={inputRef}>
					密码
				</InputItem>
				{/* <List.Item>
          <Button type="primary" size="small" onClick={handleClick}>登录</Button>
        </List.Item> */}
				<Button type="primary" size="small" onClick={handleClick}>
					登录
				</Button>
			</List>
		</AppContainer>
	);
});

export default Login;
