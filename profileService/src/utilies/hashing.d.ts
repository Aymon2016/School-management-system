declare const generateHash: (payload: string, saltRound?: number) => Promise<string>;
declare const hashMatched: (raw: string, hash: string) => Promise<boolean>;
export { generateHash, hashMatched };
