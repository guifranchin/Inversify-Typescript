export interface CepProvider {
    findCepOnProvider(cep: Cep): Promise<ProviderCepResult>
} 


export interface Cep {
    cep: string
}

export interface ProviderCepResult {
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    logradouro: string;
}

export const CEP_PROVIDER = Symbol.for("CEP_PROVIDER");
export const PROVIDER_SERVICE = Symbol.for("PROVIDER_SERVICE");