## 交作業流程

1. 先將位於 GitHub 上專屬個人的課程資料夾，在 Git 程式上操作，並複製到自己的電腦：`git clone https://github.com/Lidemy/mentor-program-3rd-sophiebetough.git`

1. 為作業新開一個 branch：`git branch week1`

1. 轉換到要新增或修改的 branch：`git checkout week1`

1. 再次確認所在 branch 位置：`git status`

1. 接著寫作業，直到完成後，加入並建立版本控制：`git commit -am “ week1 finished ”`

1. 然後再將建立好的版本，推上 GitHub：`git push origin week1`

1. 在 GitHub 上，按下 pull requests

1. 然後進入下個頁面，按下 new pull request

1. 在下個頁面，請在 Compare 的地方，選擇要融合 master 的 branch 

1. 確認都沒問題，也檢查作業無誤，就按下 create pull request

1. 接著前往課程的 repository，建立新的 issue

1. 進入下個頁面，接著按照標題規範，並貼上剛剛 pull request的網址，按下 submit new issue

1. 等待胡立 merge 作業之後，再回到 Git程式上，先切換到 master：`git checkout master`

1. 同步更新在本機的 Git 程式上：`git pull origin master`

1. 最後刪掉這次作業的 branch：`git branch -d week1`
 

