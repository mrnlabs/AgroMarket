export interface User {
    id?: number;
    first_name: string;
    email: string;
    last_name: string;
    phone: string;
    alt_phone: string;
    photo_path?: string;
    location?: string;
    is_active: number;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zip_code?: string;
    roles: Role[];
    bio?: string;
    coordinates?: string;
    slug?: string;
    created_at: string;
}

export type UserCardProps = {
    user: User;
  }
  interface UsersProps {
    users: UserCardProps[];
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
