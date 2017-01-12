function addEditForm(text){

    var formLayout = "<div class='col-md-10'>";
    formLayout += "<form>";
    formLayout += "<textarea  name='comment-message' id='comment-message' placeholder='Your message' rows='3'>" + text + "</textarea>";
    formLayout += "<input type='submit' class='btn btn-lg btn-submit pull-right' name='leave-comment' value='Send'/>";
    formLayout += "</form></div>";

    return formLayout;
}

function addReplyForm(person){

    var formLayout = "<div class='col-md-10 comment-reply'>";
    formLayout += "<div class='comment-meta'>";
    formLayout += "<span class='comment-option comment-option-edit pull-left'><i class='fa fa-mail-forward' aria-hidden='true'></i>" + person + "</span>";
    formLayout += "<button  class='comment-option comment-option-close pull-right'><i class='fa fa-close' aria-hidden='true'></i> Close</span>";
    formLayout += "</div>";
    formLayout += "<form>";
    formLayout += "<textarea  name='comment-message' id='comment-message' placeholder='Your message' rows='3'></textarea>";
    formLayout += "<input type='submit' class='btn btn-lg btn-submit pull-right' name='leave-comment' value='Send'/>";
    formLayout += "</form></div>";

    return formLayout;
}
