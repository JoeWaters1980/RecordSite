import { environment } from "src/environments/environment";

// export const baseURl= environment.production ? 'https://th4m6xiioa.execute-api.eu-west-1.amazonaws.com/beta/': 'http//localhost:4200'
export const dynamoURL ='https://ahx9a7f274.execute-api.eu-west-1.amazonaws.com/beta/';
export const cartUrl= 'https://th4m6xiioa.execute-api.eu-west-1.amazonaws.com/beta/cart';
export const LoginUrl='https://recordboxstore.auth.eu-west-1.amazoncognito.com/login?client_id=tp8bd9a9po1s5769bl8t12t30&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Faccount';
export const logOutUrl='https://the-record-box-login.auth.eu-west-1.amazoncognito.com/logout?client_id=4bucb39n2tllqmr3stb9mvcc6o&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&logout_uri=http://localhost:4200/Home';

export const dynamoURL1 ='https://ahx9a7f274.execute-api.eu-west-1.amazonaws.com/beta/';
export const cartUrl1= 'https://th4m6xiioa.execute-api.eu-west-1.amazonaws.com/Test/cart';

export const LoginUrl1='https://the-record-box-login.auth.eu-west-1.amazoncognito.com/login?client_id=4bucb39n2tllqmr3stb9mvcc6o&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=http://localhost:4200/account';
export const logOutUrl1='https://the-record-box-login.auth.eu-west-1.amazoncognito.com/logout?client_id=4bucb39n2tllqmr3stb9mvcc6o&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&logout_uri=http://localhost:4200/Home';