'use strict';
const travelDivided = document.getElementById('travel');
const country = [
    'America',
    'Australia',
    'France',
    'Germany',
    'Hawaii',
    'Italy',
    'Japan',
    'Korea',
    'NewZealand',
    'Singapore',
    'Spain',
    'UK',
]


// img要素を作成
let img_element = document.createElement('img');
img_element.src = 'media_src/country/'+ country[0]; // 画像パス
img_element.alt = country[0] + 'の地図画像'; // 代替テキスト
img_element.width = 200; // 横サイズ（px）
img_element.height = 200; // 縦サイズ（px）

// 指定した要素にimg要素を挿入
const content_area = document.getElementById("content_area");
content_area.appendChild(img_element);