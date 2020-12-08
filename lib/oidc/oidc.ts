import axios from 'axios';

export type OpenIdConfiguration = {
    tokenEndpoint: string;
}

export const getOpenIdConfiguration = async (baseUrl: string) => {
    const response = await axios.get(`${baseUrl}/.well-known/openid-configuration`);
    return {
        tokenEndpoint: response.data.token_endpoint
    };
}