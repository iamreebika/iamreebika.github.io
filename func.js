  let container = $('#pagination');
      container.pagination({
        pageSize	:5,
      dataSource:  function(done) {
        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/iamreebika/repos',
            success: function(response) {
                done(response);
            }
        });
     },
      callback: function (data, pagination) {
          var dataHtml = '<ul>';
  
          $.each(data, function (index, item) {
          dataHtml += '<li><a href="' + item.html_url + '">'+item.name+'</a></li>';
          });
  
          dataHtml += '</ul>';
          console.log(dataHtml);
  
          $("#repoContainer").html(dataHtml);
      }
    });
