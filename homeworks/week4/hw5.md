## 請以自己的話解釋 API 是什麼

舉個例子來說，當我們在Skyscanner 網站搜尋最低票價的機票訊息，依序將指定日期跟飛機往返地點填入之後，Skyscanner 網站的 Server 會收到 request，接著開始執行，然後串接各個售票網站的 API 收集相關資訊，Server 經過處理之後再回傳資料給瀏覽器，經過瀏覽器處理之後，我們就在網頁上看到各家售票網站的票價訊息。其中傳送資料並創造連結所需要的串接平台，就稱為 API。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

1. 403 Forbidden
用戶端沒有查看此網頁的權限，伺服器有收到請求，但拒絕提供服務。
1. 429 Too Many Requests
用戶端在一定時間內傳送太多請求。
1. 505 HTTP Version Not Supported
伺服器不支援或者拒絕支援請求中使用的HTTP版本。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

餐廳平台 URL：https://www.restaurantlog.com/

| 說明    | Method | path       | 參數               | Example             |
|-----------|--------|------------|----------------------|----------------|
| 獲取餐廳列表 | GET    | /data       | _limit:限制回傳資料數量   | /data?_limit=10 |
| 獲取單一餐廳 | GET    | /data/:id   | 無                      | /data/2      |
| 新增餐廳    | POST   | /data       | id:餐廳ID name: 餐廳名稱  | /data?name="美登利" |
| 刪除餐廳    | DELETE   | /data/:id | 無                      | /data/5          |
| 更改餐廳資訊 | PATCH   | /data/:id  | id:餐廳ID name: 餐廳名稱 | /data/5?name="美登利" 
