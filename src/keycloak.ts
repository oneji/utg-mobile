import { RNKeycloak } from '@react-keycloak/native';

const keycloak = new RNKeycloak({
  url: 'http://sso.dev.utg.group/auth/',
  realm: 'utg-group',
  clientId: 'clients-mobile',
});

export default keycloak;
