第二章 HTML基礎
=

### 2.1 認識HTML的基本結構

以下是一些常見的HTML標籤和元素，讓我們認識HTML的基本結構：  

< !DOCTYPE html >：這是HTML文檔的聲明，它告訴瀏覽器這是一個HTML5文檔。  

< html >：這個標籤包含了整個HTML文檔的根元素。

< head >：這個標籤包含了關於HTML文檔的元信息，如標題、引入外部資源等。  

< title >：這個標籤用於設定網頁的標題，顯示在瀏覽器的標題欄或標籤頁上。  

< body >：這個標籤包含了網頁的主要內容，如文字、圖像、連結等。  

< h1 >至< h6 >：這些標籤用於定義標題的大小和層級，< h1 >表示最高層級的標題，
                < h6 >表示最低層級的標題。  

< p >：這個標籤用於定義段落，用於組織和呈現文字內容。  

< a >：這個標籤用於創建連結，可以指向其他網頁、文件或位置。  

< img >：這個標籤用於插入圖像，需要指定圖像的URL和替代文本。  

< ul >和< li >：這些標籤用於創建無序列表，< ul >表示列表的容器，< li >表示每個列表項目。  

< ol >和< li >：這些標籤用於創建有序列表，< ol >表示列表的容器，< li >表示每個列表項目。  

< div >：這個標籤用於創建一個區塊元素，可以用於組織和定義網頁的版面結構。

### 2.2 使用標題、段落和列表的HTML文字標記
```
<!DOCTYPE html>
<html>
<head>
  <title>My Web Page</title>
</head>
<body>
  <h1>Welcome to My Web Page</h1>

  <h2>About Me</h2>
  <p>Hi, my name is John and I'm a web developer. I love coding and creating amazing websites.</p>

  <h2>Skills</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <h2>Experience</h2>
  <ol>
    <li>Web Developer Intern at XYZ Company</li>
    <li>Freelance Web Designer</li>
  </ol>
</body>
</html>
```
示例中，使用了< h1 >和< h2 >標籤來設置標題的大小和層級。 

< p >標籤用於定義段落，其中提供一些關於自己的文字內容。  

使用< ul >和< li >標籤創建了一個無序列表，列出了一些技能。同樣，< ol >和< li >標籤用於創建有序列表，列出了一些工作經驗。  

當在瀏覽器中預覽該HTML檔案時，標題會以更大的字體顯示，段落則以正常文本呈現，列表項目則以符號或數字開頭。在實際使用時，將上面的HTML文字標記嵌入到HTML檔案的正確位置，並可以根據需要進行自定義和擴展。

### 2.3 插入圖片並設置超連結
```
<!DOCTYPE html>
<html>
<head>
  <title>My Web Page</title>
</head>
<body>
  <h1>Welcome to My Web Page</h1>

  <h2>My Pet</h2>
  <img src="pet.jpg" alt="My Pet" width="300" height="200">

  <h2>My Favorite Website</h2>
  <a href="https://www.example.com">
    <img src="website.png" alt="Example Website" width="200" height="100">
  </a>
</body>
</html>
```
示例中，使用了< img >標籤來插入圖片。在src屬性中，我們指定了圖片的URL，例如pet.jpg和website.png，它們應該是你要使用的圖片的實際檔案名稱。alt屬性用於提供圖片的替代文本，這在圖片無法顯示時會顯示該文本。width和height屬性用於設定圖片的寬度和高度。  

此外使用了< a >標籤來設置超連結。在href屬性中，我們指定了連結的URL，例如https://www.example.com。在< a >標籤內部，我們放置了< img >標籤，這樣圖片就成為了一個可點擊的超連結。

在瀏覽器中預覽該HTML檔案時，圖片會根據指定的寬度和高度進行顯示，可以將width和height屬性調整為適合你的圖片尺寸的值。

### 2.4 建立和格式化一個簡單的表格
```
<!DOCTYPE html>
<html>
<head>
  <title>My Web Page</title>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Web Page</h1>

  <h2>My Friends</h2>
  <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Occupation</th>
    </tr>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>Engineer</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>30</td>
      <td>Teacher</td>
    </tr>
    <tr>
      <td>Mike</td>
      <td>28</td>
      <td>Designer</td>
    </tr>
  </table>
</body>
</html>

```
示例中，使用了< table >標籤來建立表格。< tr >標籤用於定義表格的行，< th >標籤用於定義表格的表頭單元格，< td >標籤用於定義表格的內容單元格。  

在CSS部分，使用一些樣式屬性來格式化表格。  
width: 100%指定表格佔滿父元素的寬度。  
border-collapse: collapse用於將表格邊框合併為單一邊框。  
padding屬性設定單元格內容的內邊距。  
text-align: left將文字靠左對齊。  
border-bottom屬性為每個單元格的底部添加一個1像素的邊框。  
background-color屬性設置表頭的背景顏色。