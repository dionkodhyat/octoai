export type User = {
    id: string;
    createdAt: string;
    name: string;
    avatar: string;
};

export enum SortUsersBy  {
    id = 'id',
    createdAt = 'createdAt',
    name = 'name',
}

export enum SortDirection {
    ASC = "ASCENDING",
    DESC = "DESCENDING"
}