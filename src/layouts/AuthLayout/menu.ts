import { NavigationLink } from "types/general";


export const navLinks: NavigationLink[] = [
    {
        isGroup: true,
        name: 'Users',
        to: '/users',
        imgIcon: '/assets/img/menu-users.svg',
        inactive: true,
        subItems: [
            {
                isGroup: false,
                name: 'Add User',
                to: '/users/add',
            },
        ]
    },
]

export const minNavLinks = navLinks.reduce((prev, curr: NavigationLink) => [...prev, curr, ...(curr.subItems ?? [])], [] as NavigationLink[])