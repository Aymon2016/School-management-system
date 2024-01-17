declare const generateToken: (payload: any, algorithm?: string, secret?: string, expiresIn?: string) => Promise<string>;
declare const decodeToken: (token: string, algorithm?: string) => Promise<any>;
declare const verifyToken: (token: string, algorithm?: string, secret?: string) => Promise<any>;
export { generateToken, decodeToken, verifyToken };
