import assert from 'assert';
import {Client} from '../lib';
import nock from 'nock';

describe('subscriptions', () => {
  it('should be listed', done => {
    nock('https://api.intercom.io').get('/subscriptions/').query({ foo: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.webhook.list({ foo: 'bar' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should find', done => {
    nock('https://api.intercom.io').get('/subscriptions/bar').query({ id: 'bar' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.webhook.find({ id: 'bar' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should create', done => {
    nock('https://api.intercom.io').post('/subscriptions/', { baz: 'bang' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.webhook.create({ baz: 'bang' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  it('should update', done => {
    nock('https://api.intercom.io').post('/subscriptions/bar', { id: 'bar', baz: 'bong' }).reply(200, {});
    const client = new Client('foo', 'bar').usePromises();
    client.webhook.update({ id: 'bar', baz: 'bong' }).then(r => {
      assert.equal(200, r.status);
      done();
    });
  });
  // it('should delete', done => {
  //   nock('https://api.intercom.io').delete('/subscriptions/bar', { id: 'bar' }).reply(200, {});
  //   const client = new Client('foo', 'bar').usePromises();
  //   client.webhook.delete({ id: 'bar'}).then(r => {
  //     assert.equal(200, r.status);
  //     done();
  //   });
  // });
});
