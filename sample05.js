//===============================================
//配列のサンプル
//===============================================

//配列の定義
//-----------------------------------------------

//空の配列を定義
var arr = new Array();
var arr = [];
var arr = {};
//配列という入れ物のみを定義した状態

//配列と値を同時に定義
var fruits = [
  'りんご',
  'みかん',
  'めろん'
];
//値の取り出し方
fruits[0];//りんご
fruits[2];//めろん

//連想配列
var site = {
  'name' : 'Yahoo Japan',
  'url'  : 'http://www.yahoo.co.jp'
};
//値の取り出し方
site['name'];//Yahoo Japan
site['url'];//http://www.yahoo.co.jp


//入れ子配列
var sites = [
  {
    'name' : 'Yahoo Japan',
    'url'  : 'http://www.yahoo.co.jp'
  },
  {
    'name' : '@nifty',
    'url'  : 'http://www.nifty.com'
  }
];
//値の取り出し方
sites[0]['name'];//Yahoo Japan
sites[1]['url'];//http://www.nifty.com




//ループを処理と組み合わせた利用例
//-----------------------------------------------

//配列を呼び出す例
var fruits = [
  'りんご',
  'みかん',
  'めろん'
],i;
for(i=0;i<fruits.length;i++){
  alert( fruits[i] );
}
//---------------------

//配列に格納する例
/*
htmlの記述
<ul id="sample">
  <li>りんご</li>
  <li>みかん</li>
  <li>めろん</li>
</ul>
*/
var fruits = [];
$('#sample > li').each(function(i,e){
  fruits[i] = $(e).text();
});
//fruits === ['りんご','みかん','めろん']


