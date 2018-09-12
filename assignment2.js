let profileTemplateString = document.getElementById('template').innerHTML;
console.log(profileTemplateString);

let renderProfile = Handlebars.compile(profileTemplateString);





Handlebars.registerHelper('number-format',function(number){
  
  return number.toLocaleString();




});




$('#search-form').on('submit',function(event)
{

  event.preventDefault();
  $('#loading').html('Loading...');
  $('#results').html('');


  let url = 'https://www.reddit.com/r/';
  console.log(url);

  let form = $(this);
  let term = form.find('input[name="subreddit"]').val();
  console.log(term);

  url = url + term + '.json'
  console.log(url);


  let promise = $.ajax({
  type:'get',
  url:url
});



  promise.then(function(items) {

    // if (items.error) 
    // {
    //   $('#loading').html('');
    //   $('#results').append('Oops! Something went wrong!');

    // }
    // else
    // {
            console.log('success',items);

          let renderedItems = renderProfile({item: items.data.children
        });
          $('#loading').html('');



          $('#results').append(renderedItems);
      // }


    
    // let html = '';
    // let dataInside = titles.data.children;
    
      
    
    // dataInside.forEach(function(child){

    // 	html += `<div><strong>Title:</strong> <a href=${child.data.url} target="_blank">${child.data.title}</a></div>
    // 			<div><strong>Score:</strong> ${child.data.score}</div>
    // 			<div><strong>Author:</strong> ${child.data.author}</div>
    //       <div><strong>Subreddit Subscribers:</strong> ${child.data.subreddit_subscribers}</div>
    //       <br></br>




    	  	
    // 	`;


    // });

    // $('#results').html(html);



},function(error){
    // let html = '';
    // html += `No such subreddit`;
    console.log('error',error);
    $('#loading').html('');



    $('#results').append('Oops! Something went wrong!');
    // $('#results').html(html);

});

});