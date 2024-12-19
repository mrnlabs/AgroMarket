export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type Category = {
    id?: number;
    name: string;
    image?: string;
    created_at: string;
    updated_at: string;
}

export type CategoriesTableProps = {
    categories: Category[];
}

export type Task = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export type Role = {
    id: number;
    name: string;
    users_count: number;
    created_at: string;
    updated_at: string;
}

export type RolesIndexProps = {
    roles: PaginatedRoles;
    categories?: Category[];
    auth: {
        user: {
        id: number;
        name: string;
        // Add other user properties
        };
    };
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
