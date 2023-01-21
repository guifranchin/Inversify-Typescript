import { ProviderCepResult } from "../cep_provider.interface";
import { ViaCepResponse } from "./viaCep.interface";

export class ViaCepAdapter {
  public static adapterResponseFindCep(cep: ViaCepResponse): ProviderCepResult {
    return {
      cep: cep.cep,
      estado: cep.uf,
      cidade: cep.localidade,
      bairro: cep.bairro,
      logradouro: cep.logradouro,
    };
  }
}
