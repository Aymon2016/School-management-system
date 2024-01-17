import {  UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';



 const generateToken = async(payload: any, secret = 'accesstoken', expiresIn = '1h'):Promise<string>=> {
    try {
      return jwt.sign(payload, secret, {
        expiresIn,
      });
    } catch (e) {
      console.error('[JWT]', e);
      throw new InternalServerErrorException('Token cannot be generated');
    }
  }

  const decodeToken=async(token: string, algorithm = 'HS256'): Promise<any> => {
    try {
      const decoded = jwt.decode(token);
      if (!decoded) {
        throw new InternalServerErrorException('Token cannot be decoded');
      }
      return decoded;
    } catch (e) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  const verifyToken=async(token: string, secret = 'accesstoken'): Promise<any> => {
    try {
      return jwt.verify(token, secret);
    } catch (e) {
      throw new UnauthorizedException('Token is not valid');
    }
  }

export  { generateToken , decodeToken , verifyToken}
