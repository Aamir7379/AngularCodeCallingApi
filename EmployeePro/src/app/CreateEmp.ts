export interface Employee {
    // id: const;
    username: string;
    password: string;
    role: string;
    emailId: string;
}

export interface Login {
    emailId: string;
    password: string;
}