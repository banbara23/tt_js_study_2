//Practice06

$(document).ready(function(){
  //配列宣言
  var i,href;

  for(i=2008;i<2016;i++){
    $('#info'+i+' a').each(function(i,e){
      href = $(e).attr('href');
      if( href.match(/^http:\/\//i) || href.match(/^https:\/\//i) || href.match(/^\/\//i) ){
        $(e).attr('target','_blank');
        if( !href.match(/temptech/i) ){
          $(e).addClass('outSiteLink');
        }
      }
    });
  }
});

