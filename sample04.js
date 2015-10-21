//===============================================
//if構文の例
//===============================================
var str,int = 0;

//ｓｔｒの値が空だったとき
if( str === '' ){
  str = 'テスト';
}

//intの値が10未満だったとき
if( int < 10 ){
  int++;
}

//それ以外の処理をいれる
if( str === '' ){
  str = 'hoge';
}else{
  str = 'fuga';
}

//条件を追加
if(int===0){
  alert('zero');
}else if(int<5){
  alert('5未満');
}else{
  alert('5以上');
}

//入れ子
if(int<10){
  if(int===0){
    alret('zero');
  }else if(int%2===0){
    alert('偶数');
  }else{
    alert('奇数');
  }
  i++;
}


//or条件
//「str」の値が「hoge」or「int」の値が「10」
if( (str==='hoge')||(int===10) ){

}

//and条件
//「str」の値が「hoge」かつ「int」の値が「10」
if( (str==='hoge')&&(int===10) ){

}

