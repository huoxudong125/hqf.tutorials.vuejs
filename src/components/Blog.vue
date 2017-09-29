<template>
  <div id="vue-app">
    <h2>Blog Detail</h2>
    <div v-for="blog in $data.blogs">

      <h3>Blog is :{{blog.name}}</h3>

      <h4>Post:</h4>
      <post :post="blog.post"></post>
      <h4>Commnents :</h4>
      <comments :comments="blog.post.comments"></comments>

    </div>
  </div>
</template>

<script>

  const initBlogs = {
    blogs: [
      {
        name: 'blog1',
        post: {
          title: 'Hello World!',
          body: 'This is a blog content.',
          comments: [{
            body: 'good demo',
          },
          ],
        },
      },
    ],
  };


  export default {
    name: 'blog',

    data() {
      return initBlogs;
    },
    components: {
      post: {
        // Obviously your template should probably be a bit more than this...
        template: '<div><h1>{{post.title}}</h1><p>{{post.body}}</p></div>',

        // Data bindings from parent
        props: ['post'],
      },
      comments: {
        template: '<ul><li v-for="comment in comments">{{ comment.body }}</li></ul>',
        props: ['comments'],
      },
    },
  };

  // Vue.extend({
  //    components: {
  //      post: {
  //        // Obviously your template should probably be a bit more than this...
  //        template: '<h1>{{post.title}}</h1><article>{{post.body}}</article>',
  //
  //        // Data bindings from parent
  //        props: ['post'],
  //      },
  //      comments: {
  //        template: '<ul><li v-for="comment in comments">{{ comment.body }}</li></ul>',
  //        props: ['comments'],
  //      },
  //    },
  //  });

  //  ready: function( ) {
  //    var self = this;
  //    // assuming you've already got jquery on the page...
  //    // and the api/blog route fetches all blog posts with their comments...
  //    $.getJSON('/api/blog', function (data) {
  //      self.blogs = data;
  //    });
  //  }
</script>
