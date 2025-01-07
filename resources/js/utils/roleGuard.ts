import { Role } from "@/types";
import { usePage } from "@inertiajs/react";

interface RoleGuardProps {
    roles: string | string[];
    children: React.ReactNode;
}

export const RoleGuard = ({ roles, children }: RoleGuardProps) => {
    const { auth } = usePage().props;

    const roleArray = Array.isArray(roles) ? roles : [roles];    
    const hasRole = auth.user.roles.some((userRole: Role) => roleArray.includes(userRole.name));

    return hasRole ? children : null;
}