## 請解釋後端與前端的差異。

* 前端：你在瀏覽器上看得到的東西。當我們對電腦網頁下達指令之後，而後在網頁上呈現的結果，都可稱之為前端。

* 後端：你在瀏覽器上所看不到的，而背後我們所看不見的運算邏輯。例如說 Google 怎麼執行搜尋，怎麼把搜尋結果從資料庫裡面撈回來，並且丟回前端。


## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. Google首頁瀏覽器，把 request 送到 Google搜尋的 Server（伺服器）上 

1. Server 收到了 request

1. 接著 Server 去問資料庫，並去查詢關鍵字： JavaScript 

1. 資料庫找到了相關資料，再回傳給 Server

1. Server 回傳 response 給瀏覽器

1. 瀏覽器解析回傳有關 JavaScript 的資訊，並顯示出來 


## 請列舉出 3 個 command line 指令並且說明功用。

1. `tree` 以樹狀結構呈現目錄下檔案分布
1. `alias` 可以將我們常用的指令，置換成新的縮寫名稱
1. `nano` 文字編輯器的一種

資料參考自：https://www.codecademy.com/articles/command-line-commands

