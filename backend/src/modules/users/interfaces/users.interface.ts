export enum UserRoles {
	ADMIN = "admin",
	USER = "user"
}

export interface IUser {
	userId: string;
	email: string;
	password: string;
	role: UserRoles
}