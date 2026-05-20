# ちびNavi - JLPT 日語學習資源導航網站

`ちびNavi` 是一個專門為外國日語學習者設計的**教材導航與進度追蹤門戶網站**。

本專案精選了日本極具人氣的免費教育資源網站 **[ちびむすドリル (Chibimusu Drill)](https://happylilac.net/)** 中的五十音、漢字、文法與文章讀解教材，並將這些本來針對日本母語學童設計的教材，精準對應至外國人學習日語的 **JLPT N5 到 N1 級別**，方便自學者快速找到合適的練習題。

---

## 🚀 專案特點

1.  **JLPT 精準映射**：
    *   **N5**：基礎五十音、小學一年級漢字（80字）、基本主謂句結構、一年級簡單讀解。
    *   **N4**：小學二/三年級漢字、基礎助詞辨析、二年級短篇故事讀解。
    *   **N3**：小學四/五年級漢字、基礎敬語練習、指示詞與接續詞、三/四年級說明文讀解。
    *   **N2**：小學六年級漢字、國中一年級基礎國語文法、五/六年級綜合長文讀解。
    *   **N1**：中學生常用漢字（1130字）、四字熟語、諺語與故事成語、國中生語文思辨與古典基礎讀解。
2.  **進度追蹤 (Progress Tracker)**：利用瀏覽器 `LocalStorage` 記住您的完成狀態，自動計算百分比進度條，重整網頁不丟失。
3.  **即時搜尋 (Live Filter)**：可直接透過關鍵字即時篩選跨級別的所有學習單。
4.  **現代日系美學**：極簡日式 Zen 配色、高質感毛玻璃特效 (Glassmorphism)、自適應深色/淺色模式，體驗流暢優雅。

---

## 🛠️ 技術架構

網站採用純前端技術開發，保證載入速度、極高相容性，且完全無相依套件：
*   **HTML5**：語意化標籤，符合 SEO 與螢幕閱讀器無障礙標準。
*   **CSS3**：使用 CSS Cascade Layers 建立設計系統，利用 `light-dark()` 函數實現自適應深淺色模式，並支援 RWD 行動端自適應。
*   **Javascript (ES6)**：完全原生 logic，動態載入資料、儲存 LocalStorage 與處理 DOM 交互。

---

## 📦 如何在本地運行與測試

1.  在專案根目錄，啟動任何靜態網頁伺服器：
    ```bash
    # 使用 Python 啟動 (連接埠 8080)
    python3 -m http.server 8080
    
    # 或使用 Node.js http-server
    npx http-server -p 8080
    ```
2.  開啟瀏覽器造訪：`http://localhost:8080`

---

## ☁️ 部署至免費平台 (GitHub Pages 部署指引)

由於本專案為純靜態網站（沒有後端資料庫），最理想且完全免費的架站平台是 **GitHub Pages**。

### 步驟 1：建立 GitHub 儲存庫
1.  登入您的 GitHub 帳號。
2.  點選右上角的 **New repository**。
3.  將 Repository name 命名為 `chibi-navi` (或您喜好的名稱)。
4.  設定為 **Public**，且**不要**勾選 "Initialize this repository with a README"（因為本地已建立）。
5.  點選 **Create repository**。

### 步驟 2：將本地專案推送至 GitHub
在您的本地終端機（專案目錄下）執行以下指令：
```bash
# 確保本地已初始化 Git 倉庫
git init

# 將所有檔案加入暫存區
git add .

# 提交本地紀錄
git commit -m "feat: init chibi-navi portal web"

# 連結遠端 GitHub 儲存庫 (請將 <username> 替換成您的 GitHub 帳號)
git remote add origin https://github.com/<username>/chibi-navi.git

# 設定主分支為 main
git branch -M main

# 推送檔案至遠端 GitHub
git push -u origin main
```

### 步驟 3：在 GitHub 啟用 Pages 服務
1.  進入剛才推上去的 GitHub Repository 網頁。
2.  點選頂部選單的 **Settings**。
3.  在左側側邊欄找到並點選 **Pages**（位於 Code and automation 分類下）。
4.  在 **Build and deployment** 下方的 **Source**，維持選擇 `Deploy from a branch`。
5.  在 **Branch** 部分，將下拉選單從 `None` 改為 `main`，資料夾維持 `/ (root)`，然後點選 **Save**。
6.  等待約 1-2 分鐘，重新整理頁面，頂部就會顯示您的專案公開網址（格式通常為：`https://<username>.github.io/chibi-navi/`）。

---

## ⚖️ 版權聲明與版規遵循 (Important Disclaimer)

本專案遵守 **Chibimusu Drill (ちびむすドリル)** 的著作權使用規範：
*   **不託管/轉載 PDF**：本網站**絕無**直接儲存或下載任何 happylilac.net 的 PDF 檔案。
*   **超連結導航**：本站僅做為精美指南門戶，所有下載按鈕皆**直接跳轉/外連至 Chibimusu 官方的原生教材下載頁面**，使用者需在官方網站進行下載列印。
*   本專案純屬個人/非商業日語學習導航使用，所有版權皆歸屬 **パディンハウス (PadinHouse)** 所有。
