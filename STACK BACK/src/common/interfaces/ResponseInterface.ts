export interface ResponseInterface {
  etat: boolean,
  error?: Error,
  access_token ? : JsonWebKey["alg"]
}

export interface ResponseJwt {
  access_token ? : JsonWebKey["alg"]
}