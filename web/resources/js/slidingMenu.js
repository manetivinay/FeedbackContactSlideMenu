/**
 * Created by vinay on 10/31/2016.
 */
// app.controller('myController', function ($scope) {
//
// });

app.directive('slidingMenu', function () {
   return{
       restrict: 'A',
       required: '^ngSlider',
       scope: {
           ngSlider: '@'
       },
       template: '<div class="slide-out-div">'
       + '<a class="handle" href="http://link-for-non-js-users">Content</a>'
       + '<h3>Contact me</h3> '
       + '<a href="mailto:vinaymaneti@gmail.com">vinay.maneti@gmail.com</a><br/><br/>'
       + '<p>This is the sample slider panel menu</p>'
       + '<p>This can be a form to submit feedback, or contact info</p>'
       + '</div>',
       controller: ['$scope', function($scope){
          $scope.getTemplate = function (slider) {
              $(function(){
                  $('.slide-out-div').tabSlideOut({
                      tabHandle: '.handle',                               //class of the element that will be your tab
                      pathToTabImage: 'resources/images/contact_tab.gif', //path to the image for the tab *required*
                      imageHeight: '122px',                               //height of tab image *required*
                      imageWidth: '40px',                                 //width of tab image *required*
                      tabLocation: slider,                               //side of screen where tab lives, top, right, bottom, or left
                      speed: 300,                                         //speed of animation
                      action: 'click',                                    //options: 'click' or 'hover', action to trigger animation
                      topPos: '300px',                                    //position from the top
                      fixedPosition: true,                                //options: true makes it stick(fixed position) on scroll
                      onLoadSlideOut: false
                  });
              });
          }
       }],
       link: function (scope,iElement,iAttr) {
           scope.getTemplate(iAttr.ngSlider)
       }
   }
});

// $scope.getTemplate = function (slider) {
//
// }


