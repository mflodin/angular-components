// create our controller using the
// highly controversial class
import _ from 'lodash';

class BlogController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.message = 'Kittens!';
    this.posts = _.times(9, i => {
      return {
      	title: 'Kitten',
      	author: 'Mr Meowgi'
      };
    });
  }
}
// could also just export the class up top as well
export {BlogController};

