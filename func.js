$.getJSON("https://api.github.com/users/iamreebika/repos?per_page=5", function(json) {
    var resp = '';
    $.each(json, function(index, value) {
      resp=resp+index + ' ' + value['html_url']+ ' -';
      $('#gitfunc').html(resp);
    });
  });
