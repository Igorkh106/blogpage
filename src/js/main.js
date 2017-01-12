/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js

/*
    Custom
 */
//= partials/functions.js

 $(document).ready(function(){
     "use strict";
     //show options on hover
    $(".comment").hover(function(){
        $(this).find(".comment-options").slideToggle();
    });

     //delete comment
     $(".comment-option-delete").click(function(){
       var parentComment = $(this).closest(".comment");
         parentComment.hide();

     });

     //open edit form for a comment
     $(".comment-option-edit").click(function(){
         var parentComment = $(this).closest(".comment");
         var commentText = parentComment.find("p").text();
         var editForm = addEditForm(commentText);

         !parentComment.find("form").length ? parentComment.append(editForm) : false;

     });

     //open reply form for a comment
     $(".comment-option-reply").click(function(){
         var parentComment = $(this).closest(".comment");
         var replyTo = parentComment.find(".comment-author-name").text();
         var replyForm = addReplyForm(replyTo);

         !parentComment.find("form").length ? parentComment.append(replyForm) : false;

     });

 });