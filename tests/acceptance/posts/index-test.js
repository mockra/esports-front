import Ember from 'ember';
import startApp from '../../helpers/start-app';

var App;

module('Acceptance: PostsIndex', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('visiting /posts', function() {
  visit('/posts').

  andThen(function() {
    equal(currentPath(), 'posts.index');
    equal(find('ul li:first').text(), 'Test Post');
  });
});
