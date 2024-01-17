interface TransformedMember {
    id: string;
    userName: string;
    email: string;
    role: string;
}
declare const transformMemberData: (users: TransformedMember[]) => TransformedMember[];
export { transformMemberData };
