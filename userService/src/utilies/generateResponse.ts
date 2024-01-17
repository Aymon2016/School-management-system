


interface TransformedMember {
    id: string;
    userName: string;
    email: string;
    role: string;
}

const transformMemberData = (users: TransformedMember[]): TransformedMember[] => {
    return users.map((item) => ({
        id: item.id,
        userName: item.userName,
        email: item.email,
        role: item.role,
    }));
};

export { transformMemberData };
