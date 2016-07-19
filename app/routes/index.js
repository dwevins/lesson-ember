import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        img: 'http://placecage.com/300/300',
        title: 'I am an object'
      },
      {
        img: 'http://stevensegallery.com/400/400',
        title: 'segal'
      },
    ]
  }
});
