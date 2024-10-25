
// メモ一覧の配列を作成
const MemoList = {Title: "例 メモのタイトル",Content: "┗メモの内容"}


// 使い回しのヤツ //
/** 要素と値の追加
 * メモ一覧に要素と取得した値を追加する。
 * @param {String} new_title 
 * @param {String} new_content 
 */
function Add_text(new_title,new_content) {

    // タイトル名とメモの内容が何かしら記載されていたら？
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
    }
}

/** 要素から値を取得
 * メモ一覧の要素から値を取得する。
 * @returns String
 */
function Copy_Text() {

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
        console.log(Copy_title);
        console.log(Copy_content);

        return [Copy_title,Copy_content];
    }
}


// 基本の関数 //
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

    // メモ一覧に要素と取得した値を追加する。
    Add_text(new_title,new_content)

    // 各<input>タグの内容をリセットする。
    input_title.value = ""
    input_content.value = ""
}

/**メモをリセット
 * 各<input>タグの内容をリセットする
 */
function ResetMemo() {

    // 各<input>タグをオブジェクトとして取得
    const input_title = document.getElementById('TitleInput');
    const input_content = document.getElementById('ContentInput');

    // inputタグの内容をリセットする
    input_title.value = ""
    input_content.value = ""
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

    // 変数内に関数の戻り値を格納する。
    let CopyArray = Copy_Text()

    // 各<input>タグをオブジェクトとして取得
    const input_title = document.getElementById('TitleInput');
    const input_content = document.getElementById('ContentInput');

    // 各<input>タグに取得した値を貼り付ける
    input_title.value = CopyArray[0];
    input_content.value = CopyArray[1].substring(1, CopyArray[1].length);
    
}


// ポップアップ関数 //
/**ポップアップを開く
 * ポップアップを開いて、前の画面の<input>タグのタイトル名とメモ内容を
 * ポップアップ内のテキストボックス内に反映させる
 */
function openPopup() {

    // ポップアップを開く
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    // ポップアップ内の各<textarea>タグをオブジェクトとして取得
    const Popup_title = document.getElementById('Title_textarea');
    const Popup_content = document.getElementById('Content_textarea');

    // 各<input>タグをオブジェクトとして取得
    const input_title = document.getElementById('TitleInput');
    const input_content = document.getElementById('ContentInput');

    // inputタグの内容をポップアップ内に反映
    Popup_title.value = input_title.value
    Popup_content.value = input_content.value
}

/**ポップアップ内の情報を保存する
 * ポップアップ内で確認・編集された内容を保存して、
 * 前の画面の<input>タグにポップアップの内容を反映させて閉じる
 */
function PopupSaveText() {

    // ポップアップ内の各<textarea>タグをオブジェクトとして取得
    const Popup_title = document.getElementById('Title_textarea');
    const Popup_content = document.getElementById('Content_textarea');

    // 各<input>タグをオブジェクトとして取得
    const input_title = document.getElementById('TitleInput');
    const input_content = document.getElementById('ContentInput');

    // inputタグの内容をポップアップ内に反映
    input_title.value = Popup_title.value
    input_content.value = Popup_content.value

    // ポップアップを閉じる
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

/**ポップアップ内の情報をメモ一覧に追加
 * ポップアップ内で確認・編集された内容をメモ一覧に追加する。
 */
function PopupSaveAddText() {

    // ポップアップ内の各<textarea>タグをオブジェクトとして取得
    const Popup_title = document.getElementById('Title_textarea');
    const Popup_content = document.getElementById('Content_textarea');

    // 各<textarea>タグから タイトル名 と メモの内容 を取得する。
    const new_title = Popup_title.value;
    const new_content = Popup_content.value;
    console.log(new_title)
    console.log(new_content)

    // メモ一覧に要素と取得した値を追加する。
    Add_text(new_title,new_content)

    // 各<textarea>タグの内容をリセットする。
    Popup_title.value = ""
    Popup_content.value = ""
}

/**メモ削除
 * メモ一覧内の一番下のメモを削除する。
 */
function PopupDeleteText() {

    // メモ一覧の一番下の<li>要素を削除する。
    DeleteMemo()
}

/**メモコピー
 * メモ一覧の一番下の要素の値をポップアップ内のテキストボックスにコピペする。
 */
function PopupCopyText() {

    // 変数内に関数の戻り値を格納する。
    let CopyArray = Copy_Text()

    // ポップアップ内の各<textarea>タグをオブジェクトとして取得
    const Popup_title = document.getElementById('Title_textarea');
    const Popup_content = document.getElementById('Content_textarea');

    // 各<textarea>タグに取得した値を貼り付ける
    Popup_title.value = CopyArray[0];
    Popup_content.value = CopyArray[1].substring(1, CopyArray[1].length);

}

/** ポップアップを閉じる */ 
function closePopup() {

    // ポップアップを閉じる
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
