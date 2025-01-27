export interface User {
    id?: number;
    first_name: string;
    email: string;
    last_name: string;
    phone: string;
    alt_phone: string;
    photo_path?: string;
    cover_photo?: string;
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
    product?: {
        image: string;  
        title?: string;
        slug?:string;  
      }[];
      permissions?: Permission[];
    store?: Store
    slug?: string;
    created_at: string;
}

export interface Permission {
    name: string;
    description?: string;
}

export type StoreDocuments = {
    id?: number;
    storeName?: string;
    store_id?: number;
    document_type: string;
    document_path: string;
    document_name: string;
    store?: Store;
    created_at: string;
    updated_at: string;
}

export type StoreDocumentsProps ={
    store?: Store;
    doc?: StoreDocuments;
    docs?: StoreDocuments[];
}

export interface Store {
    id?: number;
    name: string;
    address: string;
    description: string;
    image?: string;
    cover_image?: string;
    status: string;
    store_images?: StoreImages[];
    store_documents?: StoreDocuments[];
    user?: {
        id?: number;
        slug?: number;
        first_name: string;
        last_name: string;
    };
    slug?: string;
    created_at: string;
}

export type StoreCardProps ={
    stores?: Store[];
    store: Store;
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
    products_count?: number;
    image?: string;
    created_at: string;
    updated_at: string;
}

export type CategoriesTableProps = {
    categories: Category[];
}

export type ProductCardProps = {
    product: Product;
    products?: Product[];
    store?: Store;
}

export type Product = {
    id?: number;
    title: string;
    description: string;
    price: number;
    quantity: number;
    image?: string;
    images?: ProductImages[];
    is_on_sale?: number;
    sale_price?: number;
    minimum_order?: number;
    is_featured?: number;
    stock_status?: string;
    short_description?: string;
    store?: Store;
    categories?: {
        product_id: string;  
        category_id: string; 
      }[];
        user: {
        id?: number;
        slug?: number;
        first_name: string;
        last_name: string;
    };
    slug?: string;
    created_at: string;
}

export type ProductImages = {
    id?: number;
    image: string;
    product_id: number;
    created_at: string;
    updated_at: string;
}
export type StoreImages = {
    id?: number;
    image: string;
    store_id: number;
    created_at: string;
    updated_at: string;
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
    guard_name: string;
    created_at: string;
    updated_at: string;
    users_count?: number;
    pivot: {
      model_type: string;
      model_id: number;
      role_id: number;
    };
    permissions?: Permission[];
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


interface Filters {
    search: string;
    store: string;
    status: string;
  }

  interface QueryParams {
    [key: string]: string;
  }

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
