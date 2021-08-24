// 厳格モード設定
    'use strict';

// HTMLの情報取得
    const userNameInput = document.getElementById('user-name')
    const setNameButton = document.getElementById('set-name');
    const navDivided = document.getElementById('nav-area');
    const travelDivided = document.getElementById('travel-area');
    const nextButton = document.getElementById('next-nav')

// constの配列でパターンを定義

    // 総合的なナビゲーション
        const navGeneral = [
            '旅で使用する名前を設定してください。',
            'こんにちは！',
            'あなたのWeb世界旅行をお助けするナビゲーターです。',
            'よろしくお願いします！',
            'では、旅をお楽しみください！'
        ];

    // 状況を示すパターン    
        const statePattern = [
            'userNameNotSet',
            'userNameIsSet',
            'traveling' + country[0],
            'traveling' + country[1],
            'traveling' + country[2],
            'traveling' + country[3],
            'traveling' + country[4],
            'traveling' + country[5],
            'traveling' + country[6],
            'traveling' + country[7],
            'traveling' + country[8],
            'travelFinish'
        ];

// 変数を定義
    let nowState = statePattern[0];　// 現在の状況を代入
    let nowNav = navGeneral[0]; // 現在表示させるナビゲーション内容を代入
    let nowNavNumber = 0; // ナビゲーション内容を番号化

// sessionStorageに書き込む
    sessionStorage.setItem('nowState' , nowState);

// 関数を定義

    // 小要素を作成する関数
        function createNav() {
            let navContents;
            navContents.innerText = (nowNav);
            navContents = document.createElement('h4');
            navDivided.appendChild(navContents);
         };

         function updateNav() {
             while (navDivided.firstChild) {
                 // 子要素があるかぎり除去
                 navDivided.removeChild(navDivided.firstChild);
            };
         };

// setNameボタン処理
    // setNameボタンがクリックされた時の処理
        setNameButton.onclick = () => {
            const userName = userNameInput.value;
            if (userName.length === 0) {
                return;
            } else if (nowState === statePattern[0]){
                nowState = statePattern[1];
                console.log(nowState);
                console.log('Button clicked. Set name is ' + userName + '.');
                updateNav();
                nowNavnumber
            };
        };

// nextボタン処理
    // nextボタンがクリックされた時の処理
        nextButton.onclick = () => {
            updateNav();
            nowNavNumber = nowNavNumber + 1;
            createNav();
        };
        
// TODO ナビゲーションをWebページに表示させる処理
// TODO 数カ国旅をできるようにする

// 実行スクリプト
    console.log(nowState);
    console.log(nowNav);
    updateNav();
    createNav();