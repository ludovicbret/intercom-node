export default class Webhook {
  constructor(client) {
    this.client = client;
  }
  list(data, f) {
    return this.client.get('/subscriptions/', data, f);
  }
  find(params, f) {
    return this.client.get(`/subscriptions/${params.id}`, params, f);
  }
  create(params, f) {
    return this.client.post(`/subscriptions`, params, f);
  }
  update(params, f) {
    return this.client.post(`/subscriptions/${params.id}`, params, f);
  }
  delete(params, f) {
    return this.client.delete(`/subscriptions/${params.id}`, params, f);
  }
}
