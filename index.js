
// メモ一覧の配列を作成
const MemoList = {Title: "例 メモのタイトル",Content: "┗メモの内容"}

/**メモ追加
 * 各inputタグから タイトル名 と メモの内容 を取得後、
 * list-area内に要素を新規作成して値をブチ込む。
 */
function AddTextMemo() {

    // 各<input>タグをオブジェクトとして取得
    const input_title = document.getElementById('TitleInput');
    const input_content = document.getElementById('ContentInput');

    // 各inputタグから タイトル名 と メモの内容 を取得する。
    const new_title = input_title.value;
    const new_content = input_content.value;
    console.log(new_title)
    console.log(new_content)

    // 各inputタグのタイトル名とメモの内容が何かしら記載されていたら？
    if (new_title != "" && new_content != "") {

        // 新しい<li>要素を作成して、クラスを追加
        const newLi = document.createElement('li');
        newLi.classList.add('list'); 
        
        // 新しい<h4>要素を作成して、クラスを追加
        const newH4 = document.createElement('h4');
        newH4.classList.add('list-title');
        newH4.textContent = new_title;
        
        // 新しい<p>要素を作成して、クラスを追加
        const newP = document.createElement('p');
        newP.classList.add('list-content');
        newP.textContent = `┗${new_content}`;
        
        // <li>に<h4>を追加
        newLi.appendChild(newH4);

        // <li>に<p>を追加
        newLi.appendChild(newP);
        
        // <ul>に新しい<li>を追加
        document.querySelector('.list-area ul').appendChild(newLi);

        // 各inputタグのタイトル名とメモの内容をリセットする
        input_title.value = "";
        input_content.value = "";
    }
}

/**メモ削除
 * メモ一覧内の一番下のメモを削除する。
 */
function DeleteMemo() {

    // ulをオブジェクトとして定義
    const ul = document.querySelector('.list-area ul');

    // lastMemoを最後の<li>タグオブジェクトとして定義
    const lastMemo = ul.querySelector('li:last-child');

    // lastMemoのクラス名を取得
    const lastMemo_ClassName = lastMemo.className;
    console.log(lastMemo_ClassName)
    
    // lastMemoでclass名が『list-0』ではなかったら、<li>の要素ごと削除する。
    if (lastMemo && lastMemo_ClassName != "list-0") {
        ul.removeChild(lastMemo);
    }
}

/**メモコピー
 * メモ一覧内の一番下のメモのタイトル名とメモの内容をコピーして<input>タグ内に記載する。
 */
function CopyMemo() {

    // ulをオブジェクトとして定義
    const ul = document.querySelector('.list-area ul');

    // lastMemoを最後の<li>タグオブジェクトとして定義
    const lastMemo = ul.querySelector('li:last-child');

    // lastMemoのクラス名を取得
    const lastMemo_ClassName = lastMemo.className;
    console.log(lastMemo_ClassName)
    
    // lastMemoでclass名が『list-0』ではなかったら
    // メモ一覧の一番下のタイトル名とメモ内容をコピーして、<input>タグに貼り付ける
    if (lastMemo && lastMemo_ClassName != "list-0") {

        // タイトル名とメモ内容の値を取得
        const Copy_title = lastMemo.querySelector('h4').textContent;
        const Copy_content = lastMemo.querySelector('p').textContent;
        console.log(Copy_title)
        console.log(Copy_content)

        // 各<input>タグをオブジェクトとして取得
        const input_title = document.getElementById('TitleInput');
        const input_content = document.getElementById('ContentInput');

        // 各<input>タグに取得した値を貼り付ける
        input_title.value = Copy_title;
        input_content.value = Copy_content.substring(1, Copy_content.length);
    }
}