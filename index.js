
function ReSaveData(memo_array) {
    
    // list-area<li>をオブジェクト化
    const listItems = document.querySelectorAll('.list-area li');
    
    // list-area内の<li>と<p>の値が取得出来なくなるまでループ処理
    listItems.forEach((li, index) => {

        // <li>(タイトル名)を取得
        const titleText = li.childNodes[0].textContent.trim();
        
        // <li>内の<p>(メモの内容)を取得
        const contentText = li.querySelector('p').textContent.trim();
        
        // 配列内にタイトル名とメモの内容を記録
        memo_array.push({Title:titleText, Content:contentText});
        console.log(memo_array);

        // 要素を削除
        li.remove();
    });

    // list-area<ul>をオブジェクト化
    const ul = document.querySelector('.list-area ul');

    // list-area内の<li>と<p>の値が取得出来なくなるまでループ処理
    savedData.forEach((data) => {
        
        // 新しい<li>要素を作成
        const newLi = document.createElement('li');
        
        // タイトルテキストを挿入
        const titleText = document.createTextNode(data.title);
        newLi.appendChild(titleText);
        
        // 新しい<p>要素を作成
        const newP = document.createElement('p');
        newP.textContent = data.content;
        
        // <li>に<p>を追加
        newLi.appendChild(newP);
        
        // <ul>に新しい<li>を追加
        ul.appendChild(newLi);
    });
}

function AddText() {
    const memo_array = {}
    const new_title = document.getElementById('TitleInput').value;
    const new_content = document.getElementById('ContentInput').value;
    
    memo_array = {
            ...memo_array,
            Title:new_title, 
            Content:new_content
    }
    // list-area内の<li>と<p>の値が取得出来なくなるまでループ処理
    listItems.forEach((li, index) => {

        // <li>(タイトル名)を取得
        const titleText = li.childNodes[0].textContent.trim();
        
        // <li>内の<p>(メモの内容)を取得
        const contentText = li.querySelector('p').textContent.trim();
        document.getElementById('inputList').value += UserString + "\n";
    })
}


