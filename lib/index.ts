import * as oidc from './oidc/oidc';

const baseUrl = 'https://us.battle.net/oauth';

oidc.getOpenIdConfiguration(baseUrl).then(x => console.log(x));