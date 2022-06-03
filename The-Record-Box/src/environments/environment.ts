export const environment = {
  production: false,
   dynamoURL :'https://ahx9a7f274.execute-api.eu-west-1.amazonaws.com/beta',
   cartUrl: 'https://th4m6xiioa.execute-api.eu-west-1.amazonaws.com/beta/cart',
   LoginUrl:'https://recordboxstore.auth.eu-west-1.amazoncognito.com/login?client_id=tp8bd9a9po1s5769bl8t12t30&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=http://localhost:4200/login',
  logOutUrl:'https://recordboxstore.auth.eu-west-1.amazoncognito.com/logout?client_id=tp8bd9a9po1s5769bl8t12t30&response_type=token&scope=aws.cognito.signin.user.admin+email+openid&logout_uri=http://localhost:4200/Home',
};
