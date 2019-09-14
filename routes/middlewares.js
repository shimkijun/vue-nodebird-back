exports.isLoggedIn = (req, res, next) => {
    if( req.isAuthenticated()){
        return next();
    }
    return res.status(401).send('로그인이 필요합니다.');
}

exports.isNotLoggedIn = (req, res, next) => {
    if( !req.isAuthenticated()){
        return next();
    }
    return res.status(401).send('회원은 이용 할 수 없습니다.');
}