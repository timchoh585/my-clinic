$(document).ready(function(){
  var json= $.getJSON('json/dashboard_notifications.json', function(result){
  let notification_list = result.notifications;
  for(i=0; i<notification_list.length; i++){
    var msg = notification_list[i].message;
    var alertType = mapToBootstrapAlert(notification_list[i].urgency);
    var time = notification_list[i].time;
    var div1 = $('<div class="col-md-auto notification alert ' + alertType + ' alert-dismissible" role="alert">' + msg + ' (' + time + ')'+'</div>');
    var closeButton = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close" style="right:0px !important;"></button>');
    var span = closeButton.append($('<span aria-hidden="true">&times;</span>'));
    div1.append(closeButton);
    $('#dash').append(div1);
  }
  });
  function mapToBootstrapAlert(urgency){
    var mappedVal = "";
    switch(urgency) {
    case "standard":
        mappedVal = "alert-reg" ;
        break;
    case "urgent":
        mappedVal = "alert-urgent";
        break;
    case "upcoming":
        mappedVal = "alert-upcoming"
        break;

    default:
        text = "alert-reg";
}
return mappedVal;
  }
});
