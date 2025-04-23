// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // read token from header
      ignoreExpiration: false,
      secretOrKey: 'SECRET_KEY', // same as used in JwtModule
    });
  }

  async validate(payload: any) {
    // yahaan payload me wahi aata hai jo tu login ke time bhejta hai
    return { userId: payload.id, email: payload.email };
  }
}
