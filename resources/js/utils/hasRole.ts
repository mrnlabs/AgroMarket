import { Role } from "@/types";

/**
 * Checks if a given role name exists within a list of roles.
 *
 * @param roles - An array of Role objects to search within.
 * @param roleName - The name of the role to look for.
 * @returns True if the role name is found, otherwise false.
 */

export const hasRole = (roles: Role[], roleName: string) => {
    return roles.some(role => role.name === roleName);
}