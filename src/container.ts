import "reflect-metadata";
import { Container, interfaces } from "inversify";

import {
  CepProvider,
  CEP_PROVIDER,
  PROVIDER_SERVICE,
} from "./providers/cep_provider.interface";
import { ViaCepGateway } from "./providers/viaCepProvider/viaCep.gateway";
import { ProviderService } from "./providers/ProviderService";

const container = new Container();

container
  .bind<CepProvider>(CEP_PROVIDER)
  .to(ViaCepGateway)
  .whenTargetNamed("VIA_CEP");


container
  .bind<interfaces.Factory<CepProvider>>("Factory<cepProvider>")
  .toFactory<CepProvider, [string]>((context: interfaces.Context) => {
    return (named: string) => {
      return context.container.getNamed<CepProvider>(
        CEP_PROVIDER,
        named
      );
    };
  });
container.bind<ProviderService>(PROVIDER_SERVICE).to(ProviderService);

export { container };
