import { Role } from "@/types";
import { usePage } from "@inertiajs/react";

interface RoleGuardProps {
    role: string;
    children: React.ReactNode;
}

export const RoleGuard = ({ role, children }: RoleGuardProps) => {
    const { auth } = usePage().props;
    const hasRole = auth.user.roles.some((r: Role) => r.name === role);
    
    return hasRole ? children : null;
}