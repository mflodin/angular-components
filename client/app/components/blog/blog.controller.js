import _ from 'lodash';

 class BlogController {
  constructor(Posts) {
    this.message = 'The latest from the blog';
    this.posts = Posts.getAll();
  }
}

BlogController.$inject = ['Posts'];


export {BlogController}

