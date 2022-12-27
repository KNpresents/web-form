document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // フォームの送信を抑止
  
    // フォームから入力値を取得
    var inputValue = document.getElementById("inputField").value;
  
    // 入力値を引数としてfind_links関数を呼び出す
    var links = find_links(inputValue);
  
    // 結果を表示するdivをクリア
    document.getElementById("results").innerHTML = "";
  
    // リンクのリストを作成
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var a = document.createElement("a");
      a.href = link;
      a.textContent = link;
      document.getElementById("results").appendChild(a);
    }
  });
  