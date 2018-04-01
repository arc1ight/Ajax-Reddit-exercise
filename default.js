$('.btn').click(() => {
  $('.text').text('Loading...');
  const searchWord = document.getElementById('searchTerm').value;
  $.ajax({
    url: `https://www.reddit.com/r/EarthPorn/search.json?q=${searchWord}&restrict_sr=true`,
    success(response) {
      $('.text').html('');
      for (let i = 0; i < response.data.children.length; i++) {
        const picture = `<img src="${response.data.children[i].data.thumbnail}"/ >`;
        $('.text').append(picture);
      }
    },
  });
  $('.searchTerm').value('');
});
