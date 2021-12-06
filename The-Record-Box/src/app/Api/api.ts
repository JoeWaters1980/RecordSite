import { environment } from "src/environments/environment";

// export const baseURl= environment.production ? 'https://th4m6xiioa.execute-api.eu-west-1.amazonaws.com/Test/': 'http//localhost:4200'
export const dynamoURL ='https://th4m6xiioa.execute-api.eu-west-1.amazonaws.com/Test/';
export const cartUrl= 'https://th4m6xiioa.execute-api.eu-west-1.amazonaws.com/Test/cart';
export const LoginUrl='https://the-record-box.auth.eu-west-1.amazoncognito.com/login?client_id=7u7om8dajnpknpujta0phif86&response_type=code&scope=phone+email+openid+aws.cognito.signin.user.admin+profile&redirect_uri=http://localhost:4200';