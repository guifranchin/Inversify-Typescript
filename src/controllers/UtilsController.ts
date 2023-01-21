import { Response, Request } from "express";
import { container } from "../container";
import { CepProvider, CEP_PROVIDER, PROVIDER_SERVICE } from "../providers/cep_provider.interface";
import { ProviderService } from "../providers/ProviderService";


export default class UtilsController {

  static getCep = async (req: Request, res: Response) => {
    try {
      const provider = container.get<ProviderService>(PROVIDER_SERVICE)

      res.send(await provider.findCepOnProvider(req.query.cep));
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  };

}
