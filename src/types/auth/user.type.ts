


export interface UserResponse {
    id: number;
    customer_id?: string;
    partner_id?: number;
    first_name: string;
    last_name: string;
    email: string;
    contact_number: string;
    reporting_id?: number;
    username: string;
    change_password_status?: string;
    send_password_email?: string;
    company?: string;
    title?: string;
    street_address?: string;
    city?: string;
    state: number;
    status?: number;
    profile_image: any;
    otp?: string;
    mobile_number?: string;
    code?: string;
    role_id: string;
    registration_center_id: number;
    registrar_signature?: string;
    is_new_user?: number;
    updated_at: string;
    created_at: string;
    state_officer_id?: string;
}