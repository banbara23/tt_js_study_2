$(document).ready(function(){
	$('#submitButton').click(function(){
		var int = $('#inputField').val();
    if( !int.match(/[0-9]+/) ){
      alert('半角数字を入力してください');
    }else{
      int = parseInt(int);
      if(int%2 === 0){
        alert('入力された数値は偶数です');
      }else{
        alert('入力された数値は奇数です');
      }
    }
	});
});
