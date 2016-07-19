import Ember from 'ember';

export default Ember.Route.extend({
  // 'https://api.imgur.com/3/gallery/hot/viral/0.json'
  model() {
    return fetch('https://api.imgur.com/3/gallery/hot/viral/0.json')
      .then((res) => res.json);
  }
});
