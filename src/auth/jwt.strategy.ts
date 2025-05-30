// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

/**
 * Initializes the JWT strategy for authentication.
 *
 * Configures the strategy to extract JWT tokens from the Authorization header as a Bearer token,
 * does not ignore token expiration, and uses a secret key for verifying the token's signature.
 *
 * @remarks
 * In production, the secret key should be stored securely, such as in environment variables,
 * instead of hardcoding it in the source code.
 */

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_jwt_secret_key', // use env vars in production!
    });
  }

  async validate(payload: any) {
    // This is the decoded JWT payload
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
