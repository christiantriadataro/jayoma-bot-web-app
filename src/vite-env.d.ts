/// <reference types="vite/client" />
interface IEnv extends ImportMetaEnv {
    VITE_BASE_URL: string;
    JWT_SECRET
}



interface IJWTTokenProps {
    email: string;
    id: string;
    role: string;
    name: string;
    exp: number;
    iat: number;
}

type IUserProps = Omit<ITokenProps, 'exp' | 'iat'>