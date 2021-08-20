// 厳格モード設定
    'use strict';

// HTMLの情報取得
    const userNameInput = document.getElementById('user-name')
    const setNameButton = document.getElementById('set-name');
    const navDivided = document.getElementById('nav-area');
    const travelDivided = document.getElementById('travel-area');
    const nextButton = document.getElementById('next-nav')

// constの配列でパターンを定義

    // 旅行する国の配列    
        const country = [
            'America',
            'Australia',
            'France',
            'Germany',
            'Hawaii',
            'Italy',
            'Japan',
            'Korea',
            'UK',
        ];

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
            'playStart',
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
    let nowNav = statePattern[0]; // 現在表示させるナビゲーション内容を代入
    let navCount = 0

// sessionStorageに書き込む
    sessionStorage.setItem('nowState' , nowState);

// 関数を定義
    // ナビゲーション内容(nowNav変数)を判断する関数
        function navBranch() {
            if (nowNav === statePattern[0]) {
                return createNav('attention');
            } else if (nowNav === statePattern[1]) {
                return createNav('startGeneralNav');
            } else if (/traveling/.test(nowState)) {
                return createNav('travelNavi' + nowNav);
            }
        }
        
    // 小要素を作成する関数
        function createNav(navState) {
            let navContents;
            if (navState === 'attention') {
                navContents = document.createElement('h4');
                navContents.innerText = (navGeneral[0]);
                navDivided.appendChild(navContents);
            } else if (navState === 'startGeneralNav') {
                navContents = document.createElement('h4');
                navContents.innerText = (navGeneral[navCount]);
                navDivided.appendChild(navContents);
            }
         }

// setNameボタン処理
    // setNameボタンがクリックされた時の処理
        setNameButton.onclick = () => {
            const userName = userNameInput.value;
            if (userName.length === 0) {
                return;
            } else {
                nowState = statePattern[1];
                console.log(nowState);
                console.log('Button clicked. Set name is ' + userName + '.');
                navBranch();
            }
        }

// nextボタン処理
    // nextボタンがクリックされた時の処理
        nextButton.onclick = () => {
            while (navDivided.firstChild) {
                // 子要素があるかぎり除去
                navDivided.removeChild(navDivided.firstChild);
                navCount = navCount++
                navBranch();
                }
        }

// TODO ナビゲーションをWebページに表示させる処理
// TODO 数カ国旅をできるようにする

// 実行スクリプト
    
    // consolelog
        console.log(nowState);
    // ナビゲーション表示
        navBranch();