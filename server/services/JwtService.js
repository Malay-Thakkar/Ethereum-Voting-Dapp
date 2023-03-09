import { JWT_SECRET, REFRESH_SECRET } from '../config';
import jwt from 'jsonwebtoken';

class JwtService {
    static sign(payload, expiry = '2m', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }

    static verify(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret);
    }

    static verifyrefreshtoken(token, secret = REFRESH_SECRET) {
        return jwt.verify(token, secret);
    }

}

export default JwtService;