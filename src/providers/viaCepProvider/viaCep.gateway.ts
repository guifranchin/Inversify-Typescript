import { Cep, CepProvider, ProviderCepResult } from "../cep_provider.interface";
import axios, { AxiosResponse } from "axios";
import { ViaCepAdapter } from "./viaCep.adapter";
import dotenv from "dotenv";
import { injectable } from "inversify";
dotenv.config();

const { URL_VIACEP } = process.env;

@injectable()
export class ViaCepGateway implements CepProvider {
  private static instance: ViaCepGateway;

  public static async init(): Promise<ViaCepGateway> {
    if (!ViaCepGateway) {
      ViaCepGateway.instance = new ViaCepGateway();
    }
    return ViaCepGateway.instance;
  }

  public async findCepOnProvider(cep: Cep): Promise<ProviderCepResult> {
    const response = await axios({
      method: "get",
      url: `${URL_VIACEP}${cep.cep}/json/`,
    });

    if (response && response.data.hasOwnProperty("erro"))
      throw new Error("Unable to find CEP VIA CEP:" + response.data);

    return ViaCepAdapter.adapterResponseFindCep(response.data);
  }
  catch(error: any) {
    if (error.response)
      if (error.response.status < 200 || error.response.status >= 300) {
        console.log(`ViaCep response (${error.message})`, error.response.data);
        throw new Error(`VIACEP API responded with error (${error.message})`);
      }
  }
}
