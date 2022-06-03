export const environment = {
  production: false,
  dynamon:{
    dynamoURL:'https://th4m6xiioa.execute-api.eu-west-1.amazonaws.com/beta/',
  cartUrl: 'https://th4m6xiioa.execute-api.eu-west-1.amazonaws.com/beta/cart',
  LoginUrl:'https://the-record-box-login.auth.eu-west-1.amazoncognito.com/login?client_id=4bucb39n2tllqmr3stb9mvcc6o&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=http://localhost:4200/account',
  logOutUrl:'https://the-record-box-login.auth.eu-west-1.amazoncognito.com/logout?client_id=4bucb39n2tllqmr3stb9mvcc6o&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&logout_uri=http://localhost:4200/Home'  
 }
};
