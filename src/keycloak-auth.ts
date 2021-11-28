import { RNKeycloak } from './keycloak';

const keycloak = new RNKeycloak({
  url: 'https://sso.dev.utg.group/auth',
  realm: 'utg-group',
  clientId: 'clients-mobile',
});

export default keycloak;
