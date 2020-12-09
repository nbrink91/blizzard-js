import * as oidc from './oidc';
import 'mocha';
import axios from 'axios';
import * as sinon from 'sinon';
import 'chai/register-should';

describe('getOpenIdConfiguration', () => { 
  it('should return config', async () => { 
    const expectedResults = {
      data: {
        token_endpoint: 'myValue'
      }
    };

    const baseUrl = 'http://localhost';

    const getStub = sinon.stub(axios, 'get');
    getStub.withArgs(`${baseUrl}/.well-known/openid-configuration`).returns(Promise.resolve(expectedResults));

    const result = await oidc.getOpenIdConfiguration(baseUrl)

    getStub.restore();

    getStub.calledOnce.should.be.true;
    result.tokenEndpoint.should.equal(expectedResults.data.token_endpoint);
  }); 
});