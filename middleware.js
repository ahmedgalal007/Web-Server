module.exports  = middleware = {
			requireAuthentication : function (req, res, next) {
				console.log ('Authentication Middleware Executed');
				next();
			},
			logger : function (req, res, next) {
				console.log (req.method);
				next();
			}
		};