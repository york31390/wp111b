第三章 CSS基礎
=
### 3.1 使用CSS樣式來為HTML元素添加樣式
```
<!DOCTYPE html>
<html>
<head>
  <title>My Web Page</title>
  <style>
    /* 選擇器用於選擇要樣式化的元素 */
    h1 {
      color: #333;
      font-size: 24px;
      text-align: center;
    }

    p {
      color: #666;
      font-size: 16px;
      line-height: 1.5;
    }

    .highlight {
      background-color: yellow;
    }

    #myButton {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Web Page</h1>

  <p>This is a paragraph with some text. It will be styled according to the CSS rules defined above.</p>

  <p class="highlight">This paragraph has the "highlight" class applied to it, which gives it a yellow background.</p>

  <button id="myButton">Click Me</button>
</body>
</html>
```
示例中，在< style >標籤內使用了不同的選擇器來選擇要樣式化的元素：  

h1 選擇器用於樣式化< h1 >標籤，設定了文字顏色、字體大小和文字對齊方式。

p 選擇器用於樣式化< p >標籤，設定了文字顏色、字體大小和行高。

.highlight 選擇器用於樣式化具有highlight類的元素，設定了背景顏色為黃色。

#myButton 選擇器用於樣式化具有 myButton id 的元素，這裡樣式化了一個按鈕，設定了背景顏色、文字顏色、邊框、邊框半徑、內邊距等屬性。
### 3.2 選擇和定位HTML元素
通過標籤名稱選擇元素（例如 h1 選擇所有 < h1 > 標籤）  

通過類名選擇元素（如 .highlight 選擇所有具有 highlight 類的元素）  

通過 id 選擇元素（如 #myElement 選擇具有 myElement id 的元素）  

通過元素的位置和層級關係選擇元素（如 .container p 選擇 .container 元素內部的所有 < p > 標籤）  

通過元素的屬性選擇元素（如 input[type="text"] 選擇所有 type 屬性值為 "text" 的 < input > 元素）  

通過選擇器組合選擇元素（如 .siblings ~ p 選擇 .siblings 元素後面的所有 < p > 元素）
### 3.3 理解盒模型元素尺寸
width 屬性指定了元素的寬度。  

height 屬性指定了元素的高度。  

border 屬性設置了元素的邊框，包括邊框的寬度、類型和顏色。  

padding 屬性設置了元素的內邊距，指定了元素內容區域與邊框之間的空間。  

margin 屬性設置了元素的外邊距，指定了元素與其他元素之間的空間。  
