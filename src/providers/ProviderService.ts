import { Cep, CEP_PROVIDER, ProviderCepResult } from "./cep_provider.interface";
import { CepProvider } from "./cep_provider.interface";
import { inject, injectable } from "inversify";

@injectable()
export class ProviderService {
  constructor(
    @inject("Factory<cepProvider>")
    private readonly factory: (name: string) => CepProvider
  ) {}

  public async findCepOnProvider(cep: Cep): Promise<ProviderCepResult> {
    const provider = this.factory("VIA_CEP");
    return await provider.findCepOnProvider({ cep: "85858430" });
  }
}
